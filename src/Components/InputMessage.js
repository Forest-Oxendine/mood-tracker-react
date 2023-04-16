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
        
            console.log(`this is to handle the handleInpputChange ${event.target.name} ${event.target.value}`);
    };

        const handleSubmit = (event)=>{
            event.preventDefault();
            const newUserInfo = {
                name: userInfo.name,
                emotion: userInfo.emotion,
                date: userInfo.date
            };
            console.log(`this is to handle submit ${newUserInfo}`)
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
        <h1>Start Tracking Your Emotions!</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Today's date
                <input 
                    type="text"
                    name="date" 
                    value={userInfo.date} 
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Your name
                <input 
                    type="text"
                    name="name" 
                    value={userInfo.name} 
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                How are you feeling today?
                <input 
                    type="text"
                    name="emotion" 
                    value={userInfo.emotion} 
                    onChange={handleInputChange}
                    />
            </label>
            {/* Handles what happens when the button is clicked */}
            <button type="submit">Submit Entry</button>
       </form>  
         {emotionEntry.map((message, index)=>
        <div key={index}>
            <h3>{message.name}</h3>
            <p>{message.emotion}</p>
            <p>{message.date}</p>
        </div>
        )}
    </>
       
   );
}
export default InputMessage;










































