import { useState } from 'react'
import {
	Button,
	Link,
	Option,
	OptionAlt,
	SearchDefault,
} from '../components/Components'
import Calendar from '../components/Calendar'
import { CalendarPlus } from 'lucide-react'

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
		<div className='p-20 max-lg:p-10 max-lg:mt-10'>
			<div className='flex flex-col gap-5'>
				<div className='inline-flex gap-3'>
					<Link text={'Dashboard'} />
					<p className='text-[var(--secondary-text)]'>-</p>
					<Link text={'Calendar'} />
				</div>
				<p className='text-5xl font-bold mb-4 text-[var(--primary-text)]'>
					Календарь
				</p>
				<div className='grid grid-cols-1 gap-3 xl:flex justify-between'>
					<div className='inline-flex items-center max-xl:justify-between gap-6'>
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
					<div className='inline-flex'>
						<Button img={'other'}>
							<p>Новое событие</p>
							<CalendarPlus />
						</Button>
					</div>
				</div>

				<Calendar />
			</div>
		</div>
	)
}

export default CalendarPage
