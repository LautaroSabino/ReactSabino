import { useEffect } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { categoriaID } = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'Items')

    if (categoriaID) {
      const queryCollection = collection(dbFirestore, 'Items')
      let queryFilter = query(queryCollection, where('Categoria', '==', categoriaID))
      getDocs(queryFilter)
      .then((resp)=> setProducts(resp.docs.map(doc=> ({id: doc.id, ...doc.data()}) )))
      .catch(err => console.log(err))

    } else (

      getDocs(queryCollection)
        .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
        .catch(err => console.log(err))
        .finally(() => console.log('Siempre'))
        
    )

  }, [categoriaID])



  return (
    <div>

      <ItemList products={products} />

    </div>
  )
}

export default ItemListContainer