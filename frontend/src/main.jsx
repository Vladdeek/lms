import { createRoot } from 'react-dom/client'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom'
import { Suspense } from 'react'
import './index.css'
import Authorization from './pages/authorization'
import DashboardLayout from './pages/layout/DashboardLayout'
import AllCourses from './pages/AllCourses'
import Courses from './pages/Courses'
import CalendarPage from './pages/CalendarPage'

function MainApp() {
	const navigate = useNavigate()
	return (
		<Suspense
			fallback={
				<>
					<p>Загрузка</p>
				</>
			}
		>
			<Routes>
				<Route path='/auth' element={<Authorization />} />
				<Route path='/' element={<DashboardLayout />}>
					<Route path='courses' element={<AllCourses />} />
					<Route
						path='courses/begginer'
						element={<Courses level={'begginer'} />}
					/>
					<Route path='courses/expert' element={<Courses level={'expert'} />} />
					<Route path='calendar' element={<CalendarPage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

createRoot(document.getElementById('root')).render(
	<Router>
		<MainApp />
	</Router>
)
