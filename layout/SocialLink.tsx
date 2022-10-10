import { Link, LinkProps } from '@chakra-ui/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from 'components/Icon'

interface SocialLinkProps extends LinkProps {
	icon: IconProp
	href: string
}

export default function SocialLink({ icon, href, ...props }: SocialLinkProps) {
	return (
		<Link href={href} target="_blank" h={8} {...props}>
			<Icon icon={icon} _hover={{ opacity: 0.75 }} boxSize={8} />
		</Link>
	)
}
