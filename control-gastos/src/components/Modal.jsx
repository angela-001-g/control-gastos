import CerrarBtn from "../img/cerrar.svg"

// eslint-disable-next-line react/prop-types
function Modal({ setModal }) {

    const ocultarModal = () => {
        setModal(false)
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={CerrarBtn}
                alt="Cerrar modal"
                onClick={ocultarModal}
            />
        </div>
    </div>
  )
}

export default Modal
