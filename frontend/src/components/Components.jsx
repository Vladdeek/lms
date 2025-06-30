import {
	GraduationCap,
	UserRound,
	KeyRound,
	Eye,
	EyeOff,
	PlaySquare,
	ChevronDown,
} from 'lucide-react'
import { useState } from 'react'
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
			className='bg-[#820000] hover:bg-[#660000] transition-all w-4/5 h-22 text-white text-3xl font-semibold rounded-xl'
		/>
	)
}
const Forgot = () => {
	return (
		<button className='text-xl font-semibold text-stone-600 relative group mb-3'>
			<span className='relative inline-block hover:text-[#820000]'>
				Забыли пароль или логин?
				<span className='absolute left-0 bottom-[-1px] w-0 h-0.5 bg-stone-600 transition-all duration-300 group-hover:w-full'></span>
			</span>
		</button>
	)
}

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='flex flex-col'>
			<div
				className={`${
					isOpen ? 'bg-[#82000010] ' : 'hover:bg-[#82000010] '
				} flex text-black hover:text-[#820000]`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className={`${isOpen && 'text-[#820000]'}`}>Курсы</p>
				<ChevronDown />
			</div>
			{isOpen && (
				<div className={`bg-white flex flex-col`}>
					<p>Все курсы</p>
					<p>Поиск курсов</p>
					<p>Темы документации</p>
				</div>
			)}
		</div>
	)
}

export { Input, InputPassword, Submit, Forgot, Dropdown }
