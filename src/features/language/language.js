import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from './languageSlice'
//import styles from './Counter.module.css'

export function Language(props) {
  const hymnNum= useSelector((state) => state.language.value)
  const dispatch = useDispatch()
  const handleMenu = props.handleMenu;
  const langs = props.langs;
  const config = props.config;

  const handleChange = function(e) {
    //console.log('Label 👉️', event.target.selectedOptions[0].label);

    
    dispatch(setLanguage(e))
  };


  return (
    <>
       {langs && langs.map(item=>{
            const activeClass = (item==props.lang? "active":"");

            return(
                <li className="nav-item" key={item}>
                    <a className={`nav-link ${activeClass}`} onClick={()=>{handleChange(item); handleMenu()}} data-val={item}  href="#">

                        {config.langNames[item]}
                    </a>
                </li>
            )

        })}
    </>
  )
}