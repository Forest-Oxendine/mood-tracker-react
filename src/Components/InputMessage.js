import React, {useState} from 'react';



function InputMessage (){
  const [userInfo, setUserInfo]=useState({
    name:'',
    emotion:'',
    date:''
  });

    const [emotionEntry, setEmotionEntry]=useState([]);

    const handleInputChange = (event)=>{
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });

    };

        const handleSubmit = (event)=>{
            event.preventDefault();
            const newUserInfo = {
                name: userInfo.name,
                emotion: userInfo.emotion,
                date: userInfo.date
            };

            setEmotionEntry([...emotionEntry, newUserInfo]);

        setUserInfo({
            name: '',
            emotion: '',
            date: ''
        })
        };

    // This returns the users input on the dom
    return(
       
        <>
       <p>Today's date</p>
         <input onSubmit={handleSubmit}
        type="text"
        name="date" 
        value={userInfo.date} 
        onChange={handleInputChange}
         />
       <p>Your name</p>
         <input onSubmit={handleSubmit}
        type="text"
        name="name" 
        value={userInfo.name} 
        onChange={handleInputChange}
         />
      <p>How are you feeling today?</p>
         <input onSubmit={handleSubmit}
        type="text"
        name="emotion" 
        value={userInfo.emotion} 
        onChange={handleInputChange}
         />
        {/* Handles what happens when the button is clicked */}
        <button type="submit">Submit Entry</button>
        
         {emotionEntry.map((entry, index)=>
        <div key={index}>
            <h3>{entry.name}</h3>
            <p>{entry.emotion}</p>
            <p>{entry.date}</p>
        </div>
        )}
    </>
       
   );
}
export default InputMessage;










































