import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import CartForm from "../CartForm/CartForm"
import './Cart.css'

const Cart = () => {


  const { cartList, borrarCarrito, precioTotal, eliminarPorItem } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      {cartList.length !== 0 ? <>

        <ul>

          {cartList.map((product) => <li key={product.id} className='w-50'>
            <img src={product.Foto} alt="" />
            <p> Cantidad: {product.cantidad}</p>
            <p> Nombre: {product.Nombre}</p>
            <p> Precio: {product.Precio}</p>
            <button onClick={() => eliminarPorItem(product.id)}>ELIMINAR</button>
          </li>
          )}
        </ul>
        <label htmlFor="">Precio total de la compra : </label>
        <label htmlFor=""> {precioTotal()} </label>
        <button onClick={borrarCarrito} className="btn btn-outline-danger"> Vaciar el Carrito</button>

        <CartForm />

      </>

        :

        <h2>No hay productos <Link to='/'>Ir a comprar</Link> </h2>


      }


    </div>
  )
}

export default Cart