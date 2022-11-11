import styled from 'styled-components'
import carrito from '../../../public/assets/carrito.png'


function Navbar() {
    return (
        <NavContainer>

            <div className='deco'> </div>

            <div className="link">
                <a href="/"> Home </a>
                <a href="/"> ¿Quienes somos? </a>
                <a href="/"> Nuestros productos </a>
                <a href="/"> Contacto </a>
                <a href="/"> <img src={carrito} alt="" /></a>
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
        margin-right: 2rem;
        text-decoration: none;
        color: #333;
        font-size: 2rem;
        margin: 1rem;
    }


`

