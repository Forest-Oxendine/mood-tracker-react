import React from 'react';
import styled from 'styled-components';

const Buttons = (props) => {
    return (
        <>
        <CenterDiv>
        <HappyButton>{props.Emotion1}</HappyButton>
        <ContentButton>{props.Emotion2}</ContentButton>
        <SadButton>{props.Emotion3}</SadButton>
        <ExcitedButton>{props.Emotion4}</ExcitedButton>
        <TiredButton>{props.Emotion5}</TiredButton>
        <HopefulButton>{props.Emotion6}</HopefulButton>
        <DeterminedButton>{props.Emotion7}</DeterminedButton>
        <LovingButton>{props.Emotion8}</LovingButton>
         </CenterDiv>
         <PreSubsButton>{props.ClickButtonMessage}</PreSubsButton>
        </>
    );

}
export default Buttons;

const CenterDiv = styled.div`
align-text: center;
border-style: dotted;
margin: 15px;
background-color: aquamarine;
;
`

const HappyButton = styled.button`
background-color: #ffff00;
`
const ContentButton = styled.button`
background-color: #05c4bc;
`
const SadButton = styled.button`
background-color: #5c86a7;
`
const ExcitedButton = styled.button`
background-color: #ff9e56;
`
const TiredButton = styled.button`
background-color: #bfafb2;
`
const HopefulButton = styled.button`
background-color: #8141ff;
`
const DeterminedButton = styled.button`
background-color: #eaf76b;
`
const LovingButton = styled.button`
background-color: #ff737e;
`
const PreSubsButton = styled.button`
background-color: #ff9e56;
`