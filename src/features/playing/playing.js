import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayingPiano, setPlayingVocal } from './playingSlice'
//import styles from './Counter.module.css'

export function Playing(props) {
  const isPlayingPiano= useSelector((state) => state.playing.piano)
  const isPlayingVocal= useSelector((state) => state.playing.vocal)
  const dispatch = useDispatch()

  console.log("isPlaying", isPlayingPiano, isPlayingVocal)

  const handleClick = function(type) {
    //console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log("click", type);
  
    if(type=="piano"){
      dispatch(setPlayingPiano(!isPlayingPiano))
      dispatch(setPlayingVocal(false))
    } else {
      dispatch(setPlayingVocal(!isPlayingVocal))
      dispatch(setPlayingPiano(false))
    }
    
  };



  return (
    <>

      <button className={`btn btn-outline-secondary ${(isPlayingPiano==true? "active":"")}`}
        onClick={()=>{handleClick("piano")}}>
        🎵 
      </button>

      <button className={`btn btn-outline-secondary ${(isPlayingVocal==true? "active":"")}`}
        onClick={()=>{handleClick("vocal")}}>
        🎵 
      </button>
     
    </>
  )
}