import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { removeOrder } from '../../store/slice/orderSlice'

interface ProductItemProps {
  id: number
  client: string
  product: string
  amount: string
}

export const OrderItem: React.FC<ProductItemProps> = ({
  id,
  client,
  product,
  amount,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="item">
      <h3>{client}</h3>
      <p>Продукт: {product}</p>
      <p>Количество: {amount}</p>
      <button onClick={() => dispatch(removeOrder(id))}>Удалить</button>
    </div>
  )
}
