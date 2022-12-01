import { useCartContext } from "../../context/cartContext";
import Contador from "../Contador/Contador"
import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";


const ItemDetail = ({product}) => {

  const {cartList, agregarAlCarrito} = useCartContext()

  const onAdd = (cantidad)=>{
    console.log(cantidad);
    agregarAlCarrito({product, cantidad})
  }

  console.log(cartList);
 
  return (
    <div className="row">
      <div className="col">
        <img src={product.Foto} className='w-50' />
        <p>Categoria: {product.Categoria}</p>
        <p>Precio: {product.Precio}</p>
        <p>Stock: {product.Stock}</p>
      </div>
      <div className="col">
        <Contador stock={10} initial={1} onAdd={onAdd} />
      </div>
      <Intercambiabilidad/>
    </div>
  )
}

export default ItemDetail