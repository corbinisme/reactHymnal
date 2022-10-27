import { useSelector, useDispatch } from 'react-redux'

function Lyrics(props){

    
    const allLyrics = props.lyrics;
    const lyrics = (allLyrics.lyrics[props.lang]? allLyrics.lyrics[props.lang]: null);
    //const hymnNum = "001";
    const hymnNum= useSelector((state) => state.hymn.value);
    let hymnDigit =  "" + hymnNum;
    if(hymnNum<100){
        hymnDigit = "0" + hymnDigit;
    }
    if(hymnNum<10){
        hymnDigit = "0" + hymnDigit;
    }
    const thisHymn = (lyrics? lyrics["hymn"+ hymnDigit]: null);

    const fontsize = useSelector((state) => state.fontsize.value)
    return(
        <div className={`lyrics font_${fontsize}`}>
    
            <div dangerouslySetInnerHTML={{__html: thisHymn}}></div>
           
        </div>
    )
}

export default Lyrics;