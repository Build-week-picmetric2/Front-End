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


const Navigation = () => {
    return (
        <NavDiv>
            <NavItems>
                <a>Login</a>
                <a>Sign Up</a>
            </NavItems>
        </NavDiv>
    )
}

export default Navigation;