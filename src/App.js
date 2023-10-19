import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Copyright from './Pages/Copyright';
import Num from './Pages/Num';
import config from './Data/config';
import 'bootstrap/dist/css/bootstrap.css';
import languages from './Data/lang';
import { useSelector, useDispatch } from 'react-redux'
import bible from "./Data/Scriptures";
import Footer from './Components/Footer';


function App() {

  const [configuration, setConfiguration] = useState(config);
  const [lyrics, setLyrics] = useState(languages);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [theme, setTheme] = useState("dark");
  //const thisTheme= useSelector((state) => state.theme.value)
//const thisTheme = "dark"
  const handleMenu = function(){
    setMenuOpen(!menuOpen);
  }

  const handlePage = function(page){
    setActivePage(page);
  }

  console.log("bible", bible)


  return (
    <div className={`App`}>
      
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
      <Copyright activepage={activePage} handlePage={handlePage}  lyrics={lyrics}  />
      
    </div>
  );
}

export default App;
