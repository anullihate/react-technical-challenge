import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Loadable } from '../components'
import { MinimalLayout } from '../layouts'

const LazyLoginPage = Loadable(lazy(() => import('../../pages/LoginPage')))

const AuthenticationRoutes: RouteObject = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <LazyLoginPage />,
    },
  ],
}

export default AuthenticationRoutes
