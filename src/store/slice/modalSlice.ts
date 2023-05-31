import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: false,
}

const productSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true
    },
    closeModal: (state) => {
      state.modal = false
    },
  },
})

export const { openModal, closeModal } = productSlice.actions

export default productSlice.reducer
