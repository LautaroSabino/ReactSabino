import { useCartContext } from "../../context/cartContext"
import './Cart.css'

const Cart = () => {

  const { cartList, borrarCarrito, precioTotal, eliminarPorItem } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((product) => <li key={product.id} className='w-50'>
          <img src={product.Foto} alt="" />
          <p> Cantidad: {product.cantidad}</p>
          <p> Nombre: {product.Nombre}</p>
          <p> Precio: {product.Precio}</p>
          <button onClick={ ( )=> eliminarPorItem(product.id) }>ELIMINAR</button>
        </li>
        )}
      </ul>
      <label htmlFor=""> {precioTotal() } </label>
      <button onClick={borrarCarrito} className="btn btn-outline-danger"> Vaciar el Carrito</button>
      <button  className="btn btn-outline-success"> COMPRAR</button>
    </div>
  )
}

export default Cart