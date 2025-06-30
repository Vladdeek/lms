import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { useState } from 'react'
import { Dropdown } from './Components'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<div className='flex px-4'>
				<div
					className={`${
						!isOpen ? 'bg-[#82000010]' : 'bg-[#00000010]'
					} rounded-xl p-4`}
				>
					{!isOpen ? (
						<PanelLeftClose color='#820000' size={28} />
					) : (
						<PanelLeftOpen color='#181818' size={28} />
					)}
				</div>
				<Dropdown />
			</div>
		</>
	)
}
export default Header
