import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch2 } from "../../utils/gFetch"


const ItemDetailContainer = () => {

  const {productID} = useParams()
  const [product, setProduct] = useState({})

  useEffect(()=>{
    gFetch2(productID)
    .then(resp => setProduct(resp))
    .catch(err => console.log(err))
    .finally(() => console.log('Siempre'))
    
  }, [])


  console.log(product)


  return (
    <div>
        < ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer