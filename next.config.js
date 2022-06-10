/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	include: ['global.d.ts', 'next-env.d.ts', '**/*.ts', '**/*.tsx'],
	// production 빌드시 eslint 에러는 무시하고 빌드
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
};

module.exports = nextConfig;
