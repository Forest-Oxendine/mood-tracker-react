import React from 'react';
import styled from 'styled-components';

const Emotions = (props) => {
    return (
        <>
        <MessageQuestion>{props.PullQuestion}</MessageQuestion>
        <MessageQuestion1>{props.PresentSolution}</MessageQuestion1>
        <MessageQuestion2>{props.FeelingQuestion}</MessageQuestion2>
        {/* <ClickButtonMessage>{props.ClickButtonMsg}</ClickButtonMessage> */}
        </>
    );
}

export default Emotions;

const MessageQuestion = styled.header`
 color: #ff737e;
 text-align: center;
 font-family: 'Delicious Handrawn', cursive;
 font-size: 48px;
 font-weight: 100; 
`
const MessageQuestion1 = styled.h1`
color: #7826ff;
text-align: center;
font-family: 'Delicious Handrawn', cursive; 
font-size: 40px;
`
const MessageQuestion2 = styled.h2`
color: #1b1c22;
text-align: center;
font-family: 'Delicious Handrawn', cursive;
font-size: 60px; 
`
// const ClickButtonMessage = styled.p`
// text-align: center;
// color: #7826ff;
// font-family: 'Delicious Handrawn', cursive;
// font-size: 30px;
// `