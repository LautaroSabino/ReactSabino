import React from 'react'
import styled from 'styled-components'
import logo from '../assets/img/logo.jpg'
import carrito from '../assets/img/carrito.png'


function Navbar() {
    return (
        <NavContainer>

            <div>
                <img src={logo} alt="" />
            </div>


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
        margin-right: 1rem;
        text-decoration: none;
        color: #333;
        font-size: 2rem;
        margin: 1rem;
    }


`

