import Dashboard from '../container/dashboard/pages'
import ListMedicines from '../container/medicines/pages/ListMedicines'

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
  },
  {
    title: 'List Medicines',
    path: '/medicines',
    component: ListMedicines
  }
]

export { publicRoutes, protectedRoutes }
