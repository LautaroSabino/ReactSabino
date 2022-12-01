import { createContext, useState } from "react";


export const CartContext = createContext({})

const CartContextProvider = ({children})=>{

    const [cartList, setCartList] = useState([])
    const agregarAlCarrito = (newProductCart)=>{
        setCartList([...cartList, newProductCart])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito
        }}>

            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider