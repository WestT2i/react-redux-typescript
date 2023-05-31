import React from 'react'

export const LoginPage = () => {
  return (
    <div className="login">
      <form>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <input type="button" value="Войти" />
      </form>
    </div>
  )
}
