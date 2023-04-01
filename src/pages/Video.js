import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./components/footer/VideoFooter";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        //controls
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
      ></video>
      {/* Side Bar*/}
      <VideoFooter />
    </div>
  );
}

export default Video;
