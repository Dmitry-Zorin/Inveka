import {
	Container,
	Heading,
	HStack,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
} from '@chakra-ui/react'
import {
	faCar,
	faChalkboardUser,
	faGlobe,
	faGraduationCap,
	faHandshake,
	faLaptopCode,
	faPeopleGroup,
	faPersonChalkboard,
	faRankingStar,
	faTools,
} from '@fortawesome/free-solid-svg-icons'
import Head from 'components/Head'
import Icon from 'components/Icon'

export default function AboutPage() {
	return (
		<Container maxW="4xl" fontSize="medium">
			<Head title="О компании" />
			<Stack spacing={6}>
				<Heading as="h1">О КОМПАНИИ</Heading>
				<Text>
					Компания <strong>«Учебный центр ИНВЕКА»</strong> была создана в 2013
					году.
				</Text>
				<Stack
					spacing={5}
					bg="bg-layer-1"
					borderRadius="lg"
					borderLeft="8px solid"
					borderColor="bg-layer-2"
					p={5}
				>
					<HStack spacing={4}>
						<Icon icon={faTools} boxSize={8} opacity={0.5} />
						<Heading as="h3" size="md">
							Специализация
						</Heading>
					</HStack>
					<div>
						<List spacing={2}>
							<ListItem>
								<ListIcon
									as={() => (
										<Icon
											icon={faPersonChalkboard}
											color="text-secondary"
											mr={3}
										/>
									)}
								/>
								Обучение IT-специалистов работе с программными продуктами{' '}
								<strong>Oracle</strong> и <strong>PostgreSQL</strong>
							</ListItem>
							<ListItem>
								<ListIcon
									as={() => (
										<Icon icon={faLaptopCode} color="text-secondary" mr={3} />
									)}
								/>
								Разработка корпоративных информационных систем и корпоративных
								сайтов
							</ListItem>
							<ListItem>
								<ListIcon
									as={() => (
										<Icon icon={faRankingStar} color="text-secondary" mr={3} />
									)}
								/>
								Размещение и продвижение рекламы в интернете
							</ListItem>
						</List>
					</div>
				</Stack>
				<Text>
					С помощью наших партнеров мы можем проводить высококачественное
					обучение на курсах Microsoft и других производителей ПО, а также на
					курсах по управлению и менеджменту в области IT.
				</Text>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					spacing={{ base: 2, md: 4 }}
					align="center"
					bg="primary"
					color="bg"
					borderRadius="xl"
					border="3px solid"
					borderColor="whiteAlpha.500"
					p={4}
				>
					<Icon icon={faPeopleGroup} boxSize={12} opacity={0.75} />
					<Stack spacing={1} fontWeight="medium">
						<Text>
							Сообщите, какой курс Вас интересует, и мы поможем подобрать
							программу обучения исходя из Ваших потребностей
						</Text>
					</Stack>
				</Stack>
				<Text>
					К преподаванию мы привлекаем высококвалифицированных специалистов,
					обладающих не только многолетним практическим опытом работы с
					рассматриваемыми в ходе обучения программными продуктами, но и широким
					кругозором в сфере IT.
				</Text>
				<Stack
					spacing={5}
					bg="bg-layer-1"
					borderRadius="lg"
					borderLeft="8px solid"
					borderColor="bg-layer-2"
					p={5}
				>
					<HStack spacing={4}>
						<Icon icon={faGraduationCap} boxSize={10} opacity={0.5} />
						<Stack spacing={1}>
							<Text as="strong" fontSize="lg">
								Мы предлагаем различные формы обучения в режиме реального
								времени
							</Text>
							<Text as="p" fontSize="small" color="text-secondary">
								Все предлагаемые формы обучение включают не только лекции, но и
								практические занятия
							</Text>
						</Stack>
					</HStack>
					<div>
						<List spacing={2} fontSize="md">
							<ListItem>
								<ListIcon
									as={() => (
										<Icon
											icon={faChalkboardUser}
											color="text-secondary"
											mr={3}
										/>
									)}
								/>
								Очное обучение в аудитории
							</ListItem>
							<ListItem>
								<ListIcon
									as={() => (
										<Icon icon={faGlobe} color="text-secondary" mr={3} />
									)}
								/>
								Очное дистанционное обучение через интернет
							</ListItem>
							<ListItem>
								<ListIcon
									as={() => <Icon icon={faCar} color="text-secondary" mr={3} />}
								/>
								Выездное обучение на территории заказчиков и в аудиториях
								партнеров учебного центра в различных городах России и за
								рубежом
							</ListItem>
						</List>
					</div>
				</Stack>
				<Text>
					Каталог курсов регулярно расширяется. Многие из наших курсов являются
					уникальными. Программы этих курсов разработаны специалистами на основе
					опыта работы в различных IT-проектах и не имеют аналогов среди
					предлагаемых на рынке IT-обучения. В то же время наши специалисты
					готовы провести обучение практически по любой программе курсов Oracle
					или Postgres.
				</Text>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					spacing={{ base: 2, md: 4 }}
					align="center"
					bg="text-secondary"
					borderRadius="xl"
					border="3px solid"
					borderColor="whiteAlpha.500"
					color="bg-layer-1"
					p={4}
				>
					<Icon icon={faHandshake} boxSize={12} opacity={0.75} />
					<Stack fontWeight="medium">
						<Text>
							Мы открыты для сотрудничества с клиентами при формировании
							программ и согласовании цены обучения, при подготовке текстов
							договоров и других документов и при обмене этими документами
						</Text>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	)
}
