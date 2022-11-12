import { useState } from "react"


const Contador = ({ initial = 1, stock = 100, onAdd }) => {

  const [cantidad, setCantidad] = useState(initial)

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const addCarrito = () => {
    onAdd(cantidad)
  }


  return (
    <div className='border border-primary border-2 container w-55'>

      <button className='btn btn-outline-secondary' onClick={restar}>-</button>
      <label>{cantidad}</label>
      <button className='btn btn-outline-secondary' onClick={sumar}>+</button> <br />
      <button className='btn btn-primary' onClick={addCarrito}>Agregar al carrito</button>


    </div>)
}

export default Contador