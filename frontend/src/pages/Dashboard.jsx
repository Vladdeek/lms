import { ArrowUpWideNarrow, Funnel, Grid2x2 } from 'lucide-react'
import {
	AltCourseCard,
	CourseCard,
	FilterOption,
	OptionAlt,
	SearchFull,
} from '../components/Components'
import { useState } from 'react'
import { courses } from '../data/Courses'

const Dashboard = () => {
	const chapters1 = [
		{ value: '1', label: 'Вариант1' },
		{ value: '2', label: 'Вариант2' },
		{ value: '3', label: 'Вариант3' },
	]
	const [selectedChapter1, setSelectedChapter1] = useState(
		chapters1[0]?.value || ''
	)
	const chapters2 = [
		{ value: '1', label: 'Вариант1' },
		{ value: '2', label: 'Вариант2' },
		{ value: '3', label: 'Вариант3' },
	]
	const [selectedChapter2, setSelectedChapter2] = useState(
		chapters1[0]?.value || ''
	)
	const chapters3 = [
		{ value: '1', label: 'Вариант1' },
		{ value: '2', label: 'Вариант2' },
		{ value: '3', label: 'Вариант3' },
	]
	const [selectedChapter3, setSelectedChapter3] = useState(
		chapters1[0]?.value || ''
	)
	return (
		<div className='px-20 py-20'>
			<div className='w-full flex justify-between mb-3'>
				<div className='inline-flex gap-1'>
					<FilterOption
						options={chapters1}
						selectedValue={selectedChapter1}
						onSelect={setSelectedChapter1}
					>
						<Funnel size={18} />
					</FilterOption>
				</div>
				<div className='inline-flex gap-1'>
					<FilterOption
						options={chapters2}
						selectedValue={selectedChapter2}
						onSelect={setSelectedChapter2}
					>
						<ArrowUpWideNarrow size={18} />
					</FilterOption>
					<FilterOption
						options={chapters3}
						selectedValue={selectedChapter3}
						onSelect={setSelectedChapter3}
					>
						<Grid2x2 size={18} />
					</FilterOption>
				</div>
			</div>

			<SearchFull />

			<div className='grid grid-cols-4 gap-5 mt-5'>
				{courses.map((course, index) => (
					<AltCourseCard
						key={index}
						img_path={course.img_path}
						title={course.title}
						tag={course.tag}
						procent={course.procent}
						isProgressbar={course.isProgressbar}
					/>
				))}
			</div>
		</div>
	)
}
export default Dashboard
