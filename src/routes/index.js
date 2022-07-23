import Dashboard from '../container/dashboard/pages'

const { default: Login } = require('../container/auth/pages/Login')

const publicRoutes = [
  {
    title: 'Login',
    path: '/login',
    component: Login
  }
]

const protectedRoutes = [
  {
    title: 'Dashboard',
    path: '/',
    component: Dashboard
  }
]

export { publicRoutes, protectedRoutes }
