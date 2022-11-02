import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)

  const sumar = () => {
    setCount(count + 1)
  }

  const cambiarEstado = () =>{
    setBool(!bool)
  }

  useEffect(()=>{
    
    console.log('Se ejecuta siempre por cada render - 1')
    
  })

  useEffect(()=>{
    
    console.log('Esto es una tarea pesada, llamada a API- 2')

  }, [])

  useEffect(()=>{
    
    console.log('Esto es un cambio de estado- 4')
    console.log(bool)

  }, [bool])

  console.log('Esta es otra tarea - 4')
  

  return (<div>

    <div className='saludo'>
      <h2>{props.greeting}</h2>
    </div>

    <div>
      {count}
    </div>

    <div className='btn boton'>
      <button onClick={sumar}> + </button>
    </div>

    <div className='btn boton'>
      <button onClick={cambiarEstado}> Cambiar estado </button>
    </div>
  </div>
  )
}

export default ItemListContainer