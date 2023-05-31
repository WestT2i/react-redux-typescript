import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { openModal } from '../../store/slice/modalSlice'

import { Modal } from '../modal/Modal'
import { OrderForm } from './OrderForm'
import { OrderList } from './OrderList'

export const OrdersPage = () => {
  const { modal } = useAppSelector((store) => store.modal)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="main_header">
        <h1>Заказы</h1>
        <button onClick={() => dispatch(openModal())}>Добавить заказ</button>
      </div>

      <OrderList />

      {modal && (
        <Modal title="Добавление заказа">
          <OrderForm />
        </Modal>
      )}
    </>
  )
}
