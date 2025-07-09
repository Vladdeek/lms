import {
	GraduationCap,
	UserRound,
	KeyRound,
	Eye,
	EyeOff,
	PlaySquare,
	ChevronDown,
	Flag,
	SearchIcon,
	Cross,
	Check,
	X,
	Settings,
	ArrowRight,
	Moon,
	Sun,
	ChevronsUpDown,
	Book,
	BookOpen,
	ChevronLeft,
	ChevronRight,
	TrendingUp,
	ArrowLeft,
	File,
	Folder,
	FolderOpen,
	ChevronsDown,
	Funnel,
	Grid2x2,
	AlignJustify,
	FolderClosed,
	UploadCloud,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Input = ({ children, placeholder }) => {
	return (
		<div className='flex h-20 w-4/5 gap-3 justify-between items-center border-1 border-[#00000010] shadow-md shadow-[#00000010] rounded-xl p-3 focus-within:outline-4  focus-within:border-[#820000] focus-within:border-2 outline-[#82000099]'>
			{children}
			<input
				type='text'
				placeholder={placeholder}
				className='outline-0 w-full text-2xl'
			/>
		</div>
	)
}
const InputPassword = () => {
	const [viewpass, setViewpass] = useState(false)
	return (
		<div className='flex h-20 w-4/5 gap-3 justify-between items-center border-1 border-[#00000010] shadow-md shadow-[#00000010] rounded-xl p-3 focus-within:outline-4  focus-within:border-[#820000] focus-within:border-2 outline-[#82000099]'>
			<KeyRound size={28} className='w-20 opacity-66' />
			<input
				type={`${!viewpass ? 'password' : 'text'}`}
				placeholder='Пароль'
				className='outline-0 w-full text-2xl'
			/>
			<button
				className={`rounded-full ${
					!viewpass ? 'bg-[#00000010]' : 'bg-[#82000010]'
				} transition-all p-2`}
				onClick={() => setViewpass(!viewpass)}
			>
				{!viewpass ? (
					<Eye size={28} className='opacity-66' />
				) : (
					<EyeOff size={28} className='opacity-66' color='#820000' />
				)}
			</button>
		</div>
	)
}
const Submit = () => {
	return (
		<input
			type='submit'
			value={'Войти'}
			className='bg-[#820000] hover:bg-[#660000] transition-all w-4/5 h-22 text-white text-3xl font-medium rounded-xl'
		/>
	)
}

const Link = ({ text, to, size }) => {
	return (
		<NavLink to={to}>
			<button
				className={`${
					!size ? 'text-sm' : size
				} font-medium text-[var(--secondary-text)] relative group mb-3 cursor-pointer whitespace-nowrap`}
			>
				<span className='relative inline-block hover:text-[var(--color1)]'>
					{text}
					<span
						className='absolute left-0 bottom-[-0.25rem] h-0.5 bg-[var(--color1)] rounded 
					 transition-all duration-400 ease-in-out
					 w-0 group-hover:w-full'
					></span>
					<span
						className='absolute left-0 bottom-[-0.25rem] h-0.5 bg-[var(--color1)] rounded 
					 transition-all duration-400 ease-in-out
					 w-full scale-x-100 origin-right
					 opacity-0 group-hover:opacity-100 group-hover:scale-x-0'
					></span>
				</span>
			</button>
		</NavLink>
	)
}

const Dropdown = ({ children, ChapterName, isOpen, onToggle }) => {
	return (
		<div className='flex flex-col relative '>
			<div
				className={`${
					isOpen ? 'bg-[var(--secondary)]' : 'hover:bg-[var(--secondary)]'
				} flex text-[var(--primary-text)] hover:text-[var(--primary)] justify-center items-center px-3 h-12 rounded-sm gap-1 transition-all cursor-pointer`}
				onClick={onToggle}
			>
				<p
					className={`${
						isOpen ? 'text-[var(--primary)]' : ''
					} font-medium text-sm`}
				>
					{ChapterName}
				</p>
				<ChevronDown
					className={`${
						isOpen
							? 'text-[var(--primary)] -rotate-180'
							: 'hover:text-[var(--primary)]'
					} transition-all`}
				/>
			</div>
			{isOpen && (
				<div className='bg-[var(--bg-sidebar)] flex flex-col absolute top-full left-0 z-50 shadow-md p-1 rounded-md'>
					{children}
				</div>
			)}
		</div>
	)
}

const Accordion = ({ children, ChapterName, to }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='flex flex-col border-1 border-[var(--gray)]  rounded-xl overflow-hidden'>
			<div
				className='flex text-[var(--primary-text)] hover:text-[var(--primary)] p-2 transition-all cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className='flex w-full justify-between items-center group'>
					<div className='flex gap-4 items-center'>
						<ChevronRight
							className={`${
								isOpen
									? 'text-[var(--primary)] -rotate-90' // Поворот на 90° при открытии
									: 'group-hover:rotate-90' // Плавный поворот при наведении
							} transition-transform duration-200`}
						/>
						<p
							className={`${
								isOpen && 'text-[var(--primary)]'
							} font-normal text-xl`}
						>
							{ChapterName}
						</p>
					</div>
					<div className='flex gap-3'>
						<div className='flex text-bg-[var(--secondary-text)] items-center bg-[var(--gray)] rounded-md p-3 px-4 gap-2'>
							<BookOpen size={22} />
							<p className='font-medium text-md'>4</p>
						</div>
						<NavLink
							className='flex items-center bg-[var(--secondary)] text-[var(--primary)] hover:scale-102 rounded-md p-2 px-4 font-medium transition-all'
							to={to}
						>
							<p>Показать все курсы</p>
						</NavLink>
					</div>
				</div>
			</div>

			{/* Контент с анимацией */}
			<div
				className={`${
					isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
				} transition-all duration-300 overflow-hidden`}
			>
				<div className='grid grid-cols-4 p-4 border-t-1 gap-5 border-[var(--gray)]'>
					{children}
				</div>
			</div>
		</div>
	)
}
const CoursesBtn = ({ ChapterName, to }) => {
	return (
		<NavLink to={to}>
			<div className='flex text-[var(--primary-text)] hover:text-[var(--primary)] hover:bg-[var(--secondary)] hover:border-[var(--secondary)] border-1 border-[var(--gray)] transition-all cursor-pointer rounded-xl h-16 p-4 overflow-hidden'>
				<div className='flex w-full justify-start gap-4 items-center'>
					<FolderOpen />
					<p className={`font-normal text-xl`}>{ChapterName}</p>
				</div>
			</div>
		</NavLink>
	)
}

const Option = ({ options, selectedValue, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false)

	// Находим выбранный элемент для отображения
	const selectedOption = options.find(opt => opt.value === selectedValue)

	return (
		<div className='relative inline-block w-75'>
			<div
				className={`flex items-center gap-3 justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
					isOpen
						? 'border-[var(--white)] ring-3 ring-[var(--color1)]'
						: 'border-[var(--gray)] hover:border-[var(--secondary-text)]'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span
					className={`text-lg ${
						selectedOption
							? 'text-[var(--primary-text)]'
							: 'text-[var(--secondary-text)]'
					}`}
				>
					{selectedOption?.label || 'Выберите вариант'}
				</span>
				<ChevronsUpDown
					className={`w-5 h-5 transition-transform ${
						isOpen ? 'text-[var(--primary)]' : 'text-gray-400'
					}`}
				/>
			</div>
			{isOpen && (
				<div className='absolute z-10 w-full mt-1 bg-[var(--gray)] text-[var(--primary-text)] border border-[var(--gray)] rounded-lg shadow-lg overflow-hidden'>
					{options.map(option => (
						<div
							key={option.value}
							className={`p-3 cursor-pointer transition-colors ${
								option.value === selectedValue
									? 'bg-[var(--secondary)] text-[var(--primary)]'
									: 'hover:bg-[var(--secondary)] hover:text-[var(--primary)]'
							}`}
							onClick={() => {
								onSelect(option.value)
								setIsOpen(false)
							}}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

const OptionAlt = ({ options, selectedValue, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false)

	// Находим выбранный элемент для отображения
	const selectedOption = options.find(opt => opt.value === selectedValue)

	return (
		<div className='relative inline-block w-75'>
			<div
				className={`flex items-center gap-3 justify-between p-4 text-[var(--primary-text)] font-medium bg-[var(--gray)] rounded-lg cursor-pointer transition-colors ${
					isOpen ? 'bg-[var(--bg)]' : ' hover:bg-[var(--bg)] '
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className={`text-2xl `}>
					{selectedOption?.label || 'Выберите вариант'}
				</span>
				<ChevronDown
					className={`w-5 h-5 transition-transform  ${
						isOpen && 'text-[var(--primary-text)]'
					}`}
				/>
			</div>
			{isOpen && (
				<div className='absolute z-10 w-full text-[var(--primary-text)] mt-1 bg-[var(--gray)] border border-[var(--gray)] rounded-lg shadow-lg overflow-hidden'>
					{options.map(option => (
						<div
							key={option.value}
							className={`p-3 cursor-pointer transition-colors ${
								option.value === selectedValue
									? 'bg-[var(--secondary)] text-[var(--primary)]'
									: 'hover:bg-[var(--secondary)] hover:text-[var(--primary)]'
							}`}
							onClick={() => {
								onSelect(option.value)
								setIsOpen(false)
							}}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

const FilterOption = ({ options, selectedValue, onSelect, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const selectedOption = options.find(opt => opt.value === selectedValue)

	return (
		<div className='relative inline-block'>
			<div
				className={`inline-flex items-center gap-3 py-2 px-3 text-[var(--primary-text)] font-normal bg-[var(--gray)] border-1 border-[var(--gray)] rounded-lg cursor-pointer transition-colors ${
					isOpen ? 'bg-[var(--bg)]' : ' hover:bg-[var(--bg)] '
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{children}
				<span className={`text-md `}>
					{selectedOption?.label || 'Выберите вариант'}
				</span>
				<ChevronDown
					className={`w-5 h-5 transition-transform  ${
						isOpen && 'text-[var(--primary-text)]'
					}`}
				/>
			</div>
			{isOpen && (
				<div className='absolute z-10 w-full text-[var(--primary-text)] mt-1 bg-[var(--gray)] border border-[var(--gray)] rounded-lg shadow-lg overflow-hidden'>
					{options.map(option => (
						<div
							key={option.value}
							className={`p-3 cursor-pointer transition-colors ${
								option.value === selectedValue
									? 'bg-[var(--secondary)] text-[var(--primary)]'
									: 'hover:bg-[var(--secondary)] hover:text-[var(--primary)]'
							}`}
							onClick={() => {
								onSelect(option.value)
								setIsOpen(false)
							}}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

const InDropdown = ({ content, to }) => {
	return (
		<NavLink to={to}>
			<p className='hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-[var(--primary-text)] rounded-lg text-xs font-medium select-none transition-all px-4 py-2'>
				{content}
			</p>
		</NavLink>
	)
}
const HeaderBtn = ({ ChapterName }) => {
	return (
		<div className='flex flex-col relative'>
			<div
				className={`hover:bg-[var(--secondary)] flex text-[var(--primary-text)] hover:text-[var(--primary)] justify-center items-center px-3 h-12 rounded-sm gap-1 transition-all cursor-pointer`}
			>
				<p className={` font-medium text-sm`}>{ChapterName}</p>
			</div>
		</div>
	)
}

const ChangeLang = ({ children, ChapterName }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='flex flex-col relative'>
			<div
				className={`${
					isOpen
						? 'bg-[var(--secondary)] '
						: 'bg-[var(--bg-sidebar)] hover:bg-[var(--secondary)] '
				} flex text-[var(--primary)] hover:text-[var(--primary)] h-12 justify-center items-center px-3 rounded-md gap-1 transition-all cursor-pointer`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<Flag
					className={`${
						isOpen ? 'text-[var(--primary)]' : 'hover:text-[var(--primary)]'
					} p-1`}
				/>
				<p
					className={`${isOpen && 'text-[var(--primary)]'} font-medium text-sm`}
				>
					{ChapterName}
				</p>
			</div>
			{isOpen && (
				<div
					className={`bg-[var(--bg-sidebar)] flex flex-col absolute top-full left-0 z-50 shadow-md p-1 rounded-xl`}
				>
					{children}
				</div>
			)}
		</div>
	)
}

const Search = ({ searchIsOpen, onClick }) => {
	return (
		<>
			<div
				className={`${
					searchIsOpen &&
					'flex items-center border-1 border-[var(--gray)] text-[var(--secondary-text)] bg-[var(--bg-sidebar)] focus-within:outline-3 transition-all outline-[#82000099] rounded-md h-12 pr-2'
				}`}
			>
				<SearchIcon
					className={`${
						!searchIsOpen &&
						'hover:bg-[var(--secondary)] hover:text-[var(--primary)] cursor-pointer text-[var(--secondary-text)]'
					} h-12 w-12 inline-flex justify-center items-center rounded-md p-3 transition-all `}
					size={24}
					onClick={!searchIsOpen && onClick}
				/>
				{searchIsOpen && (
					<>
						<input
							type='text'
							placeholder='Поиск'
							className='outline-0 text-md h-full w-[175px]'
						/>
						<X
							className='hover:bg-[var(--secondary)] hover:text-[var(--primary)] rounded-full  p-1 transition-all'
							size={32}
							onClick={searchIsOpen && onClick}
						/>
						<ArrowRight
							className='hover:bg-[var(--secondary-blue)] hover:text-[var(--primary-blue)] rounded-full p-1 transition-all'
							size={32}
						/>
					</>
				)}
			</div>
		</>
	)
}

const SearchDefault = ({}) => {
	return (
		<div
			className={` border-1 border-[var(--gray)] bg-[var(--bg-sidebar)] text-[var(--secondary-text)] focus-within:outline-3 outline-[#82000099] rounded-lg pr-2 inline-flex items-center transition-all`}
		>
			<SearchIcon
				className={`h-15 w-15 justify-center items-center rounded-lg p-4`}
				size={28}
			/>

			<input
				type='text'
				placeholder='Поиск'
				className='outline-0 text-xl bg-transparent'
			/>

			<ArrowRight
				className='hover:bg-[var(--secondary)]  hover:text-[var(--primary)] rounded-full p-3 transition-all'
				size={48}
			/>
		</div>
	)
}
const SearchFull = ({}) => {
	return (
		<div
			className={` border-1 border-[var(--gray)] bg-[var(--bg-sidebar)] text-[var(--secondary-text)] focus-within:outline-3 outline-[#82000099] rounded-lg pr-2 flex items-center transition-all`}
		>
			<SearchIcon
				className={`h-12 w-12 justify-center items-center rounded-lg p-3`}
				size={28}
			/>

			<input
				type='text'
				placeholder='Поиск'
				className='outline-0 text-xl bg-transparent w-full'
			/>
		</div>
	)
}

const ToggleTheme = () => {
	const [ThemeStatus, setThemeStatus] = useState(false)

	useEffect(() => {
		// Устанавливаем начальную тему при загрузке
		const currentTheme =
			document.documentElement.getAttribute('data-theme') || 'light'
		setThemeStatus(currentTheme === 'dark')
	}, [])

	const toggleTheme = () => {
		const html = document.documentElement
		const current = html.getAttribute('data-theme')
		const newTheme = current === 'light' ? 'dark' : 'light'

		html.setAttribute('data-theme', newTheme)
		setThemeStatus(newTheme === 'dark')
	}

	return (
		<button
			onClick={toggleTheme}
			className={`${
				!ThemeStatus
					? 'bg-orange-100 text-stone-700 hover:bg-stone-950 hover:text-white'
					: 'bg-stone-800 text-white hover:bg-orange-200 hover:text-black'
			} h-12 w-12 rounded-lg flex justify-center items-center transition-all relative group`}
		>
			{!ThemeStatus ? (
				<Moon size={42} className='p-2' />
			) : (
				<Sun size={42} className='p-2' />
			)}
		</button>
	)
}

const Profile = ({ children, img_path }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='flex flex-col relative'>
			<div
				className={` flex text-[var(--primary-text)] justify-center items-center rounded-xl gap-1 transition-all cursor-pointer`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<img
					className='rounded-lg border-1 border-[var(--bg)] select-none h-12'
					src={img_path}
					alt=''
				/>
				<ChevronDown className={`${isOpen && ' -rotate-180'} transition-all`} />
			</div>
			{isOpen && (
				<div
					className={`bg-[var(--gray)] flex flex-col absolute top-20 -left-55 z-50 shadow-md rounded-xl`}
				>
					{children}
				</div>
			)}
		</div>
	)
}

const Button = ({ img, namebtn, children, scale }) => {
	return (
		<>
			<button
				className={`bg-[var(--color1)] hover:brightness-80 active:scale-97 transition-all inline-flex gap-4 text-white font-medium p-4 px-10 text-lg justify-between items-center rounded-md ${
					!scale ? 'w-full justify-center' : scale
				}`}
			>
				{img === 'right' ? (
					<>
						<p>{namebtn}</p>
						<ArrowRight />
					</>
				) : img === 'left' ? (
					<>
						<ArrowLeft />
						<p>{namebtn}</p>
					</>
				) : (
					children
				)}
			</button>
		</>
	)
}
const GrayButton = ({ namebtn }) => {
	return (
		<>
			<button
				className={`bg-[var(--gray)] hover:brightness-80 active:scale-97 transition-all inline-flex gap-4 text-[var(--primary-text)] font-medium p-4 px-10 text-lg justify-between items-center rounded-md `}
			>
				{namebtn}
			</button>
		</>
	)
}

const CourseCard = ({
	title,
	description,
	tag,
	procent,
	img_path,
	isProgressbar,
}) => {
	return (
		<div className='border-1 border-[var(--gray)] h-134 rounded-lg flex flex-col overflow-hidden w-full'>
			<img className='w-full h-4/10 object-cover' src={img_path} alt='' />
			<div className='flex flex-col h-5/10 gap-3 p-5'>
				<a
					href='#'
					className='font-bold text-md text-[var(--primary-text)] hover:text-[var(--color1)] transition-all'
				>
					{title}
				</a>
				<p className='text-sm font-light text-[var(--secondary-text)] mb-4'>
					{description}
				</p>
				<p className='bg-[var(--bg-sidebar)] w-fit text-[var(--secondary-text)] rounded-lg px-3 py-1 font-medium text-lg'>
					{tag}
				</p>
			</div>
			{!isProgressbar ? (
				<>
					<div className='flex h-1/10 items-center gap-4 border-t-1 border-[var(--gray)] p-5 pb-7'>
						<TrendingUp className='text-[var(--primary-text)]' size={32} />
						<div className='flex flex-col w-full text-[var(--primary-text)]'>
							<p>
								<span className='font-semibold text-xs '>{procent}%</span>{' '}
								Выполнено
							</p>
							<div className='w-full h-2 bg-[var(--gray)] rounded-full overflow-hidden'>
								<div
									className='h-2 rounded-full bg-gradient-to-r from-[var(--color1)] to-[var(--color2)]'
									style={{ width: `${procent}%` }}
								></div>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className='pb-3 px-3 h-1/10 flex w-full justify-end'>
					<Button namebtn={'Получить'} img={'right'} />
				</div>
			)}
		</div>
	)
}
const AltCourseCard = ({
	title,
	description,
	tag,
	procent,
	img_path,
	isProgressbar,
}) => {
	return (
		<div className='border-1 border-[var(--gray)] h-125 rounded-lg flex flex-col overflow-hidden w-full'>
			<img className='w-full h-4/5 object-cover' src={img_path} alt='' />
			<div className='flex flex-col h-5/10 gap-3 p-5'>
				<a
					href='#'
					className='font-bold text-md text-[var(--primary-text)] hover:text-[var(--color1)] transition-all'
				>
					{title}
				</a>
				<p className='bg-[var(--bg-sidebar)] w-fit text-[var(--secondary-text)] rounded-lg px-3 py-1 font-medium text-lg'>
					{tag}
				</p>
			</div>
			{!isProgressbar ? (
				<>
					<div className='flex h-1/5 items-center gap-4 border-t-1 border-[var(--gray)] p-5 pb-7'>
						<TrendingUp className='text-[var(--primary-text)]' size={32} />
						<div className='flex flex-col w-full text-[var(--primary-text)]'>
							<p>
								<span className='font-semibold text-xs '>{procent}%</span>{' '}
								Выполнено
							</p>
							<div className='w-full h-2 bg-[var(--gray)] rounded-full overflow-hidden'>
								<div
									className='h-2 rounded-full bg-gradient-to-r from-[var(--color1)] to-[var(--color2)]'
									style={{ width: `${procent}%` }}
								></div>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className='pb-3 px-3 h-1/5 flex w-full justify-end'>
					<Button namebtn={'Получить'} img={'right'} />
				</div>
			)}
		</div>
	)
}

const ImgBtn = ({ children }) => {
	return (
		<>
			<button className='bg-[var(--gray)] rounded-md p-3 hover:bg-[var(--secondary)] text-[var(--primary-text)] hover:text-[var(--primary)] transition-all'>
				{children}
			</button>
		</>
	)
}

const iconComponents = {
	Grid2x2,
	AlignJustify,
	FolderClosed,
}

const RadioBtn = ({ radios, selectedValue, onSelect }) => {
	return (
		<div className='rounded-md bg-[var(--gray)] inline-flex overflow-hidden'>
			{radios.map(radio => {
				const IconComponent = iconComponents[radio.icon]
				return (
					<div
						key={radio.value}
						className={`p-3 cursor-pointer  transition-colors flex items-center gap-2 ${
							radio.value === selectedValue
								? 'bg-[var(--secondary)] text-[var(--primary)]'
								: 'hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-[var(--primary-text)]'
						}`}
						onClick={() => onSelect(radio.value)}
					>
						{radio.icon && <IconComponent className='w-4 h-4' />}
					</div>
				)
			})}
		</div>
	)
}

const FileUpload = () => {
	return (
		<form className='w-full mt-3'>
			<label
				htmlFor='file'
				className='w-full cursor-pointer bg-[var(--gray)] p-3 ring-10 ring-[var(--gray)] rounded-xl border-2 border-dashed border-[var(--primary-text)] flex flex-col items-center justify-center'
			>
				<input id='file' type='file' className='hidden' />
				<div className='flex flex-col items-center justify-center gap-2 text-center'>
					<UploadCloud className='h-12 w-12 text-[var(--primary-text)] mb-4' />
					<p className='text-[var(--primary-text)] text-lg'>
						Перетащите файлы сюда
					</p>
					<p className='text-[var(--primary-text)]'>или</p>
					<p className='text-[var(--primary-text)] font-medium hover:text-[var(--color1)] transition-all'>
						Выберите файлы
					</p>
				</div>
			</label>
		</form>
	)
}

export {
	FileUpload,
	Profile,
	Input,
	InputPassword,
	Submit,
	Link,
	Dropdown,
	InDropdown,
	HeaderBtn,
	ChangeLang,
	Search,
	SearchDefault,
	ToggleTheme,
	Option,
	Accordion,
	CourseCard,
	Button,
	CoursesBtn,
	OptionAlt,
	SearchFull,
	FilterOption,
	AltCourseCard,
	ImgBtn,
	RadioBtn,
	GrayButton,
}
