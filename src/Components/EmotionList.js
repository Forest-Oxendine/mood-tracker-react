import React from 'react';
import styled from 'styled-components';
// import the albums data
import emotionQuest from '../emotion-data.js';

//import components
import EmotionCard from './EmotionCard.js';

function EmotionList() {
  return (
    <>
     {emotionQuest.map(entry =>
      <EmotionCard 
      {...entry}
      key={entry.id}
      />
      )}
    </>
  );
}

export default EmotionList;