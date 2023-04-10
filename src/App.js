import './App.css';
import FeelingsQuest from './Components/FeelingsQuest';
import Buttons from './Components/Buttons'; 
import React from 'react';
import EmotionList from './Components/EmotionList';
import InputMessage from './Components/InputMessage';
import styled from 'styled-components';

function App(props) {
  return (
    <>
      <FeelingsQuest PullQuestion="Have you been thinking of ways to improve your mental health?"/>
      <StyledDiv>
       <img src="/images/MentalHealth.jpg" alt="Mental Helath Matters Text" />
      </StyledDiv>
      <FeelingsQuest PresentSolution="Take Advantage Of The Mood Tracker To Get A Visual Of Your Emotional Health!"/>
      <FeelingsQuest FeelingQuestion="Get started by selecting the emotion below that aligns with how you are feeling today"/>
    {/* Clickable buttons of emotions  */}
    <StyledDiv>
     <Buttons Emotion= "Happy"/>
     <Buttons Emotion="Content"/>
     <Buttons Emotion="Sad"/>
     <Buttons Emotion="Excited"/>
     <Buttons Emotion="Tired"/>
     <Buttons Emotion="Hopeful"/>
     <Buttons Emotion="Determined"/>
     <Buttons Emotion="Loving"/>
    </StyledDiv>
    {/* User inputs their information */}
    <InputMessage/>
      {/* <FeelingsQuest ClickButtonMsg="Click To See Your History"/> */}
    <StyledDiv>
    <StyledDiv>
       <img src="/images/Happy.jpg" alt="30 Year Old Smiling" />
      </StyledDiv>
     <Buttons Emotion="Past Entries"/>
    </StyledDiv>
    {/* List of emotions with images and input fileds */}
    {/* <EmotionList/> */}
    </>
  );
}

export default App;

const StyledDiv = styled.div`
text-align: center;
margin: auto;
padding:  30px 20px 40px 20px;
`
const StyleDiv = styled.div`
text-align: center;
margin: auto;
padding:  30px 20px 40px 20px;
`

