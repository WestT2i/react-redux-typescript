import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Client = {
  id: number
  firstName: string
  lastName: string
  phone: string
}

type ClientsState = {
  list: Client[]
}

const data = localStorage.getItem('clients')
const initialState: ClientsState = {
  list: data ? JSON.parse(data) : [],
}

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    addClient(state, action: PayloadAction<Client>) {
      state.list.push(action.payload)
      localStorage.setItem('clients', JSON.stringify(state.list))
    },
    removeClient(state, action: PayloadAction<number>) {
      state.list = state.list.filter((client) => client.id !== action.payload)
      localStorage.setItem('clients', JSON.stringify(state.list))
    },
  },
})

export const { addClient, removeClient } = clientSlice.actions

export default clientSlice.reducer
