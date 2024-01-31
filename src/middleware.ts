import { NextRequest, NextResponse } from 'next/server'
 
let locales = ['es']
 
export function middleware(request: NextRequest) {

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  console.log(pathname);
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  )
 
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = 'es'
 
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    '/',
    '/tyc',
    '/privacy-policy'
  ],
}