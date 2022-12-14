const isDevelopment = process.env.NODE_ENV === 'development'

const csp = [
	"default-src 'self'",
	'connect-src *.yandex.net',
	"script-src 'self' 'unsafe-eval' 'unsafe-inline' *.yandex.ru *.yandex.net yastatic.net",
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: *.yandex.ru *.yandex.net",
]

async function headers() {
	return [
		{
			source: '/:path*',
			headers: [
				{
					key: 'Referrer-Policy',
					value: 'strict-origin',
				},
				{
					key: 'Permissions-Policy',
					value: 'geolocation=(), microphone=(), camera=()',
				},
				{
					key: 'X-Content-Type-Options',
					value: 'nosniff',
				},
				{
					key: 'X-Frame-Options',
					value: 'DENY',
				},
				{
					key: 'Content-Security-Policy',
					value: isDevelopment ? '' : csp.join(';'),
				},
			],
		},
		{
			source: '/:path*(ico|woff|woff2|pdf|js)',
			headers: [
				{
					key: 'Cache-Control',
					value: 'public, max-age=31536000, immutable',
				},
			],
		},
	]
}

module.exports = headers
