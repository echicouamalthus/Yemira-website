import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
				port: '',
				pathname: '/photos/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn.prod.website-files.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
