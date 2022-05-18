/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	include: ['global.d.ts', 'next-env.d.ts', '**/*.ts', '**/*.tsx'],
};

module.exports = nextConfig;
