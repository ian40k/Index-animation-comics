/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Enable static exports for Vercel
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
