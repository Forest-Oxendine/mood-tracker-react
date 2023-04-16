import React from "react";
import styled from "styled-components";

function Header (){
    return(
        <>
        <HeaderDiv>
            <HeaderText>Mood Tracker</HeaderText>
        </HeaderDiv>
        </>
    );
}

export default Header;

const HeaderDiv = styled.div`
    padding: 60px;
    background: #ebebfc;
`
const HeaderText = styled.h1`
text-align: center;
font-family: 'Delicious Handrawn', cursive;
background: pink;
`
