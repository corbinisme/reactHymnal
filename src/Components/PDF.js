import { useSelector, useDispatch } from 'react-redux'
import config from '../Data/config';
import "@yangxuy/pdf-reader";
import { useRef } from "react";
import React from "react";


function PDF(props){

    const div = useRef();
    const hymnNum= useSelector((state) => state.hymn.value);
    let hymnDigit =  "" + hymnNum;
    if(hymnNum<100){
        hymnDigit = "0" + hymnDigit;
    }
    if(hymnNum<10){
        hymnDigit = "0" + hymnDigit;
    }
   

    //const pdfURL = `${config.pdfPath}${hymnDigit}+Guitar.pdf`;
    const pdfURL = `pdf/001+Guitar.pdf`;
    return(
        <div className='pdfContainer'>
            Load {pdfURL}
            <br />
           <div ref={div}>
            {React.createElement("pdf-view", { url: pdfURL })}
           </div>
            
        </div>
    )

}
export default PDF;