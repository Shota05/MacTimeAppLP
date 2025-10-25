import { NextResponse } from "next/server";

export async function GET() {
  // 例: GitHub Releases の .dmg 直リンク等に変更
  const url =
    process.env.DOWNLOAD_URL ||
    "https://github.com/Shota05/MacTimeAppLP/releases/download/0.12/7.77.zip";
  return NextResponse.redirect(url, { status: 302 });
}
