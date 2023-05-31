import React, { ChangeEvent } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { addOrder } from '../../store/slice/orderSlice'
import { closeModal } from '../../store/slice/modalSlice'

interface ClientProps {
  id: number
  firstName: string
  lastName: string
}

interface ProductProps {
  id: number
  productName: string
}

const initialState = {
  client: '',
  product: '',
  amount: '',
}

export const OrderForm = () => {
  const dispatch = useAppDispatch()
  const [orderValue, setOrderValue] = React.useState(initialState)

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setOrderValue({ ...orderValue, [name]: value })
  }
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOrderValue({ ...orderValue, [name]: value })
  }
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const order = {
      id: Date.now(),
      client: orderValue.client,
      product: orderValue.product,
      amount: orderValue.amount,
    }
    if (
      orderValue.client.trim().length &&
      orderValue.product.trim().length &&
      orderValue.amount.trim().length
    ) {
      dispatch(addOrder(order))
      setOrderValue(initialState)
      dispatch(closeModal())
    }
  }

  const clientsLS = localStorage.getItem('clients')
  const clientsData = clientsLS ? JSON.parse(clientsLS) : []

  const optionsClients = clientsData.map((client: ClientProps) => {
    return (
      <option key={client.id} value={client.firstName + ' ' + client.lastName}>
        {client.firstName + ' ' + client.lastName}
      </option>
    )
  })

  const productsLS = localStorage.getItem('products')
  const productsData = productsLS ? JSON.parse(productsLS) : []

  const optionsProducts = productsData.map((product: ProductProps) => {
    return (
      <option key={product.id} value={product.productName}>
        {product.productName}
      </option>
    )
  })

  const selectedClient = orderValue.client.length > 0

  return selectedClient ? (
    <form onSubmit={onSubmit}>
      <select
        name="product"
        value={orderValue.product}
        onChange={onSelectChange}
      >
        <option value="" disabled hidden>
          Выбрать продукт
        </option>
        {optionsProducts}
      </select>
      <input
        name="amount"
        type="number"
        placeholder="Количество"
        value={orderValue.amount}
        onChange={onInputChange}
      />
      <input type="submit" value="Добавить" />
    </form>
  ) : (
    <form onSubmit={onSubmit}>
      <select name="client" value={orderValue.client} onChange={onSelectChange}>
        <option value="" disabled hidden>
          Выбрать клиента
        </option>
        {optionsClients}
      </select>
      <input type="submit" value="Добавить" />
    </form>
  )
}
