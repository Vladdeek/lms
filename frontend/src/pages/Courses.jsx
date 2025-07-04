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
			<div className='py-10 px-25'>
				<div className='flex flex-col gap-5'>
					<div className='inline-flex gap-3'>
						<Link text={'Dashboard'} />
						<p>-</p>
						<Link text={'Courses'} to={'../courses'} />
						<p>-</p>
						<Link text={translatedLevel} />
					</div>
					<p className='text-5xl font-bold mb-4'>{translatedLevel}</p>
					<div className='inline-flex items-center gap-6'>
						<Option
							options={chapters}
							selectedValue={selectedChapter}
							onSelect={setSelectedChapter}
						/>
						<SearchDefault />
					</div>
					<p className='my-3 text-2xl font-normal text-stone-700'>
						Цель lorem ipsum - создать текстовый блок естественного вида
						(предложение, абзац, страницу и т.д.), который не отвлекает от
						макета. Практика, которая не лишена противоречий, - заполнение
						страниц бессмысленным текстом-наполнителем может быть очень
						полезной, когда основное внимание уделяется дизайну, а не
						содержанию.
					</p>
					<div className='grid grid-cols-4 gap-3'>
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
