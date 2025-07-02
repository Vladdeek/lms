import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ChevronRight } from 'lucide-react'

export default function Sidebar({ username, role, img_path, children }) {
	return (
		<aside
			id='logo-sidebar'
			className='
        fixed top-0 left-0 z-40 w-107 h-screen
        transition-transform -translate-x-full sm:translate-x-0
        bg-stone-100 text-white flex flex-col'
			aria-label='Sidebar'
		>
			{/* ——— меню ——— */}
			<nav className='flex-1 overflow-y-auto px-3 py-4'>
				<ul className='space-y-2 font-medium flex flex-col'>{children}</ul>
			</nav>

			{/* ——— версия ——— */}
			<p className='mb-2 ml-4 text-white font-medium'>Версия 0.0.1.4</p>
		</aside>
	)
}

export const SBLink = ({ to, chapter_name, icon: Icon }) => (
	<li>
		<NavLink
			to={to}
			className={({ isActive }) =>
				[
					'flex items-center rounded-lg gap-3 cursor-pointer transition h-15 p-4',
					isActive
						? 'bg-[#82000010] text-[#820000]'
						: 'hover:bg-[#82000010] hover:text-[#820000] text-black',
				].join(' ')
			}
		>
			<Icon className='text-current opacity-75 group-hover:text-[#820000]' />
			<span className='flex-1 pb-[2px] whitespace-nowrap font-medium text-xl pt-1'>
				{chapter_name}
			</span>
		</NavLink>
	</li>
)

export const SBLinkButton = ({ onClick, chapter_name, icon: Icon }) => (
	<li className='group'>
		<button
			onClick={onClick}
			className='
		  flex items-center p-2 rounded-lg gap-3 cursor-pointer transition
		  hover:bg-[#82000010] hover:text-[#820000] w-full text-left text-black h-20
		'
		>
			<Icon className='text-current group-hover:text-[#820000]' />
			<span className='flex-1 pb-[2px] whitespace-nowrap font-medium group-hover:text-[#820000]'>
				{chapter_name}
			</span>
		</button>
	</li>
)

Sidebar.propTypes = {
	username: PropTypes.arrayOf(PropTypes.string).isRequired,
	role: PropTypes.string.isRequired,
	img_path: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

SBLink.propTypes = {
	to: PropTypes.string.isRequired,
	icon_name: PropTypes.string.isRequired,
	chapter_name: PropTypes.string.isRequired,
}
