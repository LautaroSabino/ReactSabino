import Contador from "../Contador/Contador"

const ItemDetail = ({product}) => {

 
  return (
    <div className="row">
      <div className="col">
        <img src={product.foto} className='w-50' />
        <p>Categoria: {product.categoria}</p>
        <p>Precio: {product.precio}</p>
        <p>Stock: {product.stock}</p>
      </div>
      <div className="col">
        <Contador/>
      </div>
    </div>
  )
}

export default ItemDetail