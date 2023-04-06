import React from 'react';
import styled from 'styled-components';
// import the albums data
import emotionQuest from '../emotion-data.js';

//import components
import ButtonCard from './ButtonCard.js';

function EmotionList() {
  return (
    <>
     {emotionQuest.map(entries =>
      <ButtonCard 
      {...entries}
      key={entries.id}
      />
      )}
    </>
  );
}

export default EmotionList;