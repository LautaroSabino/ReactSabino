import React from 'react'
import BurguerMenu from './BurguerMenu'
import styled from 'styled-components'

function Navbar() {
    return (<>
        <NavContainer>
            <h2> NAVBAR <span>RESPONSIVE</span></h2>
            <div>
                <a href="/"> Home </a>
                <a href="/"> ¿Quienes somos? </a>
                <a href="/"> Nuestros productos </a>
                <a href="/"> Contactos </a>

            </div>

            <div className="burguer">
                <BurguerMenu />
            </div>
        </NavContainer>
    </>
    )
}

export default Navbar

const NavContainer = styled.nav`
    h2{
        color: whote;
        font-weight: 800; 
        span{
            font-weight: bold;
        }
        padding: .4rem;
        background-color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    a{
        margin-right: 1rem;
        text-decoration: none;
        color: white;
    }

    .burguer{
        @media (min-width: 768px){
            display: none;
        }
    }


`

