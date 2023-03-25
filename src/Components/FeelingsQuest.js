import React from 'react';
import styled from 'styled-components';

const Emotions = (props) => {
    return (
        <>
        <MessageQuestion>{props.PullQuestion}</MessageQuestion>
        <MessageQuestion1>{props.PresentSolution}</MessageQuestion1>
        <MessageQuestion2>{props.FeelingQuestion}</MessageQuestion2>
        </>
    );
}

export default Emotions;

const MessageQuestion = styled.header`
 font-color: #ff737e;
 text-align: center; 
`
const MessageQuestion1 = styled.h1`
font-color: #7826ff;
text-align: center; 
`
const MessageQuestion2 = styled.h2`
font-color: #B2BEB5;
text-align: center; 
`