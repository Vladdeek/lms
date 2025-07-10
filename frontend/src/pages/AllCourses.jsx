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
			<div className='p-20 max-lg:p-10 max-lg:mt-10'>
				<div className='flex flex-col gap-5'>
					<div className='inline-flex gap-3'>
						<Link size={'text-xs'} text={'Dashboard'} />
						<p className='text-[var(--secondary-text)]'>-</p>
						<Link size={'text-xs'} text={'Courses'} />
					</div>
					<p className='text-4xl font-bold mb-4 text-[var(--primary-text)]'>
						МелГУ СУО 1.2
					</p>
					<div className='inline-flex max-lg:flex-col max-lg:w-fit lg:items-center gap-6'>
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
