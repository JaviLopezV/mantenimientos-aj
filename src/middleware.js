import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Evita archivos estáticos
  if (PUBLIC_FILE.test(pathname)) return;

  // Si la ruta no tiene locale (e.g. '/'), redirige a 'es' o default
  if (
    !pathname.startsWith("/en") &&
    !pathname.startsWith("/es") &&
    !pathname.startsWith("/de") &&
    !pathname.startsWith("/ca") &&
    !pathname.startsWith("/fr")
  ) {
    return NextResponse.redirect(new URL("/es", request.url));
  }
}
