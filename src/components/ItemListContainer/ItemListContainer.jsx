import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import CardWidget from '../CardWidget/CardWidget'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'



const ItemListContainer = (props) => {

 
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const {categoriaID} = useParams()

  

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';
    fetch(url)
      .then((respu) => respu.json())
      .then((data) => {
        setLoading(false)
        setResult(data.results)
      })
      .catch((err) => console.log(err));
  }, []);


  
  useEffect(() => {
    if (categoriaID) {
      gFetch
      .then(resp => setProducts(resp.filter(prod => prod.categoria === categoriaID)))
      .catch(err => console.log(err))
      .finally(() => console.log('Siempre'))
      
    } else (

      gFetch
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => console.log('Siempre'))
    )


  }, [categoriaID])

  return loading ? (
    <h2>Cargando...</h2>
  ) : (
    <div>

      <div className='saludo'>
        <h2>{props.greeting}</h2>
      </div>

      < CardWidget/>


      <ItemList products={products} />

    </div>
  )
}

export default ItemListContainer