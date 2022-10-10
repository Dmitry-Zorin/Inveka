import {
	Box,
	Center,
	Container,
	Heading,
	HStack,
	LinkBox,
	LinkOverlay,
	List,
	ListItem,
	Stack,
	Text,
} from '@chakra-ui/react'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import Head from 'components/Head'
import Icon from 'components/Icon'
import { MotionBox } from 'components/motion'

export default function HomePage() {
	return (
		<Container maxW="4xl" fontSize="medium">
			<Head title="Акции" />
			<Stack spacing={6}>
				<Heading as="h1">АКЦИИ</Heading>
				<List spacing={5}>
					<ListItem
						bg="text-secondary"
						border="3px solid"
						borderColor="whiteAlpha.500"
						borderRadius="xl"
						shadow="dark-lg"
					>
						<LinkBox
							as={HStack}
							spacing={5}
							pos="relative"
							px={{ base: 2, md: 5 }}
							py={4}
						>
							<Box pos="relative" boxSize={20} transform="rotate(-15deg)">
								<MotionBox
									animate={{
										rotate: Array.from(Array(13), (_, i) => 30 * i),
									}}
									transition={{
										ease: 'easeInOut',
										repeat: Infinity,
										repeatType: 'loop',
										duration: 25,
										times: Array.from(Array(13), (_, i) => i / 12),
									}}
								>
									<Icon icon={faCertificate} boxSize="full" color="secondary" />
								</MotionBox>
								<Center pos="absolute" top={0} left={0} right={0} bottom={0}>
									<Text
										fontSize="xl"
										color="bg"
										fontWeight="semibold"
										letterSpacing="wider"
									>
										-10%
									</Text>
								</Center>
							</Box>
							<Heading fontSize="2xl">
								<LinkOverlay
									href="https://inveka-center.ru/akcii/?ELEMENT_ID=526467"
									target="_blank"
									color="bg"
									textDecoration="underline"
									textDecorationColor="transparent"
									textUnderlineOffset="5px"
									textDecorationThickness="2px"
									transitionProperty="text-decoration-color"
									transitionDuration="slower"
									transitionTimingFunction="ease-in-out"
									_hover={{ textDecorationColor: 'secondary' }}
								>
									Скидка на курсы
								</LinkOverlay>
							</Heading>
						</LinkBox>
					</ListItem>
				</List>
			</Stack>
		</Container>
	)
}
