/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['media.fortniteapi.io']
	}
}

module.exports = nextConfig
