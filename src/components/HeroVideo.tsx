// components/HeroVideo.tsx（一部追加）
"use client";
import { useEffect, useRef } from "react";

export default function HeroVideo(props: {
  poster?: string;
  srcMp4?: string;
  srcWebm?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq?.matches) {
      v.pause();
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
        props.className ?? ""
      }`}
    >
      <video
        ref={ref}
        className="block w-full h-auto"
        poster={props.poster ?? "/hero-poster.jpg"}
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
      >
        {props.srcWebm && <source src={props.srcWebm} type="video/webm" />}
        {props.srcMp4 && <source src={props.srcMp4} type="video/mp4" />}
        お使いのブラウザは動画再生に対応していません。
      </video>
    </div>
  );
}
