import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
	return api.isAuthenticated() ? (
		<Outlet /> // рендер вложенных маршрутов
	) : (
		<Navigate to='/auth' replace />
	)
}
