import { Box, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import {
	faClock,
	faEnvelope,
	faLocationDot,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {
	FullscreenControl,
	Map,
	Placemark,
	RouteButton,
	TrafficControl,
	YMaps,
	ZoomControl,
} from '@pbe/react-yandex-maps'
import Head from 'components/Head'
import Icon from 'components/Icon'
import Link from 'components/Link'

function Contacts() {
	return (
		<Stack
			direction={{ base: 'column', md: 'row' }}
			justify="space-between"
			spacing={6}
			w="full"
			flexShrink={0}
			color="text"
			letterSpacing="wide"
		>
			<Stack spacing={1}>
				<HStack>
					<Icon icon={faPhone} color="text-secondary" />
					<Text as="b">Телефоны</Text>
				</HStack>
				<Text fontSize="lg">+7 (985) 509-57-68</Text>
				<Text fontSize="lg">+7 (916) 312-25-24</Text>
				<Text fontSize="lg">+7 (965) 202 73 32</Text>
			</Stack>
			<Stack spacing={1}>
				<HStack>
					<Icon icon={faEnvelope} color="text-secondary" />
					<Text as="b">Электронная почта</Text>
				</HStack>
				<Link
					href="mailto:info@inveka-center.ru"
					target="_blank"
					fontSize="lg"
					_hover={{ color: 'primary' }}
				>
					info@inveka-center.ru
				</Link>
			</Stack>
			<Stack spacing={1}>
				<HStack>
					<Icon icon={faClock} color="text-secondary" />
					<Text as="b">Режим работы</Text>
				</HStack>
				<Text fontSize="lg">10:00 - 19:00</Text>
			</Stack>
		</Stack>
	)
}

function Address() {
	return (
		<Stack spacing={4} flexGrow={1}>
			<HStack spacing={1}>
				<Icon icon={faLocationDot} />
				<Heading as="h2" fontSize="xl">
					Адрес в Москве
				</Heading>
			</HStack>
			<Text>
				111024, г. Москва, ул. Авиамоторная, дом 8, строение 12, 5 этаж
			</Text>
			<YMaps>
				<Box
					as={Map}
					w="full"
					h={[300, 400, 500, 600]}
					borderRadius="xl"
					overflow="hidden"
					border="1px"
					borderColor="border"
					defaultState={{
						center: [55.755606, 37.713692],
						zoom: 16,
					}}
					defaultOptions={{
						copyrightLogoVisible: false,
						copyrightProvidersVisible: false,
						copyrightUaVisible: false,
					}}
				>
					<FullscreenControl />
					<ZoomControl />
					<RouteButton />
					<TrafficControl />
					<Placemark geometry={[55.755606, 37.713692]} />
				</Box>
			</YMaps>
		</Stack>
	)
}

export default function HomePage() {
	return (
		<Container maxW="4xl" fontSize="medium">
			<Head title="Контакты" />
			<Stack spacing={6}>
				<Heading as="h1">КОНТАКТЫ</Heading>
				<Contacts />
				<Address />
			</Stack>
		</Container>
	)
}
