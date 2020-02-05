import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    background-color: black;
    display: flex;
    align-items: flex-end;

`
const StyledP = styled.p`
    text-align: center;
    color: #fbfbfb;
    font-size: 1.6rem;
    padding: 20px;
    
`
const Footer = () => {

    return (

        <StyledFooter>
            <StyledP>
            &copy; Copyright 2020
            </StyledP>
        </StyledFooter>
    )

}

export default Footer;