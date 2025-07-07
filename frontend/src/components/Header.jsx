import {
	GraduationCap,
	Info,
	InfoIcon,
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

	const handleToggle = dropdownName => {
		setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
	}
	return (
		<>
			<div className='flex px-2 pb-2 border-b-1 justify-between border-[var(--border)]'>
				<div className='flex gap-1'>
					<div
						onClick={toggleSidebar}
						className={`${
							sidebarOpen ? 'bg-[var(--secondary)]' : 'bg-[var(--bg-sidebar)]'
						} rounded-xl h-12 w-12 flex justify-center items-center p-2 cursor-pointer relative group`}
					>
						{sidebarOpen ? (
							<PanelLeftClose className='text-[var(--primary)]' size={28} />
						) : (
							<PanelLeftOpen className='text-[var(--primary-text)]' size={28} />
						)}
						<span className='relative'>
							<span className='absolute top-10 mt-2 px-2 py-1 bg-stone-800 text-white text-md font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
								{sidebarOpen ? 'Убрать боковое меню' : 'Показать боковое меню'}
							</span>
						</span>
					</div>
					<div className='flex justify-center items-center h-12 mx-5 hover:opacity-75 transition-all cursor-pointer'>
						<GraduationCap className='text-[var(--logo)]' size={32} />
					</div>
					<ChangeLang ChapterName={'Рус'}>
						<InDropdown content={'Русский'} />
					</ChangeLang>
					<Dropdown
						ChapterName={'Курсы'}
						isOpen={activeDropdown === 'courses'}
						onToggle={() => handleToggle('courses')}
					>
						<InDropdown content={'Все курсы'} to={'courses'} />
						<InDropdown content={'Поиск курсов'} />
						<div className='border-t-1 flex flex-col gap-1 mt-1 p-1 border-[var(--border)]'>
							<InDropdown content={'Темы документации'} />
						</div>
					</Dropdown>

					<HeaderBtn ChapterName={'Докс'} />

					<Dropdown
						ChapterName={'Сервер'}
						isOpen={activeDropdown === 'server'}
						onToggle={() => handleToggle('server')}
					>
						<InDropdown content={'kylos'} />
						<InDropdown content={'Hostinger'} />
						<InDropdown content={'ScalaHosting'} />
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
						<InDropdown content={'Universe (new)'} />
						<InDropdown content={'Space 2'} />
						<InDropdown content={'Alpha 2'} />
						<InDropdown content={'Monocolor'} />
						<InDropdown content={'BAZ'} />
						<InDropdown content={'IOMAD Moon'} />
					</Dropdown>
				</div>
				<div className='inline-flex h-12 gap-1'>
					{!searchIsOpen && (
						<>
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
						</>
					)}

					<Search
						onClick={() => setSearchIsOpen(!searchIsOpen)}
						searchIsOpen={searchIsOpen}
					/>
					<ToggleTheme />
					<button className='hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-[var(--secondary-text)] h-12 w-12 rounded-lg flex justify-center items-center transition-all'>
						<MessagesSquare size={42} className='p-2' />
					</button>
					<Profile img_path={img_path}>
						<div className='p-4 pr-20'>
							<p className='font-medium text-xl whitespace-nowrap'>
								{UserName}
							</p>
							<p className='font-normal  text-xl whitespace-nowrap'>{Email}</p>
							<div className='flex items-center gap-2 mt-3'>
								<Info />
								<p className='font-normal text-lg'>{Role}</p>
							</div>
						</div>

						<div className='border-t-1 flex flex-col gap-1 p-1 border-stone-200'>
							<InDropdown content={'Дашборд'} />
							<InDropdown content={'Контент'} />
						</div>
						<div className='border-t-1 flex flex-col gap-1 p-1 border-stone-200'>
							<InDropdown content={'Оценки'} />
							<InDropdown content={'Отчеты'} />
						</div>
						<div className='border-t-1 flex flex-col gap-1 p-1 border-stone-200'>
							<InDropdown content={'Настройки'} />
							<InDropdown content={'Выйти'} />
						</div>
					</Profile>
				</div>
			</div>
		</>
	)
}
export default Header
