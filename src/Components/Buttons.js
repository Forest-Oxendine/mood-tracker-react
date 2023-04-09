import React from 'react';
import styled from 'styled-components';


const Buttons = (props) => {
  
    return (
        <MoodButton>{props.Emotion}</MoodButton>
        );
}

export default Buttons;


const MoodButton = styled.button`
background-color: #76eec6;
font-family: 'Delicious Handrawn', cursive;
font-size: 40px;
`

