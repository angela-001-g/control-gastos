import CerrarBtn from "../img/cerrar.svg"

// eslint-disable-next-line react/prop-types
function Modal({ setModal, animarModal, setAnimarModal }) {

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
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

        <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>Nuevo Gasto</legend>
        </form>
    </div>
  )
}

export default Modal
