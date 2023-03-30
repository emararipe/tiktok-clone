import React, {useRef, useState} from 'react'
import './Video.css'

function Video() {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

    function handdleStart() {
      if(!play) {
        videoRef.current.play()
        setPlay(true)
      } 
      else {
        videoRef.current.pause()
        setPlay(false)
      }
      
    }

  return (
    <div className='video'>
      <video 
        className='video__player'
        //controls
        ref={videoRef}
        onClick={handdleStart}
        loop 
        src='https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946'>
      </video>
    </div>
  )
}

export default Video