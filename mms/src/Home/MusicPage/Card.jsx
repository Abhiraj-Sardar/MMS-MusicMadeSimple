import React, { useState } from 'react'
import "./Css/Card.css";  
import Data from '../../Music/Data';  
const Card = (props) => {
    const music = useState(Data);
    return (
        <div class="card">
            <div class="card__content">
                <audio src={Data[props.currentSong].src} controls></audio>
            </div>
        </div>
    )
}

export default Card
