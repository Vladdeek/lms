import { useState } from 'react'
import {
	Accordion,
	Button,
	CourseCard,
	CoursesBtn,
	InDropdown,
	Link,
	Option,
	SearchDefault,
} from '../components/Components'
import { courses } from '../data/Courses'

const AllCourses = () => {
	const [selectedChapter, setSelectedChapter] = useState(null)

	const chapters = [
		{ value: '1', label: 'Глава 1' },
		{ value: '2', label: 'Глава 2' },
		{ value: '3', label: 'Глава 3' },
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
					<Accordion ChapterName='Начинающие' to={'begginer'}>
						{courses
							.filter(course => course.tag === 'Начинающий')
							.slice(0, 4) // Берём только первые 4 элемента
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

					<CoursesBtn ChapterName={'Опосредованный'} to={''} />

					<Accordion ChapterName='Эксперт' to={'expert'}>
						{courses
							.filter(course => course.tag === 'Эксперт')
							.slice(0, 4) // Берём только первые 4 элемента
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
