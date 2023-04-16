import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';


import NewPage from './Components/NewPage';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
// import EmotionCard from './Components/EmotionCard';
import MoodQuestionsPage from './Components/MoodQuestionsPage';
import EmotionList from './Components/EmotionList';


function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Routes>
        <Route path='/' end element={<NewPage/>}/>
        <Route path='/moodquestionspage' element={<MoodQuestionsPage/>}/>
        <Route path='/emotionlist' element={<EmotionList/>}/>
      </Routes>
    </div>
  );
}

export default App;




