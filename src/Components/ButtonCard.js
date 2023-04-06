import React from 'react';
import styled from 'styled-components';


const ButtonCard = ({date, entry, optMsg, img}) => {
  return (
    <StyledDiv>
      <img src={img} alt={entry} />
      <todaysDate>{date}</todaysDate>
      <emotionalState>{entry}</emotionalState>
      <optionalMsg>{optMsg}</optionalMsg>
    </StyledDiv>
  );
}

export default ButtonCard;

const StyledDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 40%;
  text-align: center;
  margin: auto;
  padding:  60px 20px 40px 20px;
  background-color: #ADD8E6;
`;

const todaysDate = styled.p`
background-color: pink;
`
const emotionalState = styled.h3`
background-color: red;
`
const optionalMsg = styled.p`
background-color: green;
`