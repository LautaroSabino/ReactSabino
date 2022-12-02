import { useCartContext } from "../../context/cartContext"

const Cart = () => {

  const { cartList, borrarCarrito } = useCartContext()
  console.log(cartList);

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((product) => <li key={product.id} className='w-50'>
          <img src={product.Foto} alt="" />
          {product.cantidad}
        </li>
        )}
      </ul>

      <button onClick={borrarCarrito} className="btn btn-outline-danger"> Vaciar el Carrito</button>
    </div>
  )
}

export default Cart