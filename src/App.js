import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginRequest } from './redux/auth/authActions'
import { protectedRoutes, publicRoutes } from './routes'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import React from 'react'
import Login from './container/auth/pages/Login'
import PrivateRoute from './routes/PrivateRoute'
function App () {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map(({ path, component: Component, title }, i) => (
            <Route path={path} element={<Component />} key={i} />
          ))}
          {protectedRoutes.map(({ path, component: Component, title }, i) => (
            <Route
              path={path}
              element={
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              }
              key={i}
            />
          ))}
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
