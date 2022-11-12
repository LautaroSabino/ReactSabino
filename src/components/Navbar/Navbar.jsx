import { Link } from 'react-router-dom'
import styled from 'styled-components'
import carrito from '../../../public/assets/carrito.png'


function Navbar() {
    return (
        <NavContainer>

            <div className='deco'> </div>

            <div className="link">
                <Link to='/'>Home</Link>
                <Link to='/productos'>Productos</Link>
                <Link to='/toldosimple'>Toldos Simples</Link>
                <Link to='/toldoreforzado'>Toldos Reforzados</Link>
                <Link to='/contacto'>Contacto</Link>
                <Link to='/cart'><img src={carrito} alt="" /></Link>
            </div>

        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.nav`
    .deco{
        color: white;
        font-weight: 800; 
        padding: .4rem;
        background-color: #333;
    }

    a{
        margin-right: 3rem;
        text-decoration: none;
        color: #333;
        font-size: 2rem;
        margin: 1rem;
    }


`

