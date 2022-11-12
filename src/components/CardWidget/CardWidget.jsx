import carrito from '../../../public/assets/carrito.png'
import { Link } from 'react-router-dom'

const CardWidget = () => {

    return (
    <Link to='/cart'><img src={carrito} alt="" /></Link>
    )
}

export default CardWidget