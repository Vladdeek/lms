import { useEffect, useState } from 'react'
import {
	Accordion,
	Button,
	CourseCard,
	InDropdown,
	Link,
	Option,
	SearchDefault,
} from '../components/Components'
import { courses } from '../data/Courses'

const Courses = ({ level }) => {
	const [selectedChapter, setSelectedChapter] = useState(null)

	const chapters = [
		{ value: '1', label: 'Глава 1' },
		{ value: '2', label: 'Глава 2' },
		{ value: '3', label: 'Глава 3' },
	]

	const [translatedLevel, setTranslatedLevel] = useState('')
	useEffect(() => {
		const fetchData = async () => {
			const translatedLevel = level === 'begginer' ? 'Начинающий' : 'Эксперт'
			setTranslatedLevel(translatedLevel)
		}

		fetchData()
	}, [])

	return (
		<>
			<div className='p-20 max-lg:p-10 max-lg:mt-10'>
				<div className='flex flex-col gap-5'>
					<div className='inline-flex gap-3'>
						<Link text={'Dashboard'} />
						<p className='text-[var(--secondary-text)]'>-</p>
						<Link text={'Courses'} to={'../courses'} />
						<p className='text-[var(--secondary-text)]'>-</p>
						<Link text={translatedLevel} />
					</div>
					<p className='text-3xl font-bold mb-4 text-[var(--primary-text)]'>
						{translatedLevel}
					</p>
					<div className='inline-flex max-lg:flex-col max-lg:w-fit lg:items-center gap-6'>
						<Option
							options={chapters}
							selectedValue={selectedChapter}
							onSelect={setSelectedChapter}
						/>
						<SearchDefault />
					</div>
					<p className='my-3 text-md font-normal text-[var(--secondary-text)]'>
						Цель lorem ipsum - создать текстовый блок естественного вида
						(предложение, абзац, страницу и т.д.), который не отвлекает от
						макета. Практика, которая не лишена противоречий, - заполнение
						страниц бессмысленным текстом-наполнителем может быть очень
						полезной, когда основное внимание уделяется дизайну, а не
						содержанию.
					</p>
					<div className='grid max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-4 gap-3'>
						{courses
							.filter(course => course.tag === translatedLevel)
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
					</div>
				</div>
			</div>
		</>
	)
}
export default Courses
