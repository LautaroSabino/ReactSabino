import { useCartContext } from "../../context/cartContext"

const Cart = () => {

  const { cartList, borrarCarrito, eliminarPorItem } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((product) => <li key={product.product.id} className='w-50'>
          <img src={product.product.Foto} alt="" />
          <p> Cantidad: {product.cantidad}</p>
          <p> Nombre: {product.product.Nombre}</p>
          <p> Precio: {product.product.Precio}</p>
          <button onClick={ ( )=> eliminarPorItem(product.product.id) }>ELIMINAR</button>
        </li>
        )}
      </ul>
      
      <button onClick={borrarCarrito} className="btn btn-outline-danger"> Vaciar el Carrito</button>
    </div>
  )
}

export default Cart