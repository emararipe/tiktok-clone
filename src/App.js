import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    /* usando useEffect os dados dos vídeos, caso haja modificação, é substituído por inteiro, não somente a parte modificada[?] */
    getVideos();
  }, []);

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              description={item.description}
              likes={item.likes}
              messages={item.messages}
              music={item.music}
              name={item.name}
              shares={item.shares}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
