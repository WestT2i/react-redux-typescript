import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">Product's</div>
      <nav className="nav">
        <NavLink to="/products">Продукты</NavLink>
        <NavLink to="/clients">Клиенты</NavLink>
        <NavLink to="/orders">Заказы</NavLink>
      </nav>
    </header>
  )
}
