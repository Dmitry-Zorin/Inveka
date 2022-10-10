import { HStack } from '@chakra-ui/react'
import { faInstagram, faVk } from '@fortawesome/free-brands-svg-icons'
import SocialLink from './SocialLink'

export default function Socials() {
	return (
		<HStack spacing={2} justify={{ base: 'center', lg: 'flex-start' }}>
			<SocialLink
				icon={faVk}
				href="https://vk.com/invekatcc"
				aria-label="Открыть профиль в VK"
			/>
			<SocialLink
				icon={faInstagram}
				href="https://instagram.com/inveka_center"
				aria-label="Открыть профиль в Instagram"
			/>
		</HStack>
	)
}
