// components/DownloadLink.tsx
"use client";

import { useRouter } from "next/navigation";
import { MouseEvent, AnchorHTMLAttributes } from "react";
// ★ 追加：Next公式のイベント送信ヘルパ（GA4）
import { sendGAEvent } from "@next/third-parties/google";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string; // 既定は /download （サーバー側で実ファイルURLへ302）
  fileName?: string; // 例: "YourApp.dmg"
};

export default function DownloadLink({
  href = "/download",
  fileName = "YourApp.dmg",
  onClick,
  children,
  ...rest
}: Props) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    // 新規タブ操作はそのまま通す（UXを壊さない）
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      rest.target === "_blank"
    ) {
      return;
    }

    // 計測 → 安全に遷移
    e.preventDefault();
    const go = () => router.push(href);

    // GA4 の file_download を模倣（拡張計測と同じパラメータ名を採用）
    // 拡張計測の対象拡張子には .dmg が入っていないため、手動送信が必要。 [oai_citation:6‡Google Help](https://support.google.com/analytics/answer/9216061?hl=en)
    const absoluteUrl =
      typeof window !== "undefined"
        ? new URL(href, window.location.href).toString()
        : href;

    let navigated = false;
    const safeGo = () => {
      if (!navigated) {
        navigated = true;
        go();
      }
    };

    // Next公式ヘルパ。内部で dataLayer/gtag に委譲される。 [oai_citation:7‡Next.js](https://nextjs.org/docs/app/guides/third-party-libraries)
    sendGAEvent("event", "file_download", {
      file_name: fileName, // 標準パラメータに合わせる
      file_extension: "dmg",
      link_url: absoluteUrl,
      value: 1,
      transport_type: "beacon", // 可能なら sendBeacon
      event_callback: safeGo, // 送信後に遷移
    });

    // 万一 event_callback が呼ばれない場合のフォールバック
    setTimeout(safeGo, 300);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
