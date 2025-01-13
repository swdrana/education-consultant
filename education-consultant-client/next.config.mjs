/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "images.unsplash.com", // Correct Unsplash domain
        "www.mobvista.com",
        "scontent-mrs2-2.xx.fbcdn.net",
        "plus.unsplash.com"
      ],
    },
  };
  
  export default nextConfig;
  