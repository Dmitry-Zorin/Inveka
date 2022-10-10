import {
	Box,
	Button,
	Center,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	HStack,
	Image,
	Stack,
	StackProps,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import {
	faBars,
	faEnvelope,
	faFire,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'
import Icon from 'components/Icon'
import Link from 'components/Link'
import { motion } from 'framer-motion'
import Socials from 'layout/Socials'
import { useRouter } from 'next/router'
import { ReactNode, useRef } from 'react'

interface NavLinkProps {
	children: ReactNode
	path: string
}

function NavLink({ children, path }: NavLinkProps) {
	const router = useRouter()
	const isActive = new RegExp(`^\/${path}(/|$)`).test(router.asPath)
	return (
		<Link
			href={`/${path}`}
			textDecoration="underline"
			textDecorationColor="transparent"
			textUnderlineOffset="5px"
			textDecorationThickness="2px"
			transitionProperty="text-decoration-color, font-weight"
			transitionDuration="slower"
			transitionTimingFunction="ease-in-out"
			px={2}
			py={4}
			{...(isActive && {
				color: 'primary',
				fontWeight: 'semibold',
				textDecorationColor: 'secondary',
			})}
		>
			{children}
		</Link>
	)
}

function Navbar(props: StackProps) {
	return (
		<Stack
			direction="row"
			flexGrow={1}
			justify="space-evenly"
			fontSize="lg"
			{...props}
		>
			<NavLink path="courses">Курсы</NavLink>
			<NavLink path="news">Новости</NavLink>
			<NavLink path="discounts">
				<HStack spacing={1}>
					<Icon icon={faFire} color="secondary" boxSize={4} />
					<Text>Акции</Text>
				</HStack>
			</NavLink>
			<NavLink path="contacts">Контакты</NavLink>
			<NavLink path="about">О компании</NavLink>
		</Stack>
	)
}

function Contacts(props: StackProps) {
	return (
		<Stack spacing={1} color="text" letterSpacing="wide" {...props}>
			<HStack>
				<Icon icon={faPhone} color="text-secondary" />
				<Text>+7 (985) 509-57-68</Text>
			</HStack>
			<HStack>
				<Icon icon={faEnvelope} color="text-secondary" />
				<Link
					href="mailto:info@inveka-center.ru"
					target="_blank"
					_hover={{ color: 'primary' }}
				>
					info@inveka-center.ru
				</Link>
			</HStack>
		</Stack>
	)
}

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef<HTMLButtonElement>(null)

	return (
		<Stack spacing={4} minH="100vh">
			<Center shadow="md">
				<Box maxW="7xl" flexGrow={1}>
					<HStack
						spacing={4}
						justify="space-between"
						px={{ base: 2, md: 5 }}
						py={2}
						overflow="hidden"
					>
						<Link href="/">
							<Image
								as={motion.img}
								alt="Лого"
								src="/logo.jpg"
								height="50px"
								initial={{ scale: 0, rotate: -180 }}
								animate={{ scale: 1, rotate: 0 }}
							/>
						</Link>
						<Navbar display={{ base: 'none', lg: 'flex' }} />
						<Contacts display={{ base: 'none', sm: 'flex' }} />
						<Box display={{ base: 'block', md: 'none' }}>
							<Button
								ref={btnRef}
								variant="ghost"
								onClick={onOpen}
								leftIcon={<Icon icon={faBars} />}
							>
								Меню
							</Button>
							<Drawer
								placement="right"
								isOpen={isOpen}
								onClose={onClose}
								finalFocusRef={btnRef}
							>
								<DrawerOverlay />
								<DrawerContent>
									<DrawerCloseButton size="lg" />
									<DrawerHeader>
										<Link href="/">
											<Image alt="Лого" src="/logo.jpg" h={'40px'} />
										</Link>
									</DrawerHeader>
									<DrawerBody>
										<Navbar direction="column" onClick={onClose} />
									</DrawerBody>
									<DrawerFooter>
										<Contacts w="full" />
									</DrawerFooter>
								</DrawerContent>
							</Drawer>
						</Box>
					</HStack>
					<Navbar
						display={{ base: 'none', md: 'flex', lg: 'none' }}
						borderTop="1px"
						borderColor="border"
					/>
				</Box>
			</Center>
			<Flex justify="center" flexGrow={1}>
				<Container maxW="7xl" w="full" p={{ base: 2, md: 5 }}>
					{children}
				</Container>
			</Flex>
			<Center bg="bg-dark" color="bg">
				<HStack
					maxW="7xl"
					flexGrow={1}
					justify="space-between"
					px={{ base: 2, md: 5 }}
					py={4}
				>
					<Text>© 2013 Учебный центр «Inveka»</Text>
					<Socials />
				</HStack>
			</Center>
		</Stack>
	)
}
