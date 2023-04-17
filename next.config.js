/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "ndcsystem.s3.me-south-1.amazonaws.com",
      },
    ],
  }
}

module.exports = nextConfig
