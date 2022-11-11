import { useEffect } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import './ItemListContainer.css'



const ItemListContainer = (props) => {

  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [pokemons, setResult] = useState([]);
  const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';

  useEffect(() => {
    fetch(url)
      .then((respu) => respu.json())
      .then((data) => {
        setLoading(false);
        setResult(data);
      })
      .catch((err) => console.log(err));
  }, []);


  const sumar = () => {
    setCount(count + 1)
  }

  useEffect(() => {

    gFetch
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
      .finally(() => console.log('Siempre'))

  }, [])

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


    <div>
      {pokemons.map((obje) => (
        <div key={obje.id}>
          <div>{obje.name}</div>
          <div>{obje.url}</div>
        </div>
      ))}
    </div>


  </div>
  )
}

export default ItemListContainer