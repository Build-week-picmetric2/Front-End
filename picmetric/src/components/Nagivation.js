import React from 'react';

import {StyledNav, StyledImg, NavDiv, NavItems, H1, NavLinks} from '../components/Styles';



const Navigation = () => {

    const Logo = require('../assets/logoPngW.png');

    return (
        <StyledNav>
            <NavDiv className = 'nav-container'>
                <StyledImg src = {Logo} alt = 'PicMetric 2 Logo' />
                    <H1>PICMETRIC 2</H1>
                <NavItems>
                    <NavLinks href = '/'>Home</NavLinks>
                    <NavLinks href = '/dashboard'>Dashboard</NavLinks>
                </NavItems>
            </NavDiv>
        </StyledNav>
    )
}

export default Navigation;