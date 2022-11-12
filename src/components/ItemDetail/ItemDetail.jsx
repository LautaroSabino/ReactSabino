import { useEffect } from "react"
import { useParams } from "react-router-dom"


const ItemDetail = () => {

  const {productID} = useParams()

  useEffect(()=>{

  }, [])


  console.log(productID)
  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail