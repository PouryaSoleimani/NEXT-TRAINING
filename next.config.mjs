/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'fakestoreapi.com', port: '', pathname: '/img/**' }]
	}
}

export default nextConfig;
