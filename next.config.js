const headers = require('./headers')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	headers,
	swcMinify: true,
	reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)
