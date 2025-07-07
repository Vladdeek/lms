export const courses = [
	// Начинающий
	{
		img_path:
			'https://i.pinimg.com/736x/66/f7/22/66f72263bb2ebe4cf2436a49bf76e7af.jpg',
		title: 'Введение в HTML',
		description:
			'Основы верстки сайтов: теги, структура документа и первая страница.',
		tag: 'Начинающий',
		procent: 20,
	},
	{
		img_path:
			'https://i.pinimg.com/736x/9b/0c/7c/9b0c7cc521987e83e60b49791828362b.jpg',
		title: 'Основы CSS',
		description: 'Как оформлять HTML-страницы: стили, шрифты, цвета и отступы.',
		tag: 'Начинающий',
		procent: 45,
	},
	{
		img_path:
			'https://i.pinimg.com/736x/41/26/96/412696b9ec5e37e2952fb4a689053f98.jpg',
		title: 'Знакомство с JavaScript',
		description: 'Первая программа на JS, базовый синтаксис и работа с DOM.',
		tag: 'Начинающий',
		procent: 10,
	},
	{
		img_path:
			'https://i.pinimg.com/736x/a2/e2/9f/a2e29fc13256aecd5f4b700fc53c3e7b.jpg',
		title: 'Git и GitHub для новичков',
		description:
			'Управление версиями проектов, создание репозиториев и коммитов.',
		tag: 'Начинающий',
		procent: 60,
	},

	// Эксперт
	{
		img_path:
			'https://i.pinimg.com/originals/d2/b7/72/d2b77209ef7d345bbdb395464aab2b33.png',
		title: 'React.js продвинутый',
		description:
			'Оптимизация компонентов, хуки, контекст и проектирование архитектуры.',
		tag: 'Эксперт',
		procent: 80,
	},
	{
		img_path:
			'https://i.pinimg.com/originals/1d/f5/23/1df52364b1b403c4d58e32e41d546a01.png',
		title: 'Node.js и Express',
		description: 'Создание REST API, роутинг, middleware и подключение БД.',
		tag: 'Эксперт',
		procent: 55,
	},
	{
		img_path:
			'https://i.pinimg.com/originals/d6/8a/e3/d68ae3f3b1e11e8a3ae0de0b5824b9a9.png',
		title: 'TypeScript для профессионалов',
		description:
			'Генерики, интерфейсы, строгая типизация и интеграция с React.',
		tag: 'Эксперт',
		procent: 35,
	},
	{
		img_path:
			'https://i.pinimg.com/originals/0e/72/eb/0e72eb2c4931c3d05ab40cc1a2ddcaad.png',
		title: 'Docker и деплой приложений',
		description:
			'Контейнеризация, docker-compose, деплой на VPS и CI/CD пайплайны.',
		tag: 'Эксперт',
		procent: 70,
		isProgressbar: true,
	},
	{
		img_path:
			'https://i.pinimg.com/736x/3a/4f/3b/3a4f3b7c4e7a8c5b5f8e2d6c1a9b3e7d.jpg',
		title: 'Основы Bootstrap',
		description:
			'Быстрое создание адаптивных сайтов с помощью популярного фреймворка.',
		tag: 'Начинающий',
		procent: 15,
	},
	{
		img_path:
			'https://i.pinimg.com/736x/b5/e9/a6/b5e9a6c3e8f8e5c5f6d2b8c1a7e3d4e9.jpg',
		title: 'JavaScript: функции и события',
		description:
			'Объявление функций, обработчики событий и основы DOM-манипуляций.',
		tag: 'Начинающий',
		procent: 30,
	},
	{
		img_path:
			'https://i.pinimg.com/736x/c4/d5/a6/c4d5a6e3f2b1e4d5c6f7e8d9c0b1a2e3.jpg',
		title: 'Введение в SQL',
		description:
			'Основы работы с базами данных: SELECT, INSERT, UPDATE и DELETE.',
		tag: 'Начинающий',
		procent: 10,
	},
	{
		img_path:
			'https://i.pinimg.com/736x/d3/e7/f8/d3e7f8e5c4d3b2a1e0d9c8b7a6e5f4d3.jpg',
		title: 'Основы командной строки',
		description:
			'Навигация по файловой системе, основные команды Linux/MacOS/Windows.',
		tag: 'Начинающий',
		procent: 40,
	},
	{
		img_path:
			'https://i.pinimg.com/736x/e2/f9/ea/e2f9eac3d4b3c2a1e0d9c8b7a6e5f4d3.jpg',
		title: 'Верстка email-рассылок',
		description:
			'Особенности HTML/CSS для создания корректно отображаемых писем.',
		tag: 'Начинающий',
		procent: 5,
	},

	// Эксперт (дополнительные 5 курсов)
	{
		img_path:
			'https://i.pinimg.com/originals/9a/3d/e7/9a3de7b9e8b6c2d5f4e3c9a8b7d0e9f8.png',
		title: 'Advanced CSS: Grid и Flexbox',
		description:
			'Сложные макеты, кастомные свойства CSS и анимации производительности.',
		tag: 'Эксперт',
		procent: 65,
		isProgressbar: true,
	},
	{
		img_path:
			'https://i.pinimg.com/originals/6a/1e/d5/6a1ed5b9e7b8c2d5f4e3c9a8b7c9e8f7.png',
		title: 'WebSockets и реальное время',
		description: 'Создание чатов, онлайн-игр и других real-time приложений.',
		tag: 'Эксперт',
		procent: 55,
		isProgressbar: true,
	},
	{
		img_path:
			'https://i.pinimg.com/originals/5a/2e/c6/5a2ec6b9e7b8c2d5f4e3c9a8b7b8e7f6.png',
		title: 'Оптимизация React приложений',
		description:
			'useMemo, useCallback, React.memo и анализ производительности.',
		tag: 'Эксперт',
		procent: 75,
		isProgressbar: true,
	},
	{
		img_path:
			'https://i.pinimg.com/originals/4a/1d/b5/4a1db5b9e7b8c2d5f4e3c9a8b7a7e6f5.png',
		title: 'Serverless архитектура',
		description: 'AWS Lambda, Firebase Functions и бессерверные подходы.',
		tag: 'Эксперт',
		procent: 35,
		isProgressbar: true,
	},
	{
		img_path:
			'https://i.pinimg.com/originals/3b/2e/a4/3b2ea4b9e7b8c2d5f4e3c9a8b7a6e5f4.png',
		title: 'Продвинутые алгоритмы JavaScript',
		description: 'Оптимизация кода, структуры данных и сложные паттерны.',
		tag: 'Эксперт',
		procent: 90,
		isProgressbar: true,
	},
]
