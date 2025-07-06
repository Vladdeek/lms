import React, { createContext, useState, useEffect } from 'react'
import { themes } from '../constants/colors'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	// при загрузке читаем из localStorage
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) setTheme(savedTheme)
	}, [])

	useEffect(() => {
		// Меняем цвет body при смене темы
		document.body.style.backgroundColor = themes[theme].bgColor
		// Можно менять и другие свойства body, если нужно
	}, [theme])

	// при изменении темы сохраняем в localStorage
	const toggleTheme = () => {
		setTheme(prev => {
			const newTheme = prev === 'light' ? 'dark' : 'light'
			localStorage.setItem('theme', newTheme)
			return newTheme
		})
	}

	return (
		<ThemeContext.Provider
			value={{ theme, toggleTheme, colors: themes[theme] }}
		>
			{children}
		</ThemeContext.Provider>
	)
}
