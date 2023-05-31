import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { addClient } from '../../store/slice/clientSlice'
import { closeModal } from '../../store/slice/modalSlice'

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
}

export const ClientForm = () => {
  const dispatch = useAppDispatch()
  const [clientValue, setClientValue] = React.useState(initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setClientValue({ ...clientValue, [name]: value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const client = {
      id: Date.now(),
      firstName: clientValue.firstName,
      lastName: clientValue.lastName,
      phone: clientValue.phone,
    }
    if (
      clientValue.firstName.trim().length &&
      clientValue.lastName.trim().length &&
      clientValue.phone.trim().length
    ) {
      dispatch(addClient(client))
      setClientValue(initialState)
      dispatch(closeModal())
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        name="firstName"
        type="text"
        placeholder="Имя"
        value={clientValue.firstName}
        onChange={onChange}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Фамилия"
        value={clientValue.lastName}
        onChange={onChange}
      />
      <input
        name="phone"
        type="number"
        placeholder="Телефон"
        value={clientValue.phone}
        onChange={onChange}
      />
      <input type="submit" value="Добавить" />
    </form>
  )
}
