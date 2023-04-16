import React from 'react';
import styled from 'styled-components';
import InputMessage from './InputMessage.js';
import FeelingsQuest from './FeelingsQuest.js';

const MoodQuestionsPage = () => {
    return (
        <>
       <StyledDiv>
        <FeelingsQuest PullQuestion="Have you been thinking of ways to improve your mental health?"/>
          <img src="/images/MentalHealth.jpg" alt="Mental Helath Matters Text" />
        <FeelingsQuest PresentSolution="Take Advantage Of The Mood Tracker To Get A Visual Of Your Emotional Health!"/>
        <FeelingsQuest FeelingQuestion="Get started by selecting the emotion below that aligns with how you are feeling today"/>
        <InputMessage/>
       </StyledDiv>
        </>
    );
}

export default MoodQuestionsPage;


const StyledDiv = styled.div`
text-align: center;
margin: auto;
padding:  30px 20px 40px 20px;
`
