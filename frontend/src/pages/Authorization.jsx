import { Forgot, Input, InputPassword, Submit } from '../components/Components'
import { GraduationCap, UserRound, KeyRound, Eye, EyeOff } from 'lucide-react'

const Authorization = () => {
	return (
		<>
			<div className='w-screen h-screen flex justify-center items-center'>
				<div className='bg-white rounded-4xl shadow-2xl flex shadow-[#00000015] w-400 h-275 p-8 gap-4'>
					<img
						className='rounded-2xl w-1/2'
						src='https://i.pinimg.com/736x/0f/6d/b2/0f6db20951037bcfc56a1a2e9acef7c7.jpg'
						alt=''
					/>
					<div className='w-1/2 flex flex-col items-center justify-center gap-5'>
						<GraduationCap color='#820000' size={96} />
						<h1 className='font-black text-4xl'>МелГУ СУО</h1>
						<Input placeholder={'Логин'}>
							<UserRound size={28} className='w-20 opacity-66' />
						</Input>
						<InputPassword />
						<Forgot />
						<Submit />
					</div>
				</div>
			</div>
		</>
	)
}
export default Authorization
