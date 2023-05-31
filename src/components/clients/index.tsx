import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { openModal } from '../../store/slice/modalSlice'

import { Modal } from '../modal/Modal'
import { ClientForm } from './ClientForm'
import { ClientList } from './ClientList'

export const ClientsPage = () => {
  const { modal } = useAppSelector((store) => store.modal)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="main_header">
        <h1>Клиенты</h1>
        <button onClick={() => dispatch(openModal())}>Добавить клиента</button>
      </div>

      <ClientList />

      {modal && (
        <Modal title="Добавление клиента">
          <ClientForm />
        </Modal>
      )}
    </>
  )
}
