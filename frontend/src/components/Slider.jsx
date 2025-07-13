import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { BlackButton, GrayButton } from './Components'

const Slider = () => {
	const Slides = [
		{
			image:
				'https://space.rosea.dev/pluginfile.php/1/theme_space/block1slideimg1/1749469386/hero-1.jpg',
			title: 'Привет, Moodle 4!',
			subtitle:
				'МелГУ СУО 1.2 предназначен для Moodle версий 4.5, 4.4, 4.3, 4.2 и 4,1, а МелГУ СУО 1.1 - для Moodle версий 3.9 - 3.11.',
			description:
				'Нужна помощь с настройкой темы? Или вы хотите сообщить об ошибке?',
		},
		{
			image:
				'https://space.rosea.dev/pluginfile.php/1/theme_space/block1slideimg2/1749469386/hero-2.jpg',
			title: 'Запрос функций',
			subtitle:
				'МелГУ СУО 1.2 предназначен для Moodle версий 4.5, 4.4, 4.3, 4.2 и 4,1, а МелГУ СУО 1.1 - для Moodle версий 3.9 - 3.11.',
			description:
				'Нужна помощь с настройкой темы? Или вы хотите сообщить об ошибке?',
		},
		{
			image:
				'https://space.rosea.dev/pluginfile.php/1/theme_space/block1slideimg3/1749469386/hero-3.jpg',
			title: 'Просто прелесть!',
			subtitle:
				'МелГУ СУО 1.2 предназначен для Moodle версий 4.5, 4.4, 4.3, 4.2 и 4,1, а МелГУ СУО 1.1 - для Moodle версий 3.9 - 3.11.',
			description:
				'Нужна помощь с настройкой темы? Или вы хотите сообщить об ошибке?',
		},
	]

	const [slideNow, setSlideNow] = useState(0)
	const intervalRef = useRef(null)
	const pauseTimeoutRef = useRef(null)

	const goToNextSlide = () => {
		setSlideNow(prev => (prev + 1) % Slides.length)
	}

	const startAutoSlide = () => {
		clearInterval(intervalRef.current)
		intervalRef.current = setInterval(goToNextSlide, 5000)
	}

	const pauseAutoSlide = () => {
		clearInterval(intervalRef.current)
		clearTimeout(pauseTimeoutRef.current)
		pauseTimeoutRef.current = setTimeout(() => {
			startAutoSlide()
		}, 15000)
	}

	useEffect(() => {
		startAutoSlide()
		return () => {
			clearInterval(intervalRef.current)
			clearTimeout(pauseTimeoutRef.current)
		}
	}, [])

	const nextSlide = () => {
		setSlideNow(prev => (prev + 1) % Slides.length)
		pauseAutoSlide()
	}

	const prevSlide = () => {
		setSlideNow(prev => (prev - 1 + Slides.length) % Slides.length)
		pauseAutoSlide()
	}

	const progressWidth = `${((slideNow + 1) / Slides.length) * 100}%`

	return (
		<>
			<div className='relative rounded-md md:flex md:flex-col overflow-hidden'>
				{/* Прогрессбар */}
				<div className='absolute w-[98%] rounded-full bg-[var(--glass)] h-2 top-3 mx-3 backdrop-blur-xs z-21'>
					<div
						className='absolute rounded-full bg-gradient-to-r from-[var(--color1)] to-[var(--color2)] h-2 transition-all duration-300'
						style={{ width: progressWidth }}
					></div>
				</div>

				{/* Текстовый блок */}
				<div
					className='z-20 backdrop-blur-xs rounded-md w-full lg:w-4/5 xl:w-3/5 2xl:w-2/5 h-auto p-5 lg:p-10 text-center 
					lg:border-1 border-t-[var(--glass-light-border)] border-l-[var(--glass-light-border)] border-b-[var(--glass-dark-border)] border-r-[var(--glass-dark-border)] 
					lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2'
					style={{
						background:
							'radial-gradient(circle at top left, var(--glass-light), var(--glass))',
					}}
				>
					<div className='inline-flex flex-col items-center gap-3'>
						<p className='text-[var(--primary-text)] md:text-2xl xl:text-3xl font-semibold'>
							{Slides[slideNow].title}
						</p>
						<p className='text-[var(--primary-text)] text-md font-medium w-6/7 text-center'>
							{Slides[slideNow].subtitle}
						</p>
						<p className='text-[var(--primary-text)] text-sm font-normal w-1/2 text-center'>
							{Slides[slideNow].description}
						</p>
						<div className='inline-flex xl:flex-col gap-3'>
							<div className='inline-flex mx-auto'>
								<GrayButton namebtn={'Получить эту тему!'} />
							</div>
							<div className='inline-flex mx-auto'>
								<BlackButton namebtn={'МелГУ СУО 1.2 для Moodle 4.5 - 4.0 '} />
							</div>
						</div>
					</div>
				</div>

				{/* Картинка */}
				<img
					src={Slides[slideNow].image}
					alt={`Slide ${slideNow + 1}`}
					className='w-full transition-all'
				/>

				{/* Кнопки */}
				<button
					onClick={prevSlide}
					className='absolute left-3 top-1/2 transform -translate-y-1/2 rounded-full text-[var(--gray)] p-2 hover:scale-105 transition-all backdrop-blur-xs border-1 border-t-[var(--glass-light-border)] border-l-[var(--glass-light-border)] border-b-[var(--glass-dark-border)] border-r-[var(--glass-dark-border)]'
					style={{
						background:
							'radial-gradient(circle at top left, var(--glass-light), var(--glass))',
					}}
				>
					<ChevronLeft />
				</button>
				<button
					onClick={nextSlide}
					className='absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full text-[var(--gray)] p-2 hover:scale-105 transition-all backdrop-blur-xs border-1 border-t-[var(--glass-light-border)] border-l-[var(--glass-light-border)] border-b-[var(--glass-dark-border)] border-r-[var(--glass-dark-border)]'
					style={{
						background:
							'radial-gradient(circle at top left, var(--glass-light), var(--glass))',
					}}
				>
					<ChevronRight />
				</button>
			</div>
		</>
	)
}

export default Slider
