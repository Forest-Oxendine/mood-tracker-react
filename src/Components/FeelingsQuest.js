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
 font-family: 'Delicious Handrawn', cursive; 
`
const MessageQuestion1 = styled.h1`
color: #7826ff;
text-align: center;
font-family: 'Delicious Handrawn', cursive; 
`
const MessageQuestion2 = styled.h2`
color: #1b1c22;
text-align: center;
font-family: 'Delicious Handrawn', cursive; 
`
const ClickButtonMessage = styled.p`
text-align: center;
color: #7826ff;
font-family: 'Indie Flower', cursive;
`