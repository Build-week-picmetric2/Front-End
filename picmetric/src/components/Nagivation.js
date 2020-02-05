import React from 'react';
import styled from 'styled-components';
import {StyledNav, StyledImg, NavDiv, NavItems, H1} from '../components/Styles';



const Navigation = () => {

    const Logo = require('../assets/logoPngW.png');

    return (
        <StyledNav>
            <NavDiv className = 'nav-container'>
                <StyledImg src = {Logo} alt = 'PicMetric 2 Logo' />
                    <H1>PICMETRIC 2</H1>
                <NavItems>
                    <a>Login</a>
                    <a>Sign Up</a>
                </NavItems>
            </NavDiv>
        </StyledNav>
    )
}

export default Navigation;