import React, { useRef, useState } from "react";
import Videofooter from "./components/footer/Videofooter";
import Sidebar from "./components/sidebar/Siderbar";
import "./video.css";

function Video({likes,messeges,shares,name,description,music,url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  function handdleStar() {

    if(play){
        videoRef.current.pause();
        setPlay(false);

    } else{
        videoRef.current.play();
        setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStar}
        controls
        loop
        src={url} 
        />
      <Sidebar 
      likes={likes}
      messeges={messeges}
      shares={shares}
      />
      <Videofooter 
      name = {name}
      description={description}
      music={music}
      />
    </div>
  );
}

export default Video;
