import {
	ArrowUpWideNarrow,
	File,
	FolderPlus,
	Funnel,
	Grid2x2,
} from 'lucide-react'
import {
	AltCourseCard,
	Button,
	CourseCard,
	FileUpload,
	FilterOption,
	GrayButton,
	ImgBtn,
	Link,
	OptionAlt,
	RadioBtn,
	SearchFull,
} from '../components/Components'
import { useState } from 'react'
import { courses } from '../data/Courses'

const PrivateFiles = () => {
	const [selectedValue, setSelectedValue] = useState('option1')
	const radioOptions = [
		{ value: 'option1', icon: 'Grid2x2' },
		{ value: 'option2', icon: 'AlignJustify' },
		{ value: 'option3', icon: 'FolderClosed' },
	]

	return (
		<>
			<div className='p-20 max-lg:p-10 max-lg:mt-10'>
				<div className='flex flex-col gap-3'>
					<div className='inline-flex gap-3'>
						<Link size={'text-xs'} text={'Dashboard'} />
						<p className='text-[var(--secondary-text)]'>-</p>
						<Link size={'text-xs'} text={'Courses'} />
					</div>
					<p className='text-3xl font-bold mb-2 text-[var(--primary-text)]'>
						Личные файлы
					</p>
					<div className='flex justify-between border-b-1 border-[var(--border)] pb-2'>
						<div className='inline-flex gap-1'>
							<ImgBtn>
								<File size={16} />
							</ImgBtn>
							<ImgBtn>
								<FolderPlus size={16} />
							</ImgBtn>
						</div>
						<RadioBtn
							radios={radioOptions}
							selectedValue={selectedValue}
							onSelect={setSelectedValue}
						/>
					</div>
					<p className='text-[var(--primary-text)] text-xs'>Файлы</p>
					<FileUpload />
					<p className='text-[var(--primary-text)] text-xs text-end'>
						Максимальный размер файла: 64 МБ, общий лимит: 100 МБ
					</p>
					<div className='inline-flex gap-2'>
						<Button img={''} scale={'w-fit'}>
							{' '}
							<p>Сохранить</p>{' '}
						</Button>
						<GrayButton namebtn={'Отмена'} />
					</div>
				</div>
			</div>
		</>
	)
}
export default PrivateFiles
