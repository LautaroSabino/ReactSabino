import { Link } from 'react-router-dom'
import carrito from '/assets/carrito.png'


const CardWidget = () => {

    return (

        <div>

            <Link to='/cart'><img src={carrito} alt="" /></Link>

        </div>



    )
}

export default CardWidget