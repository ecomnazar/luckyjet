import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { LoginPage } from './LoginPage'
import './i18n'
import { Redirect } from './Redirect'
import { WithdrawPage } from './WithdrawPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={
      createBrowserRouter([
        {
          path: '/',
          element: <Redirect />
        },
        {
          path: '/:lang/withdraw',
          element: <WithdrawPage />
        },
        {
          path: '/:lang',
          element: <App />
        },
        {
          path: '/:lang/login',
          element: <LoginPage />
        }
      ])
    } />
  </React.StrictMode>,
)
