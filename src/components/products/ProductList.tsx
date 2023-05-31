import React from 'react'
import { useAppSelector } from '../../hooks/redux'

import { ProductItem } from './ProductItem'

export const ProductList: React.FC = () => {
  const products = useAppSelector((state) => state.product.list)

  return (
    <div className="main_content">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  )
}
