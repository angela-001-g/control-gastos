/* eslint-disable react/prop-types */
import Gasto from "./Gasto"

function ListadoGastos({gastos, setGastoEditar}) {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
        
        {gastos.map(gasto => (
            // eslint-disable-next-line react/jsx-key
            <Gasto 
                key={gasto.id} 
                gasto={gasto}
                setGastoEditar={setGastoEditar}
            />
        ))}

    </div>
  )
}

export default ListadoGastos
