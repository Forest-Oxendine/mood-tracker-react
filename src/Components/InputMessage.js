import React, {useState} from 'react';
import styled from 'styled-components';


function InputMessage (){
    const [name, setName]=useState("");
    const [submittedEmotion, setSubmittedEmotion]= useState("");
    const [date, setDate]=useState("");

    const handleInputDateChange = (event)=>{
        setDate(event.target.value);
        console.log(event.target.value);
    }
    const handleInputNameChange = (event) =>{
        setName(event.target.value);
        console.log(event.target.value); 
    } 
    const handleInputEmotionChange = (event)=>{
        setSubmittedEmotion(event.target.value);
        console.log(event.target.value);
    }
    const handleSubmit = ()=>{
        setSubmittedEmotion(submittedEmotion);
        console.log(date, name, "is feeling", submittedEmotion);
        // Clears what the user enter in the text box
        setDate('');
        setName('');
        setSubmittedEmotion('');
    }
    // This returns the users input on the dom
    return(
        <StyledDiv>
       <p>Enter today's date</p>
         <input 
        type="text" 
        value={date} 
        onChange={handleInputDateChange}
         />
       <p>Enter your name</p>
         <input 
        type="text" 
        value={name} 
        onChange={handleInputNameChange}
         />
      <p>How are you feeling today?</p>
         <input 
        type="text" 
        value={submittedEmotion} 
        onChange={handleInputEmotionChange}
         />
       <h3>You {name}, have submitted on {date} you are feeling {submittedEmotion}</h3>
   
         {/* Handles what happens when the button is clicked */}
        <button onClick={handleSubmit}>Submit Emotion</button>
        
        </StyledDiv>
    )
}
export default InputMessage;

const StyledDiv = styled.div`
  text-align: center;
  margin: auto;
  padding:  60px 20px 40px 20px;
`








































