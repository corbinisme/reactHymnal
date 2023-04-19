import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Lyrics from '../Components/Lyrics';
import pageSlice from '../features/page/pageSlice';
import { useSelector, useDispatch } from 'react-redux'


export default function Home(props) {

    const fontsize = useSelector((state) => state.fontsize.value)
    const hymnNum= useSelector((state) => state.hymn.value)
    const language= useSelector((state) => state.language.value)
    const handleMenu = props.handleMenu;
    let active = props.activepage;
    let back = props.handlePage;

    const currPage= useSelector((state) => state.page.value)

    return(
        <>
        {(active=="home"?
        <div className={`page home`}>
            <Header 
                handleMenu={handleMenu}
                configuration={props.configuration} 
                lang={language} 
                menuOpen={props.menuOpen}
                handlePage={back}
                lyrics={props.lyrics} />
                
                <main className="pageContent">

                    <Lyrics lang={language} lyrics={props.lyrics} />
                
                </main>
                <Footer activepage={active}  />
        </div>
        
        : <></>)}
        </>
        
    )
}