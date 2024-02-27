/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		BASE_URL: 'https://api.testvalley.kr',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dvd6ljcj7w3pj.cloudfront.net',
			},
			{
				protocol: 'https',
				hostname: 'prod-testvalley.s3.ap-northeast-2.amazonaws.com',
			},
		],
	},
};

export default nextConfig;
