import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="ru">
				<Head>
					<link rel="shortcut icon" href="/favicon.png" />
					<link
						as="font"
						rel="preload"
						href="/fonts/Golos-Text.woff2"
						type="font/woff2"
						crossOrigin=""
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
