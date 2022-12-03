import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../../context/cartContext'
import CardWidget from '../CardWidget/CardWidget'


function Navbar() {

    const { cantidadTotal } = useCartContext()

    return (
        <NavContainer>

            <div className='deco'> </div>

            <div className="link">
                <Link to='/'>Home</Link>
                <Link to='/categoria/Lona simple'>Toldos Simples</Link>
                <Link to='/categoria/Lona reforzada'>Toldos Reforzados</Link>
                <CardWidget />
                <p>Cantidad total: {cantidadTotal()} </p>
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
        margin-right: 1rem;
        text-decoration: none;
        color: #333;
        font-size: 2rem;
        margin: 2rem;
    }


`

