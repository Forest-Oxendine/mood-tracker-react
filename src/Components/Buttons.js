import React from 'react';
import styled from 'styled-components';


const Buttons = (props) => {
    // Text inside parenthases with props
    // ,{setRating, isSelected}
    return (
       
        <>
        
        <MoodButton>{props.Emotion}</MoodButton>
        {/* This was inside the MoodButton div */}
        {/* className={isSelected ? 'selected' : null} onClick={setRating}> */}
       
        </>
       
        );
}

export default Buttons;


const MoodButton = styled.button`
background-color: #76eec6;
font-family: 'Delicious Handrawn', cursive;
font-size: 40px;
`
