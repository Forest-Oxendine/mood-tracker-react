import React from 'react';
import styled from 'styled-components';

const Emotions = (props) => {
    return (
        <>
        <MessageQuestion>{props.PullQuestion}</MessageQuestion>
        <MessageQuestion1>{props.PresentSolution}</MessageQuestion1>
        <MessageQuestion2>{props.FeelingQuestion}</MessageQuestion2>
        <ClickButtonMessage>{props.ClickButtonMsg}</ClickButtonMessage>
        </>
    );
}

export default Emotions;

const MessageQuestion = styled.header`
 color: #ff737e;
 text-align: center; 
`
const MessageQuestion1 = styled.h1`
color: #7826ff;
text-align: center; 
`
const MessageQuestion2 = styled.h2`
color: #B2BEB5;
text-align: center; 
`
const ClickButtonMessage = styled.p`
text-align: center;
color: green;
`