import {
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
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import Head from 'components/Head'
import Icon from 'components/Icon'

export default function HomePage() {
	return (
		<Container maxW="4xl" fontSize="medium">
			<Head title="Новости" />
			<Stack spacing={6}>
				<Heading as="h1">НОВОСТИ</Heading>
				<List spacing={5}>
					{[
						{
							text: 'Обновлённое расписание уже на сайте',
							desc: 'Отличная новость! На нашем сайте уже доступно обновленное расписание курсов по всем направлениям. Поспешите записаться на удобную для Вас дату!',
							href: 'https://inveka-center.ru/news/556221/',
						},
						{
							text: 'Приятные цены на обучение Oracle',
							desc: 'В нашем учебном центре проводится обучение по направлению Oracle по программам, идентичным авторизованному обучению. Цены на наши курсы Вас приятно удивят! Получить качественные знания по выгодным ценам - это более, чем реально! Следите за нашими обновлениями на нашем сайте и в социальных сетях.',
							href: 'https://inveka-center.ru/news/556220/',
						},
						{
							text: 'Акции на ряд курсов уже на сайте',
							desc: 'Скидки на все курсы Oracle 30% и на часть курсов Postgres!',
							href: 'https://inveka-center.ru/news/528546/',
						},
						{
							text: 'Скидки на Postgres!',
							desc: 'Ура! Скидка 30% всем слушателям!',
							href: 'https://inveka-center.ru/news/528544/',
						},
					].map(({ text, desc, href }, i) => (
						<ListItem key={i}>
							<LinkBox
								as={Stack}
								borderRadius="xl"
								overflow="hidden"
								shadow="md"
							>
								<HStack justify="space-between" bg="bg-layer-2" px={5} py={3.5}>
									<HStack spacing={1}>
										<Icon icon={faCalendarDays} />
										<Text>26 сентября</Text>
									</HStack>
								</HStack>
								<Stack px={5} py={2}>
									<Heading size="md">
										<LinkOverlay
											href={href}
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
											{text}
										</LinkOverlay>
									</Heading>
									<Text>{desc}</Text>
								</Stack>
								<HStack></HStack>
							</LinkBox>
						</ListItem>
					))}
				</List>
			</Stack>
		</Container>
	)
}
