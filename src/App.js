import './App.css';
import FeelingsQuest from './Components/FeelingsQuest';
import Buttons from './Components/Buttons'; 


function App(props) {
  return (
    <>
      <FeelingsQuest PullQuestion="Have you been thinking of ways to improve your mental health?!"/>
      <FeelingsQuest PresentSolution="Take Advantage Of Our Mood Tracker App To Track Your Emotional Health Daily!"/>
      <FeelingsQuest FeelingQuestion="Get started by selecting the emotion below that alignes with how you are feeling today"/>
  
    <Buttons
    Emotion1= "Happy"
    Emotion2="Content"
    Emotion3="Sad"
    Emotion4="Excited"
    Emotion5="Tired"
    Emotion6="Hopeful"
    Emotion7="Determined"
    Emotion8="Loving"
    />
    </>
  );
}

export default App;


