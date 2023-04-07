import React, {useState} from 'react';
import Buttons from './Buttons';


const EmotionRating = () => {

    const [emoRating, setAlbumRating] = useState(0);

    const renderEmotions = () => {
            let emo = [];
            const maxRating = 1;
            for (let i=0; i < maxRating; i++) {
            emo.push(
                <Buttons
                isSelectd={emoRating > i}
                setRating={() => handleSetRating(i+1)}
                key={i}
                />
            )
        }
        return emo;
    }
const handleSetRating = (rating) => {
    setAlbumRating(rating);
}
    
// Still need to figure out how to edit this from the demo
    // return (
    //     <ul className='album--stars'>
    //         {/* Render the Star components */}
    //         {renderStars()}
    //     </ul>
    // );
}

export default EmotionRating;