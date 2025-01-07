/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This replaces next export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true,
}

export default nextConfig 