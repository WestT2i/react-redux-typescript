import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Order = {
  id: number
  client: string
  product: string
  amount: string
}

type OrdersState = {
  list: Order[]
}

const data = localStorage.getItem('orders')
const initialState: OrdersState = {
  list: data ? JSON.parse(data) : [],
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.list.push(action.payload)
      localStorage.setItem('orders', JSON.stringify(state.list))
    },
    removeOrder(state, action: PayloadAction<number>) {
      state.list = state.list.filter((order) => order.id !== action.payload)
      localStorage.setItem('orders', JSON.stringify(state.list))
    },
  },
})

export const { addOrder, removeOrder } = orderSlice.actions

export default orderSlice.reducer
