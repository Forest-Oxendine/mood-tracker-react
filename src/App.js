import './App.css';
import FeelingsQuest from './Components/FeelingsQuest';
import Buttons from './Components/Buttons'; 
// import ButtonDiv from './Components/ButtonDiv';


function App(props) {
  return (
    <>
      <FeelingsQuest PullQuestion="Have you been thinking of ways to improve your mental health?"/>
      <FeelingsQuest PresentSolution="Take Advantage Of The Mood Tracker To Get A Visual Of Your Emotional Health!"/>
      <FeelingsQuest FeelingQuestion="Get started by selecting the emotion below that aligns with how you are feeling today"/>
    {/* <ButtonDiv> */}
    <Buttons Emotion= "Happy"/>
    <Buttons Emotion="Content"/>
    <Buttons Emotion="Sad"/>
    <Buttons Emotion="Excited"/>
    <Buttons Emotion="Tired"/>
    <Buttons Emotion="Hopeful"/>
    <Buttons Emotion="Determined"/>
    <Buttons Emotion="Loving"/>
    {/* </ButtonDiv> */}
      <FeelingsQuest ClickButtonMsg="Click To See Your History"/>
    <Buttons Emotion="Past Entries"/>
    </>
  );
}

export default App;


