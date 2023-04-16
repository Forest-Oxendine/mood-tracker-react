import React from 'react';
import styled from "styled-components";

function NewPage(){
    return(
        <>
            <StyledDiv>
                <img src="/images/sun-rise.jpg" alt="Man smiling" />
            </StyledDiv>    
            <Message>
                Mental Health Matters!
            </Message>
            <Message2>
                Let's Begin Tracking Your Emotional Health!
            </Message2>
        
        </>
    );

}

export default NewPage;

const Message = styled.h1`
padding: 50px;
text-align: center;
background-color: #474e5d;
color: white;
`
const Message2 = styled.h2`
padding: 50px;
text-align: center;
background-color: #474e5d;
color: white;
`
const StyledDiv = styled.div`
text-align: center;
margin: auto;
padding:  30px 20px 40px 20px;
`