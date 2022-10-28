import React from 'react'
import styled from 'styled-components'

function BurguerMenu() {
    return (
        <Burguer>
            <div id="menu">
                <span></span>
            </div>
            <nav id="navigation">
                <ul>
                    <li>Item #1</li>
                    <li>Item #2</li>
                    <li>Item #3</li>
                    <li>Item #4</li>
                </ul>
            </nav>
        </Burguer>
    )
}

export default BurguerMenu

const Burguer = styled.div`
body
        {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: rgb(57, 160, 219);
        }

#menu
{
    background-color: #fff;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    transition: .5s ease-in-out;
}

#menu span
{
    display: block;
    width: 30px;
    height: 5px;
    background-color: rgb(14, 12, 12);
    margin: auto;
    margin-top: 22.5px;
    position: relative;
    transition: .2s linear;
}

#menu span::before,
span::after
{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgb(14, 12, 12);
    position: absolute;
}

#menu span::before
{
    top: -10px;
}

#menu span::after
{
    bottom: -10px;
}

#navigation
{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 5px 8px rgb(182, 174, 174);
    display: none;
}

#navigation ul
{
    width: 50%;
    margin: auto;
}

#navigation ul li
{
    list-style: none;
    padding: 8px;
    color: rgb(57, 160, 219);
    transition: .2s linear;
}

#navigation ul li:hover
{
    cursor: pointer;
    transform: scale(1.1);
    color: black;
}

#menu:hover
{
    transform: scale(1.2);
    box-shadow: 0 0 0 8px #fff, 0 0 0 8px #fff;
}

#menu:hover span
{
    transform: scale(.7);
}

.active
{
    background-color: #fff;
}

.active div #menu span
{
    transform: rotate(180deg);
}

.active div #menu span::before
{
    transform: rotate(45deg);
    top: 0;
}

.active div #menu span::after
{
    top: 0;
    transform: rotate(-45deg);
}

.active div #navigation
{
    display: flex;
}



`