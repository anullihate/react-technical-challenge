import { RouteObject } from 'react-router-dom'
import { Speech } from '../../features/speech'
import { MainLayout } from '../layouts'

const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Speech />,
    },
  ],
}

export default MainRoutes
