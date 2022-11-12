import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

 
  const [products, setProducts] = useState([])
  const {categoriaID} = useParams()

  
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

  return  (
    <div>

      <div className='saludo'>
        <h2>{props.greeting}</h2>
      </div>

      <ItemList products={products} />

    </div>
  )
}

export default ItemListContainer