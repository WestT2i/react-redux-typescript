import { configureStore } from '@reduxjs/toolkit'

import modalReducer from './slice/modalSlice'
import productReducer from './slice/productSlice'
import clientReducer from './slice/clientSlice'
import orderReducer from './slice/orderSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    product: productReducer,
    client: clientReducer,
    order: orderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
