import { useEffect } from 'react'
import { useState } from 'react'
import { gFetch } from '../../utils/gFetch'
import CardWidget from '../CardWidget/CardWidget'
import './ItemListContainer.css'



const ItemListContainer = (props) => {

 
  const [products, setProducts] = useState([])
  const [pokemons, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';

  useEffect(() => {
    fetch(url)
      .then((respu) => respu.json())
      .then((data) => {
        setLoading(false)
        setResult(data.results)
      })
      .catch((err) => console.log(err));
  }, []);


  
  useEffect(() => {

    gFetch
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
      .finally(() => console.log('Siempre'))

  }, [])

  return loading ? (
    <h2>Cargando...</h2>
  ) : (
    <div>

      <div className='saludo'>
        <h2>{props.greeting}</h2>
      </div>

      < CardWidget/>


      <div className='lista'>

        {products.map(obj => <div key={obj.ID}>
          <div className='fotoLista'>
            <img src={obj.foto} alt={obj.nombre} />
          </div>
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
          

        </div>)}

      </div>


      <div className='lista'>
        {pokemons.map(obje => <div key={obje.id}>
          <div className='lista'>{obje.name}</div>
          <div className='lista'>{obje.url}</div>
        </div>
        )}
      </div>


    </div>
  )
}

export default ItemListContainer