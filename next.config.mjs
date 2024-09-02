/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  // basePath: '/ArguellesCoaching', // comentar para dev
  // assetPrefix: '/ArguellesCoaching/', // comentar para dev
  experimental: {
    missingSuspenseWithCSRBailout: false
  },
  images: {
    domains: [
      'scontent.fyzd1-3.fna.fbcdn.net',
      'instagram.fyto1-2.fna.fbcdn.net',
      'assets.vogue.com',
      'm.media-amazon.com',
      'upload.wikimedia.org'
    ]
  }
}

export default nextConfig
