/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // For direct access to images in public/uploads
    domains: [
      "images.unsplash.com",  // Correct Unsplash domain
      "www.mobvista.com",
      "scontent-mrs2-2.xx.fbcdn.net",
      "plus.unsplash.com",
      "http://localhost:3000",
      "https://eduor.vercel.app"
    ],
  }, 
  experimental: {
    // Disable static file caching
    forceSwcTransforms: true,
  },
};

export default nextConfig;
