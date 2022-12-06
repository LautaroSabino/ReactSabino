import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/cartContext"


const CartForm = () => {

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        telefono: ''
    })

    const { cartList, borrarCarrito, precioTotal } = useCartContext()

    const generarOrden = (evt) => {
        evt.preventDefault()
        let orden = {}
        orden.buyer = dataForm
        orden.total = precioTotal()
        orden.items = cartList.map(product => ({ id: product.id, name: product.Nombre, price: product.Precio }))

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, orden)
            .then(resp => {
                alert(`Tu compra ha sido realizada con éxito, puedes seguirla con el siguiente ID: ${resp.id}`)
            })
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
            <form onSubmit={generarOrden}>

                <input type="text" name="name" value={dataForm.name} onChange={handleOnChange} placeholder="Ingrese su nombre" />
                <input type="text" name="telefono" value={dataForm.telefono} onChange={handleOnChange} placeholder="Ingrese su telefono" />
                <input type="text" name="email" value={dataForm.email} onChange={handleOnChange} placeholder="Ingrese su email" />

                <button onClick={generarOrden} className="btn btn-outline-success"> COMPRAR</button>
            </form>
        </div>
    )
}

export default CartForm