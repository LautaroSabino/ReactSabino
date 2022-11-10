import { useEffect } from 'react'
import { useState } from 'react'
import { gFetch } from '../../utils/gFetch'
import './ItemListContainer.css'



const ItemListContainer = (props) => {

  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)
  const [products, setProducts] = useState([])

  const sumar = () => {
    setCount(count + 1)
  }

  const cambiarEstado = () => {
    setBool(!bool)
  }


  useEffect(() => {

    gFetch
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
      .finally(() => console.log('Siempre'))

  }, [])

  console.log(products);


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

    <div className='lista'>

      {products.map(obj => <div key={obj.ID}>
        <div className='lista'>
          {obj.nombre}
        </div>
        <div className='lista'>
          {obj.descripción}
        </div>
        <div className='lista'>
          {obj.stock}
        </div>
        <div className='lista'>
          {obj.precio}
        </div>
        <div className='fotoLista'>
          <img src={obj.foto} alt="" />
        </div>

      </div>)}

    </div>

  </div>
  )
}

export default ItemListContainer