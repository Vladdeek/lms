import { useState } from 'react'
import {
	Link,
	Option,
	OptionAlt,
	SearchDefault,
} from '../components/Components'
import Calendar from '../components/Calendar'

const CalendarPage = () => {
	const chapters1 = [
		{ value: '1', label: 'Месяц' },
		{ value: '2', label: 'День' },
		{ value: '3', label: 'Ближайшие события' },
	]
	const [selectedChapter1, setSelectedChapter1] = useState(
		chapters1[0]?.value || ''
	)

	const chapters2 = [
		{ value: '1', label: 'Месяц' },
		{ value: '2', label: 'День' },
		{ value: '3', label: 'Ближайшие события' },
	]
	const [selectedChapter2, setSelectedChapter2] = useState(null)
	return (
		<div className='py-10 px-25'>
			<div className='flex flex-col gap-5'>
				<div className='inline-flex gap-3'>
					<Link text={'Dashboard'} />
					<p>-</p>
					<Link text={'Calendar'} />
				</div>
				<p className='text-5xl font-bold mb-4'>Календарь</p>
				<div className='inline-flex items-center gap-6'>
					<OptionAlt
						options={chapters1}
						selectedValue={selectedChapter1}
						onSelect={setSelectedChapter1}
					/>
					<Option
						options={chapters2}
						selectedValue={selectedChapter2}
						onSelect={setSelectedChapter2}
					/>
				</div>
				<Calendar />
			</div>
		</div>
	)
}

export default CalendarPage
