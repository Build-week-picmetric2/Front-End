import React from 'react';
import styled from 'styled-components';



const NavDiv = styled.nav`
            width: 100%;
            height: 10vh;
            background-color: black;
            color: white;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            

        `
const NavItems = styled.a`

    width: 33%;
    display: flex;
    justify-content: space-around;
`
const H1 = styled.h1`
    margin-right: 11%;
`

const Navigation = () => {
    return (
        <NavDiv>
        <img src = '../assets/logoPngW.png' alt = 'PicMetric 2 Logo'/>
            <H1>PICMETRIC 2</H1>
            <NavItems>
                <a>Login</a>
                <a>Sign Up</a>
            </NavItems>
        </NavDiv>
    )
}

export default Navigation;