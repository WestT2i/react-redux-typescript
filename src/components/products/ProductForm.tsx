import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { addProduct } from '../../store/slice/productSlice'
import { closeModal } from '../../store/slice/modalSlice'

const initialState = {
  productName: '',
  productPrice: '',
}

export const ProductForm = () => {
  const dispatch = useAppDispatch()
  const [productValue, setProductValue] = React.useState(initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProductValue({ ...productValue, [name]: value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const product = {
      id: Date.now(),
      productName: productValue.productName,
      productPrice: productValue.productPrice,
    }
    if (
      productValue.productName.trim().length &&
      productValue.productPrice.trim().length
    ) {
      dispatch(addProduct(product))
      setProductValue(initialState)
      dispatch(closeModal())
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        name="productName"
        type="text"
        placeholder="Название"
        value={productValue.productName}
        onChange={onChange}
      />
      <input
        name="productPrice"
        type="number"
        placeholder="Цена"
        value={productValue.productPrice}
        onChange={onChange}
      />
      <input type="submit" value="Добавить" />
    </form>
  )
}
