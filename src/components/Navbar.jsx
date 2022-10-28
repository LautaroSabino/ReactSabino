import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (<>
        <NavContainer>
            <h2> NAVBAR <span>RESPONSIVE</span></h2>
            <div>
                <a href= "/"> Home </a>
                <a href= "/"> Home </a>
                <a href= "/"> Home </a>
                <a href= "/"> Home </a>

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

`

