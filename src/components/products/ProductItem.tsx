import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { removeProduct } from '../../store/slice/productSlice'

interface ProductItemProps {
  id: number
  productName: string
  productPrice: string
}

export const ProductItem: React.FC<ProductItemProps> = ({
  id,
  productName,
  productPrice,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="item">
      <h3>{productName}</h3>
      <p>Цена: {productPrice}</p>
      <button onClick={() => dispatch(removeProduct(id))}>Удалить</button>
    </div>
  )
}
