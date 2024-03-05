import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes("_next")) return;

  const host = req.headers.get("host");
  const params = host?.split(".") || [];
  const subdomain = params?.length > 1 ? params[params.length - 2] : null;
  if (subdomain) url.pathname = `/${subdomain}${url.pathname}`;

  return NextResponse.rewrite(url);
}
