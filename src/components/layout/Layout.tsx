import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../header/Header'

export const Layout = () => {
  const location = useLocation()

  return location.pathname === '/login' ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Header />
      <Outlet />
    </>
  )
}
