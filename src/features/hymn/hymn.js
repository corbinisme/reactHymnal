import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementHymn } from './hymnSlice'
//import styles from './Counter.module.css'

export function Hymn(props) {
  const hymnNum= useSelector((state) => state.hymn.value)
  const dispatch = useDispatch()

  const lyrics = props.lyrics;
  const titles = lyrics.titles[props.lang];


  const handleChange = event => {
    //console.log('Label 👉️', event.target.selectedOptions[0].label);
  
    let numb = event.target.value;
    console.log("num", numb)
    dispatch(incrementHymn(numb))
  };


  return (
    <div>


        <div className="p-2">
            <select className="form-control" onChange={handleChange} value={hymnNum}>
            {titles && titles.map(item=> {
                
                let num = item.substring(0, item.indexOf(")"));
                let selectedBool = (hymnNum==num?true:false)

                return(
                    <option   value={num} key={item}>
                        {item}
                    </option>
                )
            })}
            </select>
        </div>

     
    </div>
  )
}