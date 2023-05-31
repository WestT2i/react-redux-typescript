import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { removeClient } from '../../store/slice/clientSlice'

interface ClientItemProps {
  id: number
  firstName: string
  lastName: string
  phone: string
}

export const ClientItem: React.FC<ClientItemProps> = ({
  id,
  firstName,
  lastName,
  phone,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="item">
      <h3>{firstName + ' ' + lastName}</h3>
      <p>Телефон: {phone}</p>
      <button onClick={() => dispatch(removeClient(id))}>Удалить</button>
    </div>
  )
}
