import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
function App() {

 let maxHeight;
 if(window.innerHeight<= 800){
  maxHeight = window.innerHeight;

 }



  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = getDocs(videosCollection);
    const videosList = (await videosSnapshot).docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{maxHeight:maxHeight + "px"}}>
      <div className="app__videos">
        {/* <Video
          likes={123}
          messeges={222}
          shares={300}
          name="RodolfoPNZ"
          description="Breker o goleiro"
          music="MÚsica Épica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        /> */}
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messeges={item.messeges}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
