import { useRoutes } from 'react-router-dom'
import AuthenticationRoutes from './AuthenticationRoutes'
import MainRoutes from './MainRoutes'

function AppRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes])
}

export default AppRoutes
