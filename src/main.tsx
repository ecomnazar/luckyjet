import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { LoginPage } from './LoginPage'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={
      createBrowserRouter([
        {
          path: '/',
          element: <App />
        },
        {
          path: '/login',
          element: <LoginPage />
        }
      ])
    } />
  </React.StrictMode>,
)
