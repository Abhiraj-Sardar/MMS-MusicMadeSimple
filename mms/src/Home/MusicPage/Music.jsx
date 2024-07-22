import React, { useEffect, useState } from 'react'
import "./Css/Music.css";
import Card from './Card';
import Data from '../../Music/Data';
import { Timer } from './Timer';
const Music = () => {
  const [music,setMusic] = useState(Data);
  const [currentSong,setCurrentSong]=useState(0);
  const [songDuration,setSongDuration]=useState(0);

  useEffect(()=>{
    const audio = new Audio(Data[currentSong].src);
    audio.onloadedmetadata=function(){
      if(audio.readyState>0){
        setSongDuration(audio.duration);
      }
    }


  },[currentSong]);
  return (
    <>
    <div className="container-fluid music-container">
      <div className="left-panel">
        <ul className="song-list">
          {
            music.map((item,i)=>{
              return(
                <li onClick={()=>{setCurrentSong(i)}}>{Data[i].title}</li>
              )
            })
          }          
        </ul>
      </div>
      <div className="right-panel">
        <Card currentSong={currentSong} 
        songDuration={Timer(songDuration)}
        duration={songDuration}
        setCurrentSong={setCurrentSong}
        />
      </div>
    </div>
    <div className="mobile-view-list">
      <div className="left-panel">
          <ul className="song-list">
            {
              music.map((item,i)=>{
                return(
                  <li onClick={()=>{setCurrentSong(i)}}>{Data[i].title}</li>
                )
              })
            }          
          </ul>
      </div>
    </div>
    </>
  )
}

export default Music
