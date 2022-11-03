import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.css'



const talk = new Promise((resolve, reject)=>{

  let arrayList = [{ID: '1', nombre: 'Toldo plano', descripción: 'Toldo plano de lona reforzada', stock: 10}, {ID: '2', nombre: 'Toldo curvo', descripción: 'Toldo curvo de lona reforzada', stock: 8}, {ID: '3', nombre: 'Toldo plano frágil', descripción: 'Toldo plano de lona sencilla', stock: 4}, {ID: '4', nombre: 'Toldo roler', descripción: 'Toldo roler de tela blackout', stock: 20}]
  resolve(arrayList)

})



const ItemListContainer = (props) => {

  talk
    .then(resp => console.log(resp))
    .catch( err => console.log(err))

  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)

  const sumar = () => {
    setCount(count + 1)
  }

  const cambiarEstado = () =>{
    setBool(!bool)
  }

  useEffect(()=>{
    
    // console.log('Se ejecuta siempre por cada render - 1')
    
  })

  useEffect(()=>{
    
    // console.log('Esto es una tarea pesada, llamada a API- 2')

  }, [])

  useEffect(()=>{
    
    // console.log('Esto es un cambio de estado- 4')
    // console.log(bool)

  }, [bool])

  // console.log('Esta es otra tarea - 4')


  

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