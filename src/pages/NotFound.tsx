import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h1>404 | NotFound</h1>
      <span>
        Page not found. <NavLink to="/">Back home</NavLink>
      </span>
    </div>
  )
}
