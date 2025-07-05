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
	X,
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
} from 'lucide-react'
import { useState } from 'react'
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
				} font-medium text-stone-600 relative group mb-3 cursor-pointer whitespace-nowrap`}
			>
				<span className='relative inline-block hover:text-[#820000]'>
					{text}
					<span
						className='absolute left-0 bottom-[-0.25rem] h-0.5 bg-[#820000] rounded 
					 transition-all duration-400 ease-in-out
					 w-0 group-hover:w-full'
					></span>
					<span
						className='absolute left-0 bottom-[-0.25rem] h-0.5 bg-[#820000] rounded 
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
					isOpen ? 'bg-[#82000010] ' : 'hover:bg-[#82000010] '
				} flex text-black hover:text-[#820000] justify-center items-center px-3 h-12 rounded-sm gap-1 transition-all cursor-pointer`}
				onClick={onToggle}
			>
				<p className={`${isOpen && 'text-[#820000]'} font-medium text-sm`}>
					{ChapterName}
				</p>
				<ChevronDown
					className={`${
						isOpen ? 'text-[#820000] -rotate-180' : 'hover:text-[#820000]'
					} transition-all`}
				/>
			</div>
			{isOpen && (
				<div
					className={`bg-white flex flex-col absolute top-full left-0 z-50 shadow-md p-1 rounded-md`}
				>
					{children}
				</div>
			)}
		</div>
	)
}

const Accordion = ({ children, ChapterName, to }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='flex flex-col border-1 border-stone-200 rounded-xl overflow-hidden'>
			<div
				className='flex text-black hover:text-[#820000] p-4 transition-all cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className='flex w-full justify-between items-center group'>
					<div className='flex gap-4 items-center'>
						<ChevronRight
							className={`${
								isOpen
									? 'text-[#820000] -rotate-90' // Поворот на 90° при открытии
									: 'group-hover:rotate-90' // Плавный поворот при наведении
							} transition-transform duration-200`}
						/>
						<p className={`${isOpen && 'text-[#820000]'} font-normal text-xl`}>
							{ChapterName}
						</p>
					</div>
					<div className='flex gap-3'>
						<div className='flex text-stone-500 items-center bg-stone-100 rounded-md p-3 px-4 gap-2'>
							<BookOpen size={22} />
							<p className='font-medium text-md'>4</p>
						</div>
						<NavLink
							className='flex items-center bg-[#82000010] text-[#820000] hover:bg-[#82000025] rounded-md p-2 px-4 font-medium transition-all'
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
				<div className='grid grid-cols-4 p-4 border-t-1 gap-3 border-stone-200'>
					{children}
				</div>
			</div>
		</div>
	)
}
const CoursesBtn = ({ ChapterName, to }) => {
	return (
		<NavLink to={to}>
			<div className='flex text-black hover:text-[#820000] hover:bg-[#82000010] hover:border-[#82000025] border-1 border-stone-200 transition-all cursor-pointer rounded-xl h-20 p-4 overflow-hidden'>
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
						? 'border-[#820000] ring-2 ring-[#82000020]'
						: 'border-gray-200 hover:border-gray-300'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span
					className={`text-lg ${
						selectedOption ? 'text-gray-900' : 'text-gray-500'
					}`}
				>
					{selectedOption?.label || 'Выберите вариант'}
				</span>
				<ChevronsUpDown
					className={`w-5 h-5 transition-transform ${
						isOpen ? 'text-[#820000]' : 'text-gray-400'
					}`}
				/>
			</div>
			{isOpen && (
				<div className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden'>
					{options.map(option => (
						<div
							key={option.value}
							className={`p-3 cursor-pointer transition-colors ${
								option.value === selectedValue
									? 'bg-[#82000010] text-[#820000]'
									: 'hover:bg-[#82000010] hover:text-[#820000]'
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
				className={`flex items-center gap-3 justify-between p-4 text-stone-900 font-medium bg-stone-100 rounded-lg cursor-pointer transition-colors ${
					isOpen ? 'bg-stone-200' : ' hover:bg-stone-200 '
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className={`text-2xl `}>
					{selectedOption?.label || 'Выберите вариант'}
				</span>
				<ChevronDown
					className={`w-5 h-5 transition-transform  ${
						isOpen && 'text-stone-800'
					}`}
				/>
			</div>
			{isOpen && (
				<div className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden'>
					{options.map(option => (
						<div
							key={option.value}
							className={`p-3 cursor-pointer transition-colors ${
								option.value === selectedValue
									? 'bg-stone-100 text-stone-700'
									: 'hover:bg-stone-100 hover:text-stone-700'
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
			<p className='hover:bg-[#82000010] hover:text-[#820000] rounded-lg text-xs font-medium select-none transition-all px-4 py-2'>
				{content}
			</p>
		</NavLink>
	)
}
const HeaderBtn = ({ ChapterName }) => {
	return (
		<div className='flex flex-col relative'>
			<div
				className={`hover:bg-[#82000010] flex text-black hover:text-[#820000] justify-center items-center px-3 h-12 rounded-md gap-1 transition-all cursor-pointer`}
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
					isOpen ? 'bg-[#82000010] ' : 'bg-stone-100 hover:bg-[#82000010] '
				} flex text-black hover:text-[#820000] h-12 justify-center items-center px-3 rounded-md gap-1 transition-all cursor-pointer`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<Flag
					className={`${
						isOpen ? 'text-[#820000]' : 'hover:text-[#820000]'
					} p-1`}
				/>
				<p className={`${isOpen && 'text-[#820000]'} font-medium text-sm`}>
					{ChapterName}
				</p>
			</div>
			{isOpen && (
				<div
					className={`bg-white flex flex-col absolute top-full left-0 z-50 shadow-md p-1 rounded-xl`}
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
					'flex items-center shadow-md shadow-stone-200 border-1 border-stone-100 focus-within:outline-3 outline-[#82000099] rounded-md h-12 pr-2'
				}`}
			>
				<SearchIcon
					className={`${
						!searchIsOpen &&
						'hover:bg-[#82000010] hover:text-[#820000] cursor-pointer'
					} h-12 w-12 inline-flex justify-center items-center rounded-md p-3`}
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
							className='hover:bg-[#82000010] hover:text-[#820000] rounded-full  p-1 transition-all'
							size={32}
							onClick={searchIsOpen && onClick}
						/>
						<ArrowRight
							className='hover:bg-[#00008210] hover:text-[#000082] rounded-full p-1 transition-all'
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
			className={`shadow-md shadow-stone-200 border-1 border-stone-100 focus-within:outline-3 outline-[#82000099] rounded-lg pr-2 inline-flex items-center`}
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
				className='hover:bg-[#00008210] hover:text-[#000082] rounded-full p-3'
				size={48}
			/>
		</div>
	)
}

const ToggleTheme = () => {
	const [ThemeStatus, setThemeStatus] = useState(false)
	return (
		<>
			<button
				className={`${
					!ThemeStatus
						? 'bg-orange-100 text-stone-700 hover:bg-stone-950 hover:text-white'
						: ''
				}  h-12 w-12 rounded-lg flex justify-center items-center transition-all  relative group`}
			>
				{!ThemeStatus ? (
					<>
						<Moon size={42} className='p-2' />
					</>
				) : (
					<>
						<Sun size={42} className='p-2' />
					</>
				)}
			</button>
		</>
	)
}

const Profile = ({ children, img_path }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='flex flex-col relative'>
			<div
				className={` flex text-black justify-center items-center rounded-xl gap-1 transition-all cursor-pointer`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<img
					className='rounded-lg border-1 border-stone-200 select-none h-12'
					src={img_path}
					alt=''
				/>
				<ChevronDown className={`${isOpen && ' -rotate-180'} transition-all`} />
			</div>
			{isOpen && (
				<div
					className={`bg-white flex flex-col absolute top-20 -left-55 z-50 shadow-md rounded-xl`}
				>
					{children}
				</div>
			)}
		</div>
	)
}

const Button = ({ img, namebtn, children }) => {
	return (
		<>
			<button className='bg-[#820000] hover:bg-[#82000025] hover:text-[#820000] active:scale-97 transition-all inline-flex gap-4 text-white font-medium p-4 px-10 text-lg justify-between items-center rounded-md'>
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

const CourseCard = ({
	title,
	description,
	tag,
	procent,
	img_path,
	isProgressbar,
}) => {
	return (
		<div className='border-1 border-stone-200 rounded-lg flex flex-col overflow-hidden w-full'>
			<img className='w-full h-85 object-cover' src={img_path} alt='' />
			<div className='flex h-75 flex-col gap-3 p-5'>
				<a
					href='#'
					className='font-bold text-2xl hover:text-[#820000] transition-all'
				>
					{title}
				</a>
				<p className='text-2xl font-light text-stone-500 mb-4'>{description}</p>
				<p className='bg-stone-100 w-fit text-stone-500 rounded-lg px-3 py-1 font-medium text-lg'>
					{tag}
				</p>
			</div>
			{!isProgressbar ? (
				<>
					<div className='flex items-center gap-4 border-t-1 border-stone-200 p-5 pb-7'>
						<TrendingUp size={32} />
						<div className='flex flex-col w-full'>
							<p>
								<span className='font-semibold'>{procent}%</span> Выполнено
							</p>
							<div className='w-full h-3 bg-stone-200 rounded-full overflow-hidden'>
								<div
									className='h-3 rounded-full bg-gradient-to-r from-[#820000] to-[#c10f1a]'
									style={{ width: `${procent}%` }}
								></div>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className='p-3 flex justify-end'>
					<Button namebtn={'Получить'} img={'right'} />
				</div>
			)}
		</div>
	)
}

export {
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
}
