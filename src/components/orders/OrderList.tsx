import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import { OrderItem } from './OrderItem'

export const OrderList: React.FC = () => {
  const orders = useAppSelector((state) => state.order.list)

  return (
    <div className="main_content">
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </div>
  )
}
