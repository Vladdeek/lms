import { BlackButton, Button, GrayButton } from '../components/Components'
import Slider from '../components/Slider'

const SiteHome = () => {
	return (
		<>
			<div className='px-20 py-10 '>
				<div className='w-full inline-flex justify-center'>
					<p className='bg-[var(--secondary)] text-[var(--primary)] rounded-full px-3 py-1 text-xs font-medium'>
						МелГУ СУО 1.2 уже здесь! Для Moodle 4.5 - 4.0
					</p>
				</div>

				<div className='w-full inline-flex flex-col justify-center mt-10'>
					<p className='text-[var(--primary-text)] text-5xl text-center font-black'>
						Привет! Hi!
					</p>
					<p className='text-[var(--primary-text)] text-5xl text-center mt-5 font-black'>
						МелГУ СУО 1.2 уже здесь!
					</p>
				</div>
				<div className='w-full inline-flex justify-center mt-7'>
					<p className='text-[var(--primary-text)] w-4/6 text-lg text-center font-normal'>
						Пользовательский интерфейс был полностью переработан для улучшения
						взаимодействия с пользователем и теперь включает встроенный темный
						режим. Он также включает в себя все функции Moodle 4.0 и был
						оптимизирован с использованием на 50% меньшего количества CSS.
					</p>
				</div>
				<div className='w-full inline-flex justify-center gap-3 mt-10'>
					<BlackButton namebtn={'Получить эту тему за ₽1499*'} />
					<GrayButton namebtn={'Документация'} />
				</div>
				<div className='w-full inline-flex justify-center mt-10'>
					<p className=' text-[var(--secondary-text)] text-xs font-normal'>
						Доверяет сотни клиентов
					</p>
				</div>
				<div className='w-full flex justify-center mt-10'>
					<Slider />
				</div>
				<div className='w-full flex justify-center mt-10'>
					<img
						src='https://space.rosea.dev/pluginfile.php/1/theme_space/spacesettingsimgs/0/logo-sq.svg'
						alt=''
					/>
				</div>
			</div>
		</>
	)
}
export default SiteHome
