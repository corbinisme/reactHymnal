import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Num from './Pages/Num';
import config from './Data/config';
import 'bootstrap/dist/css/bootstrap.css';
import languages from './Data/lang';
import { useSelector, useDispatch } from 'react-redux'
import bible from "./Data/Scriptures";


function App() {

  const [configuration, setConfiguration] = useState(config);
  const [lyrics, setLyrics] = useState(languages);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const thisTheme= useSelector((state) => state.theme.value)

  const handleMenu = function(){
    setMenuOpen(!menuOpen);
  }

  const handlePage = function(page){
    setActivePage(page);
  }

  const fontsize = useSelector((state) => state.fontsize.value)
  
  console.log("bible", bible)


  return (
    <div className={`App ${thisTheme}`} data-theme={thisTheme}>
      
      <Home 
      activepage={activePage} 
      handlePage={handlePage} 
      configuration={configuration} 
      lyrics={lyrics} 
      handleMenu={handleMenu} 
      menuOpen={menuOpen} 
      />
      <Search activepage={activePage} handlePage={handlePage} lyrics={lyrics}   />
      <Num activepage={activePage} handlePage={handlePage}  />
    </div>
  );
}

export default App;
