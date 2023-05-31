import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number
  productName: string
  productPrice: string
}

type ProductsState = {
  list: Product[]
}

const data = localStorage.getItem('products')
const initialState: ProductsState = {
  list: data ? JSON.parse(data) : [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.list.push(action.payload)
      localStorage.setItem('products', JSON.stringify(state.list))
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.list = state.list.filter((product) => product.id !== action.payload)
      localStorage.setItem('products', JSON.stringify(state.list))
    },
  },
})

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer
