import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.findIndex(producto => producto.id === id)

    const agregarAlCarrito = (newProductCart) => {

        let index = isInCart(newProductCart.id)

        if (index === -1) {
            setCartList( [...cartList, newProductCart] )

        } else {
            cartList[index].cantidad += newProductCart.cantidad
            setCartList( [...cartList] )
        }
    }

    const borrarCarrito = () => {
        setCartList([])
    }

    // const precioTotal = ()=>{
    //     return cartList.reduce((sumPrecio, producto)=> sumPrecio += (producto.cantidad * producto.Precio), 0)
    // }

    const eliminarPorItem = (id) => {
        setCartList(cartList.filter(producto => producto.id !== id))
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            eliminarPorItem


        }}>

            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider