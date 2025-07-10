import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar, { SBLink, SBLinkButton } from '../../components/SideBar.jsx'
import Loader from '../../components/Loader.jsx'
import {
	Calendar,
	GraduationCap,
	House,
	Inbox,
	LogOut,
	LogOutIcon,
	PanelsTopLeft,
	ShoppingCart,
} from 'lucide-react'
import Header from '../../components/Header.jsx'

export default function DashboardLayout() {
	const navigate = useNavigate()
	const [user, setUser] = useState({
		full_name: 'Иванов Иван Иванович',
		avatar: '/default-avatar.png',
		email: 'ivanov@example.com',
		phone: '+7 (123) 456-78-90',
	})
	const [roles, setRoles] = useState([])
	const [sidebarOpen, setSidebarOpen] = useState(true)

	if (!user)
		return (
			<div className='h-screen flex items-center justify-center'>
				<Loader />
			</div>
		)

	const getAvatar = () => {
		if (!user || !user.full_name) {
			return 'https://ui-avatars.com/api/?name=User&background=f5b7b1&color=fff'
		}
		const names = user.full_name.split(' ')
		const initials = names.slice(0, 2).join('+')

		return `https://ui-avatars.com/api/?name=${initials}&background=fff&color=000`
	}

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}

	return (
		<div className='flex min-h-screen'>
			{/* Sidebar */}
			<div
				className={`fixed h-full w-65 bg-white z-50 transition-transform duration-300 ease-in-out ${
					sidebarOpen ? 'translate-x-0' : '-translate-x-107'
				}`}
			>
				<Sidebar
					username={user.full_name.split(' ')}
					role={roles.join(', ')}
					img_path={getAvatar()}
					sidebarOpen={sidebarOpen}
					toggleSidebar={toggleSidebar}
				>
					<div className='flex w-full my-10 justify-center items-center gap-3'>
						<GraduationCap className='text-[var(--logo)]' size={48} />
						<h1 className='font-black text-[var(--primary-text)] text-xl'>
							МелГУ СУО
						</h1>
					</div>
					<div className='bg-[var(--bg)] p-2 rounded-xl gap-1 w-8/9 mx-auto'>
						<SBLink to={'home'} chapter_name={'Главная'} icon={House} />
						<SBLink
							to={'dashboard'}
							chapter_name={'Дашборд'}
							icon={PanelsTopLeft}
						/>
						<SBLink
							to={'calendar'}
							chapter_name={'Календарь'}
							icon={Calendar}
						/>
						<SBLink
							to={'private-files'}
							chapter_name={'Личные файлы'}
							icon={Inbox}
						/>
						<SBLink
							to={'get-this-theme'}
							chapter_name={'Получите эту тему'}
							icon={ShoppingCart}
						/>
					</div>
				</Sidebar>
			</div>

			{/* Main content */}
			<div
				className={`flex-1 min-h-screen transition-all duration-300 ease-in-out ${
					sidebarOpen ? 'lg:ml-65' : '-ml-0'
				}`}
			>
				<div className='w-full'>
					<Header
						toggleSidebar={toggleSidebar}
						sidebarOpen={sidebarOpen}
						img_path={getAvatar()}
						UserName={user.full_name}
						Email={user.email}
						Role={'Студент'}
					/>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
