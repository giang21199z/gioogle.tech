import videoSrc from './video.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'

function Bai22() {
  const videoRef = useRef();

  const handlePause = () => {
    videoRef.current.pause();
  }

  const handlePlay = () => {
    videoRef.current.play();
  }

  return (
    <>
      <WrapContent ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  )
}

const WrapContent = forwardRef(
  function Content(props, ref) {
    const vRef = useRef();
  
    useImperativeHandle(ref, () => ({
      play() {
        vRef.current.play()
      },
      pause() {
        vRef.current.pause()
      }
    }))
  
    return (
      <>
        <video
          ref={vRef}
          src={videoSrc}
          width={300}
        />
      </>
    )
  }
)

export default Bai22;
