import { useState } from "react"
import { Link } from "react-router-dom"


const InputCount = () => {
    return (
        <>
            <Link to='/cart'>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => console.log('Ir a Cart')}>
                    Ir a cart o terminar compra</button>
            </Link>
            <Link to='/'>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => console.log('Ir a Home')}>
                    Seguir comprando</button>
            </Link>
        </>
    )
}

const ButtonCount= ({handleInter})=>{
    return <button
                className="btn btn-outline-success"
                onClick={handleInter}
    >Agregar al carrito</button>
}

const Intercambiabilidad = () => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    return (
        <div>
            <h2>Item Description</h2>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />
                :
                    <InputCount/>
            }
            {/* <Count onConfirm={addToCart} maxQual<ntity={itemMax} */}
        </div>
    )

}

export default Intercambiabilidad