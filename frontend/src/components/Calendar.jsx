import {
	format,
	startOfMonth,
	endOfMonth,
	getDay,
	eachDayOfInterval,
	isToday,
} from 'date-fns'
import { ru } from 'date-fns/locale'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Calendar = () => {
	const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
	const [currentDate, setCurrentDate] = useState(new Date())
	const [activeIndex, setActiveIndex] = useState(null)

	const start = startOfMonth(currentDate)
	const end = endOfMonth(currentDate)
	const allDays = eachDayOfInterval({ start, end })

	// getDay() возвращает 0 (вс)–6 (сб), нужно сместить: Пн = 0 => Вс = 6
	const startOffset = (getDay(start) + 6) % 7
	const totalCells = startOffset + allDays.length
	const endOffset = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)

	const prevMonth = () => {
		setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
		setActiveIndex(null)
	}

	const nextMonth = () => {
		setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
		setActiveIndex(null)
	}

	return (
		<div className='p-4'>
			<div className='flex items-center justify-between mb-10'>
				<ChevronLeft
					onClick={prevMonth}
					className='text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg transition-all p-3'
					size={56}
				/>

				<p className='text-2xl font-bold text-stone-800'>
					{format(currentDate, 'LLLL yyyy', { locale: ru })}
				</p>

				<ChevronRight
					onClick={nextMonth}
					className='text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg transition-all p-3'
					size={56}
				/>
			</div>

			<div className='grid grid-cols-7 gap-1 text-[#820000] mb-4 font-semibold'>
				{weekdays.map((day, index) => (
					<div
						className='h-8 flex justify-end items-center text-xl p-4'
						key={index}
					>
						<p>{day}</p>
					</div>
				))}
			</div>

			<div className='grid grid-cols-7'>
				{Array.from({ length: startOffset }).map((_, index) => (
					<div
						key={`empty-start-${index}`}
						className=' border-1 border-stone-50'
						style={{
							backgroundImage:
								'repeating-linear-gradient(-45deg, #e5e5e550, #e5e5e550 1px, transparent 5px, transparent 5px)',
						}}
					/>
				))}

				{allDays.map((date, index) => {
					const today = isToday(date)
					return (
						<div
							key={index}
							onClick={() => setActiveIndex(index)}
							className={`
				  relative h-30 flex justify-end items-start select-none p-2
				  border-1 border-dashed border-stone-100 transition-colors text-xl
				 
				`}
						>
							{today && (
								<div className=' w-10 h-10 bg-[#820000] rounded-lg flex items-center justify-center text-white'>
									{format(date, 'd')}
								</div>
							)}
							<span
								className={`${
									!today && 'flex items-center justify-center w-10 h-10'
								} `}
							>
								{!today && format(date, 'd')}
							</span>
						</div>
					)
				})}

				{Array.from({ length: endOffset }).map((_, index) => (
					<div
						key={`empty-end-${index}`}
						className=' border-1 border-stone-50'
						style={{
							backgroundImage:
								'repeating-linear-gradient(-45deg, #e5e5e550, #e5e5e550 1px, transparent 5px, transparent 5px)',
						}}
					/>
				))}
			</div>
		</div>
	)
}

export default Calendar
