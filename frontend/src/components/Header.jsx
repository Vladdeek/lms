import {
	GraduationCap,
	Info,
	InfoIcon,
	Menu,
	MessageSquare,
	MessagesSquare,
	PanelLeftClose,
	PanelLeftOpen,
} from 'lucide-react'
import { useState } from 'react'
import {
	ChangeLang,
	Dropdown,
	HeaderBtn,
	InDropdown,
	Link,
	Profile,
	Search,
	ToggleTheme,
} from './Components'

const Header = ({
	toggleSidebar,
	sidebarOpen,
	img_path,
	UserName,
	Email,
	Role,
}) => {
	const [searchIsOpen, setSearchIsOpen] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const [burgerIsOpen, setBurgerIsOpen] = useState(false)

	const hideDropdown = () => {
		setActiveDropdown(!activeDropdown)
	}

	const handleToggle = dropdownName => {
		setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
	}
	return (
		<>
			<div
				className={`max-lg:fixed z-100 top-0 ${
					!sidebarOpen ? 'lg:left-0 w-screen ' : 'lg:left-65 w-full'
				} transition-all`}
			>
				<div
					className={`flex  px-2 py-2 ${
						burgerIsOpen && 'h-screen max-lg:flex-col-reverse'
					} border-b-1 ${
						burgerIsOpen && 'max-lg:justify-end'
					} justify-between  border-[var(--border)] bg-[var(--bg)]`}
				>
					<div className={`flex gap-1`}>
						<div
							onClick={toggleSidebar}
							className={`${
								sidebarOpen ? 'bg-[var(--secondary)]' : 'bg-[var(--bg-sidebar)]'
							} rounded-xl h-12 ${
								burgerIsOpen && 'max-lg:hidden'
							} w-12 flex justify-center items-center p-2 cursor-pointer relative group`}
						>
							{sidebarOpen ? (
								<PanelLeftClose className='text-[var(--primary)]' size={28} />
							) : (
								<PanelLeftOpen
									className='text-[var(--primary-text)]'
									size={28}
								/>
							)}
						</div>

						<div className='flex justify-center max-lg:hidden items-center h-12 mx-5 hover:opacity-75 transition-all cursor-pointer'>
							<GraduationCap className='text-[var(--logo)]' size={32} />
						</div>
						<div className={`${burgerIsOpen && 'hidden'} flex`}>
							<ChangeLang ChapterName={'Рус'}>
								<InDropdown
									content={'Русский'}
									onClick={() => hideDropdown()}
								/>
							</ChangeLang>
						</div>
						<div
							className={`flex ${
								!burgerIsOpen
									? 'max-lg:hidden'
									: 'max-lg:flex-col max-lg:w-full'
							}`}
						>
							<Dropdown
								ChapterName={'Курсы'}
								isOpen={activeDropdown === 'courses'}
								onToggle={() => handleToggle('courses')}
							>
								<InDropdown
									content={'Все курсы'}
									to={'courses'}
									onClick={() => hideDropdown()}
								/>
								<InDropdown
									content={'Поиск курсов'}
									onClick={() => hideDropdown()}
								/>
								<div className='border-t-1 flex flex-col gap-1 mt-1 p-1 border-[var(--border)]'>
									<InDropdown
										content={'Темы документации'}
										onClick={() => hideDropdown()}
									/>
								</div>
							</Dropdown>
							<HeaderBtn ChapterName={'Докс'} />
							<Dropdown
								ChapterName={'Сервер'}
								isOpen={activeDropdown === 'server'}
								onToggle={() => handleToggle('server')}
							>
								<InDropdown content={'kylos'} onClick={() => hideDropdown()} />
								<InDropdown
									content={'Hostinger'}
									onClick={() => hideDropdown()}
								/>
								<InDropdown
									content={'ScalaHosting'}
									onClick={() => hideDropdown()}
								/>
							</Dropdown>
							<Dropdown
								ChapterName={'Версии'}
								isOpen={activeDropdown === 'versions'}
								onToggle={() => handleToggle('versions')}
							>
								<InDropdown content={'For moodle 3.9 - 3.11'} />
							</Dropdown>
							<Dropdown
								ChapterName={'Темы Moodle'}
								isOpen={activeDropdown === 'themes'}
								onToggle={() => handleToggle('themes')}
							>
								<InDropdown
									content={'Universe (new)'}
									onClick={() => hideDropdown()}
								/>
								<InDropdown
									content={'Space 2'}
									onClick={() => hideDropdown()}
								/>
								<InDropdown
									content={'Alpha 2'}
									onClick={() => hideDropdown()}
								/>
								<InDropdown
									content={'Monocolor'}
									onClick={() => hideDropdown()}
								/>
								<InDropdown content={'BAZ'} onClick={() => hideDropdown()} />
								<InDropdown
									content={'IOMAD Moon'}
									onClick={() => hideDropdown()}
								/>
							</Dropdown>
						</div>
					</div>
					<div className='inline-flex h-12 gap-1'>
						{!searchIsOpen && (
							<>
								<div className='max-lg:hidden inline-flex'>
									<div className='flex justify-center items-center h-full mx-5 hover:opacity-75 transition-all cursor-pointer'>
										<GraduationCap className='text-[var(--logo)]' size={24} />
									</div>
									<div className='flex flex-col pr-4 border-r-1 border-[var(--border)]'>
										<p className='font-medium text-xs text-[var(--primary-text)]'>
											МелГУ СУО 1.2
										</p>
										<Link
											size={'text-xs'}
											text={'Получите эту тему сегодня!'}
											ref={'#'}
										/>
									</div>
								</div>
							</>
						)}
						<div
							className={`flex gap-1 transition-all ${
								burgerIsOpen && 'max-lg:w-full  max-lg:justify-between'
							} `}
						>
							<Search
								onClick={() => setSearchIsOpen(!searchIsOpen)}
								searchIsOpen={searchIsOpen}
							/>
							<div className='flex gap-1'>
								<ToggleTheme />
								<button className='hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-[var(--secondary-text)] h-12 w-12 rounded-lg flex justify-center items-center transition-all'>
									<MessagesSquare size={42} className='p-2' />
								</button>
								<Profile img_path={img_path}>
									<div className='p-4 pr-20 text-[var(--primary-text)]'>
										<p className='font-medium text-xl whitespace-nowrap'>
											{UserName}
										</p>
										<p className='font-normal  text-xl whitespace-nowrap'>
											{Email}
										</p>
										<div className='flex items-center gap-2 mt-3'>
											<Info />
											<p className='font-normal text-lg'>{Role}</p>
										</div>
									</div>

									<div className='border-t-1 flex flex-col gap-1 p-1 border-stone-200'>
										<InDropdown
											content={'Дашборд'}
											onClick={() => hideDropdown()}
										/>
										<InDropdown
											content={'Контент'}
											onClick={() => hideDropdown()}
										/>
									</div>
									<div className='border-t-1 flex flex-col gap-1 p-1 border-stone-200'>
										<InDropdown
											content={'Оценки'}
											onClick={() => hideDropdown()}
										/>
										<InDropdown
											content={'Отчеты'}
											onClick={() => hideDropdown()}
										/>
									</div>
									<div className='border-t-1 flex flex-col gap-1 p-1 border-stone-200'>
										<InDropdown
											content={'Настройки'}
											onClick={() => hideDropdown()}
										/>
										<InDropdown
											content={'Выйти'}
											onClick={() => hideDropdown()}
										/>
									</div>
								</Profile>
								<button
									className='hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-[var(--secondary-text)] h-12 w-12 lg:hidden rounded-lg flex justify-center items-center transition-all'
									onClick={() => setBurgerIsOpen(!burgerIsOpen)}
								>
									<Menu size={42} className='p-2' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Header
