import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { openModal } from '../../store/slice/modalSlice'

import { Modal } from '../modal/Modal'
import { ProductForm } from './ProductForm'
import { ProductList } from './ProductList'

export const ProductsPage = () => {
  const { modal } = useAppSelector((store) => store.modal)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="main_header">
        <h1>Продукты</h1>
        <button onClick={() => dispatch(openModal())}>Добавить товар</button>
      </div>

      <ProductList />

      {modal && (
        <Modal title="Добавление товара">
          <ProductForm />
        </Modal>
      )}
    </>
  )
}
