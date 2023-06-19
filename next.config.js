/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  // basePath:'/main', // domain.com/main/
  async rewrites() {
    return [
      {
        source: '/image/:path*',
        destination: 'http://localhost:3000/image/:path*',
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/car/1',
  //       destination: '/car/2',
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    domains: ['localhost', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
