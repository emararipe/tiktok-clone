import React, { useRef, useState } from "react"
import "./Video.css"
import VideoFooter from "./components/footer/VideoFooter"
import VideoSidebar from "./components/sidebar/VideoSidebar"

function Video({likes, messages, shares, name, description, music, url}) {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(true)


  function handdleStart() {
    if (!play) {
      videoRef.current.play()
      setPlay(true)
    } else {
      videoRef.current.pause()
      setPlay(false)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        //controls
        ref={videoRef}
        autoPlay
        onClick={handdleStart}
        loop
        muted
        src={url}
      ></video>
      <VideoFooter
        name={name}
        description={description}
        music={music}
      />
      <VideoSidebar
        likes = {likes}
        messages = {messages}
        shares = {shares}
      />
    </div>
  )
}

export default Video
