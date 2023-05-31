import { useAppDispatch } from '../../hooks/redux'
import { closeModal } from '../../store/slice/modalSlice'

interface ModalProps {
  title: string
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ title, children }) => {
  const dispatch = useAppDispatch()

  return (
    <aside className="modal">
      <div className="modal_container">
        <div className="modal_header">
          <h2>{title}</h2>
          <button onClick={() => dispatch(closeModal())}>✕</button>
        </div>
        <div className="modal_content">{children}</div>
      </div>
    </aside>
  )
}
