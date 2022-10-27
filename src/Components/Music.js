import ReactPlayer from "react-player";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux'
import config from '../Data/config';

function Music(props){

    const hymnNum= useSelector((state) => state.hymn.value)
    console.log("hymn", hymnNum)
    const isPlayingPiano= useSelector((state) => state.playing.piano)
    const isPlayingVocal= useSelector((state) => state.playing.vocal);

    const mp3path = (isPlayingPiano? config.path: config.vocal_path);
    let hymnDigit =  "" + hymnNum;
    if(hymnNum<100){
        hymnDigit = "0" + hymnDigit;
    }
    if(hymnNum<10){
        hymnDigit = "0" + hymnDigit;
    }
    const loadPath = mp3path + hymnDigit + ".mp3";

    return (<div className='player-wrapper d-flex'>
        
            {((isPlayingPiano==true||isPlayingVocal==true)?
            <>
            <ReactPlayer
                url={loadPath}
                width="100%"
                height="100%"
                className='react-player'
                playing={false}
                controls={true}
            />
            {loadPath}
            </>
            :"")}
        

       
    </div>)
}

export default Music;