import { useState } from 'react'
import {
	Accordion,
	Button,
	CourseCard,
	InDropdown,
	Link,
	Option,
	SearchDefault,
} from '../components/Components'

const AllCourses = () => {
	const [selectedChapter, setSelectedChapter] = useState(null)

	const chapters = [
		{ value: '1', label: 'Глава 1' },
		{ value: '2', label: 'Глава 2' },
		{ value: '3', label: 'Глава 3' },
	]

	const courses = [
		// Начинающий
		{
			img_path:
				'https://i.pinimg.com/736x/66/f7/22/66f72263bb2ebe4cf2436a49bf76e7af.jpg',
			title: 'Введение в HTML',
			description:
				'Основы верстки сайтов: теги, структура документа и первая страница.',
			tag: 'Начинающий',
			procent: 20,
		},
		{
			img_path:
				'https://i.pinimg.com/736x/9b/0c/7c/9b0c7cc521987e83e60b49791828362b.jpg',
			title: 'Основы CSS',
			description:
				'Как оформлять HTML-страницы: стили, шрифты, цвета и отступы.',
			tag: 'Начинающий',
			procent: 45,
		},
		{
			img_path:
				'https://i.pinimg.com/736x/41/26/96/412696b9ec5e37e2952fb4a689053f98.jpg',
			title: 'Знакомство с JavaScript',
			description: 'Первая программа на JS, базовый синтаксис и работа с DOM.',
			tag: 'Начинающий',
			procent: 10,
		},
		{
			img_path:
				'https://i.pinimg.com/736x/a2/e2/9f/a2e29fc13256aecd5f4b700fc53c3e7b.jpg',
			title: 'Git и GitHub для новичков',
			description:
				'Управление версиями проектов, создание репозиториев и коммитов.',
			tag: 'Начинающий',
			procent: 60,
		},

		// Эксперт
		{
			img_path:
				'https://i.pinimg.com/originals/d2/b7/72/d2b77209ef7d345bbdb395464aab2b33.png',
			title: 'React.js продвинутый',
			description:
				'Оптимизация компонентов, хуки, контекст и проектирование архитектуры.',
			tag: 'Эксперт',
			procent: 80,
			isProgressbar: true,
		},
		{
			img_path:
				'https://i.pinimg.com/originals/1d/f5/23/1df52364b1b403c4d58e32e41d546a01.png',
			title: 'Node.js и Express',
			description: 'Создание REST API, роутинг, middleware и подключение БД.',
			tag: 'Эксперт',
			procent: 55,
			isProgressbar: true,
		},
		{
			img_path:
				'https://i.pinimg.com/originals/d6/8a/e3/d68ae3f3b1e11e8a3ae0de0b5824b9a9.png',
			title: 'TypeScript для профессионалов',
			description:
				'Генерики, интерфейсы, строгая типизация и интеграция с React.',
			tag: 'Эксперт',
			procent: 35,
			isProgressbar: true,
		},
		{
			img_path:
				'https://i.pinimg.com/originals/0e/72/eb/0e72eb2c4931c3d05ab40cc1a2ddcaad.png',
			title: 'Docker и деплой приложений',
			description:
				'Контейнеризация, docker-compose, деплой на VPS и CI/CD пайплайны.',
			tag: 'Эксперт',
			procent: 70,
			isProgressbar: true,
		},
	]

	return (
		<>
			<div className='py-10 px-25'>
				<div className='flex flex-col gap-5'>
					<div className='inline-flex gap-3'>
						<Link text={'Dashboard'} />
						<p>-</p>
						<Link text={'Courses'} />
					</div>
					<p className='text-5xl font-bold mb-4'>МелГУ СУО 1.1</p>
					<div className='inline-flex items-center gap-6'>
						<Option
							options={chapters}
							selectedValue={selectedChapter}
							onSelect={setSelectedChapter}
						/>
						<SearchDefault />
					</div>
					<Accordion ChapterName='Начинающие'>
						{courses
							.filter(course => course.tag === 'Начинающий')
							.map((course, index) => (
								<CourseCard
									key={index}
									img_path={course.img_path}
									title={course.title}
									description={course.description}
									tag={course.tag}
									procent={course.procent}
									isProgressbar={course.isProgressbar}
								/>
							))}
					</Accordion>

					<Accordion ChapterName='Эксперт'>
						{courses
							.filter(course => course.tag === 'Эксперт')
							.map((course, index) => (
								<CourseCard
									key={index}
									img_path={course.img_path}
									title={course.title}
									description={course.description}
									tag={course.tag}
									procent={course.procent}
									isProgressbar={course.isProgressbar}
								/>
							))}
					</Accordion>
				</div>
			</div>
		</>
	)
}
export default AllCourses
