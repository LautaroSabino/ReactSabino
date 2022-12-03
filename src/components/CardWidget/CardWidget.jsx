import carrito from '/assets/carrito.png'
import { Link } from 'react-router-dom'


const CardWidget = () => {

    return (

        <div>

            <Link to='/cart'><img src={carrito} alt="" /></Link>

        </div>



    )
}

export default CardWidget