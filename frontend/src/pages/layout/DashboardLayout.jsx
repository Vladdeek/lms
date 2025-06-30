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
		const colors = [
			'f5b7b1',
			'e8daef',
			'aed6f1',
			'a2d9ce',
			'abebc6',
			'f9e79f',
			'fad7a0',
			'edbb99',
		]
		const color = colors[user.id % colors.length]
		return `https://ui-avatars.com/api/?name=${initials}&background=${color}&color=fff`
	}

	return (
		<>
			<Sidebar
				username={user.full_name.split(' ')}
				role={roles.join(', ')}
				img_path={getAvatar()}
			>
				<div className='flex w-full my-10 justify-center items-center gap-3'>
					<GraduationCap color='#820000' size={96} />
					<h1 className='font-black text-black text-4xl'>МелГУ СУО</h1>
				</div>
				<div className='bg-white p-2 rounded-xl gap-1 w-6/7 mx-auto'>
					<SBLink to={'home'} chapter_name={'Главная'} icon={House} />
					<SBLink
						to={'dashboard'}
						chapter_name={'Дашборд'}
						icon={PanelsTopLeft}
					/>
					<SBLink to={'calendar'} chapter_name={'Календарь'} icon={Calendar} />
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

			<main className='ml-105 p-4'>
				<Header />
				<Outlet />
			</main>
		</>
	)
}
