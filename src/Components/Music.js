import LoadVideoJS from "./LoadVideoJS";
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

                <LoadVideoJS url={loadPath} />
          
            </>
            :"")}
        

       
    </div>)
}

export default Music;