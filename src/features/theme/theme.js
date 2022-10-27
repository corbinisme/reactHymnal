import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from './themeSlice'
//import styles from './Counter.module.css'

export function Theme(props) {
  const thisTheme= useSelector((state) => state.theme.value)
  const dispatch = useDispatch()


  const handleClick = function() {
    //console.log('Label 👉️', event.target.selectedOptions[0].label);
    
    let currTheme = thisTheme
    let newTheme = "";
    if(currTheme=="light"){
      newTheme = "dark";
    } else {
      newTheme = "light";
    }
    let st = window.localStorage;
    st.setItem("theme",newTheme)
    dispatch(setTheme(newTheme))
  };


  return (
    <>

      <button className={`btn btn-outline-secondary ${thisTheme}`}
        onClick={()=>{handleClick()}}>
          💡 
      </button>
     
    </>
  )
}