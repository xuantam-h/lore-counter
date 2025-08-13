import './Modal.scss'

const Modal = ({isOpen, onClose, children}) => {

    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-window">
                <button className="btn-close" onClick={onClose}>X</button>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal