/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['flowbite.com']
  },
  i18n: {
    locales: ['en','es'],
    defaultLocale: 'es',
  }
}

module.exports = nextConfig
