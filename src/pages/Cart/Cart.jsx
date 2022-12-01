import { useCartContext } from "../../context/cartContext"

const Cart = () => {

  const { cartList, borrarCarrito } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((product) => <li key={product.id}>
          <img src={product.Foto} className="w-30" />
          Nombre: {product.Nombre} - Precio: {product.Precio}
        </li>
        )}
      </ul>
      <button onClick={borrarCarrito} className="btn btn-outline-danger"> Vaciar el Carrito</button>
    </div>
  )
}

export default Cart