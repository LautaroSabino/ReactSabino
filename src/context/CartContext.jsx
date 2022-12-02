import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const agregarAlCarrito = (newProductCart) => {
        setCartList( [...cartList, newProductCart] )
    }

    const borrarCarrito = () => {
        setCartList([])
    }

    // const precioTotal = ()=>{
    //     return cartList.reduce((sumPrecio, producto)=> sumPrecio += (producto.cantidad * producto.Precio), 0)
    // }

    const eliminarPorItem = (id)=>{
        setCartList( cartList.filter(producto => producto.id =! id))
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