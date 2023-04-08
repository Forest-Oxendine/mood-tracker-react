import './App.css';
import FeelingsQuest from './Components/FeelingsQuest';
import Buttons from './Components/Buttons'; 
import React from 'react';
import EmotionList from './Components/EmotionList';
import InputMessage from './Components/InputMessage';

function App(props) {
  return (
    <>
      <FeelingsQuest PullQuestion="Have you been thinking of ways to improve your mental health?"/>
      {/* <div className="image-container"> */}
      <img src="/images/MentalHealth.jpg" alt="Mental Helath Matters Text" />
      {/* </div> */}
      <FeelingsQuest PresentSolution="Take Advantage Of The Mood Tracker To Get A Visual Of Your Emotional Health!"/>
      <FeelingsQuest FeelingQuestion="Get started by selecting the emotion below that aligns with how you are feeling today"/>
    {/* Clickable buttons of emotions  */}
    <Buttons Emotion= "Happy"/>
    <Buttons Emotion="Content"/>
    <Buttons Emotion="Sad"/>
    <Buttons Emotion="Excited"/>
    <Buttons Emotion="Tired"/>
    <Buttons Emotion="Hopeful"/>
    <Buttons Emotion="Determined"/>
    <Buttons Emotion="Loving"/>
       {/* Past entires text and button */}
      <FeelingsQuest ClickButtonMsg="Click To See Your History"/>
    <Buttons Emotion="Past Entries"/>
    {/* List of emotions with images and input fileds */}
    <EmotionList/><InputMessage/>
    </>
  );
}

export default App;


