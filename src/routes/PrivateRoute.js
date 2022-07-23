import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
  let isValidUser = true
  const user = localStorage.getItem('authUser')
  if (!user || user === 'undefined') isValidUser = false

  const data = JSON.parse(user)
  if (!data) isValidUser = false

  return isValidUser ? children : <Navigate to='/login' />
}

export default PrivateRoute
