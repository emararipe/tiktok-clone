import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList)
  }

  useEffect(() => { /* usando useEffect os dados dos vídeos, caso haja modificação, é substituído por inteiro, não somente a parte modificada[?] */
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
          likes={100}
          messages={200}
          shares={300}
          name="Manu"
          description="Eu danço a dança das tuas marés."
          music="Bom Mesmo É Estar Debaixo... - Luedji Luna"
          url="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
        /> */}
      </div>
    </div>
  );
}

export default App;
