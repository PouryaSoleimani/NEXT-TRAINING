/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakeStoreApi',
        pathname: 'fakestoreapi.com',
      },
    ],
  },
};

export default nextConfig;
