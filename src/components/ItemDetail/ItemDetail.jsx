import Contador from "../Contador/Contador"

const ItemDetail = ({product}) => {

  const onAdd = (cantidad)=>{
    console.log(cantidad);
  }
 
  return (
    <div className="row">
      <div className="col">
        <img src={product.foto} className='w-50' />
        <p>Categoria: {product.categoria}</p>
        <p>Precio: {product.precio}</p>
        <p>Stock: {product.stock}</p>
      </div>
      <div className="col">
        <Contador stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail