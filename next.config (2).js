/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // Note: No 'output: export' — needed for API routes (chatbot)
}
module.exports = nextConfig
