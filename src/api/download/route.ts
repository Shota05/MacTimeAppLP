import { NextResponse } from "next/server";

export async function GET() {
  // 例: GitHub Releases の .dmg 直リンク等に変更
  const url =
    process.env.DOWNLOAD_URL ||
    "https://example.com/releases/YourAppName-1.0.0.dmg";
  return NextResponse.redirect(url, { status: 302 });
}
