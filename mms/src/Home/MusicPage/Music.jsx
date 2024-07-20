import React, { useEffect, useState } from 'react'
import "./Css/Music.css";
import Card from './Card';
import Data from '../../Music/Data';
const Music = () => {
  const music = useState(Data);
  const [currentSong,setCurrentSong]=useState(0);

    // const changeSong=(i)=>{
    //   setCurrentSong(i);
    // }
  return (
    <div className="container-fluid music-container">
      <div className="left-panel">
        <ul className="song-list">
          {
            music.map((item,i)=>{
              return(
                <li data-description="This is the description of Song 1" onClick={()=>{setCurrentSong(i)}}>{Data[i].title}</li>
              )
            })
          }
          
          
        </ul>
      </div>
      <div className="right-panel">
        <Card currentSong={currentSong}/>
      </div>
    </div>
  )
}

export default Music
