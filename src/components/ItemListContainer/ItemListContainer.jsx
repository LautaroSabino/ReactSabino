import { useState } from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

  const [contador, saveContador] = useState(0)

  const sumar = () => {
    saveContador(contador + 1)
  }


  return (<div>

    <div className='saludo'>
      <h2>{props.greeting}</h2>
    </div>

    <div>
      {contador}
    </div>

    <div className='btn boton'>
      <button onClick={sumar}>Sumar</button>
    </div>
  </div>
  )
}

export default ItemListContainer