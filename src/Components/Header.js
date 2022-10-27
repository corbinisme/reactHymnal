import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Hymn } from '../features/hymn/hymn';
import HymnSelect from "./HymnSelect";
import { Language } from '../features/language/language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header(props) {

    const config = props.configuration;

    const updateLang = props.updateLang;
    const langs = config.langs.split(",");
    const lyrics = props.lyrics;
    const menu= lyrics.menus[props.lang];

    const fontsize = useSelector((state) => state.fontsize.value)
    const hymnNum= useSelector((state) => state.hymn.value)
    const language= useSelector((state) => state.language.value)
    const menuOpenClass = (props.menuOpen? "show": "");
    const handleMenu = props.handleMenu;

    const back = props.handlePage;

    const title = (menu? menu.Hymnal: "Hymnal");

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">

                <button 
                onClick={handleMenu}
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">&equiv;</span>
                </button>

                <a className="navbar-brand" href="#">{title}</a>
                
                <div className={`collapse navbar-collapse ${menuOpenClass}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">

                        <Language handleMenu={handleMenu} langs={langs} />

                    </ul>
                
                </div>
                <div className="d-flex actionItems">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link2 btn btn-outline-secondary search-button" 
                                onClick={()=>back("search")}
                                href="#" tabIndex="-1" aria-disabled="true">
                               <FontAwesomeIcon icon={faSearch} />

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link2 btn btn-outline-secondary" 
                                onClick={()=>back("num")}
                                href="#" tabIndex="-1" aria-disabled="true">
                                #
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
            </nav>

            <div className="hymnSelection bg-dark text-white">

               <Hymn configuration={config} lang={props.lang} lyrics={props.lyrics} />
               
            </div>
        </header>
    )
}

export default Header;