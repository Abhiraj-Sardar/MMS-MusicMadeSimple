import React, { useEffect, useRef, useState } from 'react'
import "./Css/Card.css";
import Data from '../../Music/Data';
import { Timer } from './Timer';
const Card = (props) => {
    const music = useState(Data);
    const [currentSongDuration,setCurrentSongDuration]=useState(0);
    const [play,setPlay]=useState(false);
    const [showVolume,setShowVolume]=useState(false);
    const [volume,setVolume]=useState(50);

    const AudioRef = useRef();

    const handleLoadStart=(e)=>{
        console.log(e.nativeEvent.srcElement.src)
    }

    const changeAction=()=>{
        if(play){
            AudioRef.current.pause();
            setPlay(false);
        }else{
            AudioRef.current.play();
            setPlay(true);
        }
    }

    const handleTimeUpdate=(e)=>{
        const currentTime=AudioRef.current.currentTime;
        setCurrentSongDuration(currentTime);
    }
    
    const changeCurrentTime=(e)=>{
        const currentTime=Number(e.target.value)
        AudioRef.current.currentTime=currentTime;
        setCurrentSongDuration(currentTime);
    }

    const next=()=>{
        const n=Data.length;
        let currentSong=(props.currentSong+1)%n
        props.setCurrentSong(currentSong)
        // console.log(props.currentSong)
    }

    const prev=()=>{
        const n=Data.length;
        let currentSong=(props.currentSong-1)%n
        if(currentSong<0){
            currentSong=n-1
        }

        props.setCurrentSong(currentSong)
        // console.log(props.currentSong)
    }

    const openVolume=()=>{
        var volRange=document.querySelector(".vol-range");
        setShowVolume((prev) => !prev)
        if(showVolume){
            volRange.style.display="block";
        }else{
            volRange.style.display="none";
        }
    }

    useEffect(()=>{
        AudioRef.current.volume=volume/100;
    },[volume])
    return (
        <div class="card">
            <div class="card__content">
                <div className="img__container">
                    <img src={Data[props.currentSong].img} alt='music' />
                </div>
                
                <br />
                <h5>{Data[props.currentSong].title}</h5>
                
                <br />
                <div className="track-range">
                    <input type='range' min={0} max={props.duration} value={currentSongDuration} onChange={(e)=>{changeCurrentTime(e)}}/>
                </div>
                <div className="track-timing">
                    <span id='start'>{Timer(currentSongDuration)}</span>
                    <span id='end'>{props.songDuration}</span>
                </div>
                <br />
                
                <div className="controls">
                    <span><i class="fa-solid fa-repeat"></i></span>
                    <span onClick={prev}>
                        <i class="fa-solid fa-backward-step"></i>
                        </span>
                    <span onClick={changeAction}>
                        {play ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i> }
                    </span>
                    <span onClick={next}>
                        <i class="fa-solid fa-forward-step"></i>
                    </span>
                    <span onClick={openVolume}> 
                        <i class="fa-solid fa-volume-high"></i>
                    </span>
                    <div className="vol-range">
                        <input id='volume-range' type='range' min={0} max={100} onChange={(e)=>{setVolume(e.target.value)}} />
                         &nbsp;<span>{volume}</span>
                    </div>

                </div>
                <br />



                <audio src={Data[props.currentSong].src} hidden ref={AudioRef}
                    onLoadStart={handleLoadStart}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>
            </div>
        </div>
    )
}

export default Card
