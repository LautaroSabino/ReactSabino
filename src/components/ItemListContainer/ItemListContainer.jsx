import { useEffect } from 'react'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

  const [producto, setProducto] = useState({})
  const [products, setProducts] = useState([])
  const {categoriaID} = useParams()

// TRAER UN SOLO OBJETO. 
// useEffect(()=> {
//     const dbFirestore = getFirestore()
//     const queryCollection = doc(dbFirestore, 'Items', '52Ch9ggVEkHdSVNV7Fy2')
//     getDoc(queryCollection)
//     .then((doc)=> setProducto({id: doc.id, ... doc.data()}))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Siempre'))
// },[]) 

// TRAER VARIOS OBJETOS

useEffect(()=> {
  const dbFirestore = getFirestore()
  const queryCollection = doc(dbFirestore, 'Items', '52Ch9ggVEkHdSVNV7Fy2')
  getDoc(queryCollection)
  .then((doc)=> setProducto({id: doc.id, ... doc.data()}))
  .catch(err => console.log(err))
  .finally(() => console.log('Siempre'))
},[]) 



  
  // useEffect(() => {
  //   if (categoriaID) {
  //     gFetch
  //     .then(resp => setProducts(resp.filter(prod => prod.categoria === categoriaID)))
  //     .catch(err => console.log(err))
  //     .finally(() => console.log('Siempre'))
      
  //   } else (

  //     gFetch
  //       .then(resp => setProducts(resp))
  //       .catch(err => console.log(err))
  //       .finally(() => console.log('Siempre'))
  //   )


  // }, [categoriaID])

  console.log(producto)

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