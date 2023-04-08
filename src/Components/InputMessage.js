import React, {useState} from 'react';

function InputMessage (){
    const [message, setMessage]=useState('');
    const [submittedEmotion, setSubmittedEmotion]= useState('');

    const handleInputChange = (event) =>{
        setMessage(event.target.value);
        console.log(event.target.value);
        
    }

    const handleSubmit = ()=>{
        setSubmittedEmotion(message);
        console.log('message submitted');
        // Clears what the user enter in the text box
        setMessage('');
    }
    // This returns the users input on the dom
    return(
        <>
        <p>You have Submitted, today you are feeling {submittedEmotion}</p>
        {/* Must use input tag for a user to input a message */}
        <input 
        type="text" 
        value={message} 
        onChange={handleInputChange}
         />
         {/* Handles what happens when the button is clicked */}
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default InputMessage;







































// import React, {useState} from 'react';
// import Buttons from './Buttons';



// const EmotionRating = () => {

//     const [emoRating, setRating] = useState(0);

//     const renderEmotions = () => {
//             let emo = [];
//             const maxRating = 1;
//             for (let i=0; i < maxRating; i++) {
//             emo.push(
//                 <Buttons
//                 isSelectd={emoRating > i}
//                 setRating={() => handleSetRating(i+1)}
//                 key={i}
//                 />
//             )
//         }
//         return emo;
//     }
// const handleSetRating = (rating) => {
//     setRating(rating);
// }
    

// }

// export default EmotionRating;