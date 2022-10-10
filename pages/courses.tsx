import {
	Flex,
	Heading,
	HStack,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Stack,
	Tag,
	TagCloseButton,
	TagLabel,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'
import {
	faCalendarDays,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import Head from 'components/Head'
import Icon from 'components/Icon'

export default function CoursesPage() {
	return (
		<>
			<Head title="Курсы" />
			<Stack spacing={5}>
				<Heading as="h1">КУРСЫ</Heading>
				<Wrap>
					<WrapItem>
						<Tag variant="subtle" size="lg">
							<TagLabel>BigData</TagLabel>
						</Tag>
					</WrapItem>
					<WrapItem>
						<Tag variant="solid" size="lg" bg="primary">
							<TagLabel>
								Astra Linux SE, версия 1.6 Сертификат &quot;РусБИТех&quot;
							</TagLabel>
							<TagCloseButton />
						</Tag>
					</WrapItem>
					<WrapItem>
						<Tag variant="subtle" size="lg">
							Java: Application Development
						</Tag>
					</WrapItem>
				</Wrap>
				<SimpleGrid columns={{ base: 1, lg: 2, '2xl': 3 }} spacing={5}>
					{[
						{
							name: 'Основы BigData и Data Science: Алгоритмы, библиотеки, инструменты на базе Python',
							href: 'https://inveka-center.ru/raspisanie-kursov/kurs/552969/',
						},
						{
							name: 'Обработка больших объемов структурированной и неструктурированной информации из различных источников (Big Data)',
							href: 'https://inveka-center.ru/raspisanie-kursov/kurs/552954/',
						},
						{
							name: 'Основы BigData и Data Science: Алгоритмы, библиотеки, инструменты на базе Python',
							href: 'https://inveka-center.ru/raspisanie-kursov/kurs/552969/',
						},
						{
							name: 'Обработка больших объемов структурированной и неструктурированной информации из различных источников (Big Data)',
							href: 'https://inveka-center.ru/raspisanie-kursov/kurs/552954/',
						},
					].map((course, i) => (
						<LinkBox
							key={i}
							as={Stack}
							spacing={0}
							bg="white"
							shadow="md"
							borderRadius="xl"
							overflow="hidden"
							transitionProperty="box-shadow"
							transitionDuration="slower"
							transitionTimingFunction="ease-in-out"
						>
							<HStack justify="space-between" bg="bg-layer-2" px={5} py={3.5}>
								<HStack spacing={1}>
									<Icon icon={faCalendarDays} />
									<Text>26 сентября</Text>
								</HStack>
								<HStack spacing={1}>
									<Icon icon={faLocationDot} />
									<Text>Москва</Text>
								</HStack>
							</HStack>
							<Stack flexGrow={1} spacing={4} p={5}>
								<Flex>
									<Tag>
										Astra Linux SE, версия 1.6 Сертификат &quot;РусБИТех&quot;
									</Tag>
								</Flex>
								<Heading fontSize="xl">
									<LinkOverlay
										href={course.href}
										target="_blank"
										color="primary"
										textDecoration="underline"
										textDecorationColor="transparent"
										textUnderlineOffset="5px"
										textDecorationThickness="2px"
										transitionProperty="text-decoration-color"
										transitionDuration="slower"
										transitionTimingFunction="ease-in-out"
										_hover={{ textDecorationColor: 'secondary' }}
									>
										{course.name}
									</LinkOverlay>
								</Heading>
								<Text>
									Курс знакомит с основными понятиями теории Больших Данных,
									важнейшими алгоритмами их обработки и практической организации
									работы с ними на примере Hadoop...
								</Text>
							</Stack>
							<Stack spacing={0} justify="flex-end" p={5}>
								<Text fontSize="md" fontWeight="medium">
									5 дней
								</Text>
								<Text fontSize="lg" fontWeight="semibold" color="green.600">
									90 000 руб.
								</Text>
							</Stack>
						</LinkBox>
					))}
				</SimpleGrid>
			</Stack>
		</>
	)
}
