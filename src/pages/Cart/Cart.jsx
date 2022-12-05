import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import './Cart.css'

const Cart = () => {


  const { dataForm, setDataForm } = useState({
    name: '',
    email: '',
    telefono: ''
  })
  
  const { cartList, borrarCarrito, precioTotal, eliminarPorItem } = useCartContext()

  const generarOrden = (evt) => {
    evt.preventDefault()
    let orden = {}
    orden.buyer = dataForm
    orden.total = precioTotal()
    orden.items = cartList.map(product => ({ id: product.id, name: product.Nombre, price: product.Precio }))

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
      .then(resp => console.log(resp))
      .finally(() => {
        setDataForm({
          name: '',
          telefono: '',
          email: ''
        })
        borrarCarrito()
      })

  }

  const handleOnChange = (evt) => {
    console.log(evt.target.name);
    console.log(evt.target.value);

    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
  }

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
        <label htmlFor=""> {precioTotal()} </label>
        <button onClick={borrarCarrito} className="btn btn-outline-danger"> Vaciar el Carrito</button>

        <form
          onSubmit={generarOrden}>

          <input type="text" name="name" onChange={handleOnChange} value={dataForm.name}  placeholder="Ingrese nombre" />
          <input type="text" name='email' onChange={handleOnChange} value={dataForm.email}  placeholder="Ingrese email" />
          <input type="text" name='telefono' onChange={handleOnChange} value={dataForm.telefono}  placeholder="Ingrese teléfono" />

        </form>

          <button onClick={generarOrden} className="btn btn-outline-success"> COMPRAR</button>
      </>

        :

        <h2>No hay productos <Link to='/'>Ir a comprar</Link> </h2>


      }


    </div>
  )
}

export default Cart