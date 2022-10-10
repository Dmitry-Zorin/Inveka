import NextHead from 'next/head'
import { ReactNode } from 'react'

export interface HeadProps {
	children?: ReactNode
	title: string
	desc?: string
}

export default function Head({ children, title, desc }: HeadProps) {
	return (
		<NextHead>
			<title>{`${title} | Учебный центр «Inveka»`}</title>
			<meta name="description" content={desc ?? title} />
			{children}
		</NextHead>
	)
}
