import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import SearchList from '../Components/SearchList';
import DataTable from 'react-data-table-component';
import { decrement, increment, incrementHymn } from '../features/hymn/hymnSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


function Search(props){

    const active = props.activepage;
    const back = props.handlePage;
    const lyrics = props.lyrics;
    const language= useSelector((state) => state.language.value)
    const titles=  lyrics.titles[language];
    const dispatch = useDispatch();
    const searchTypes = ["title", "text", "scripture"]
    const [searchType, setSearchType] = useState("title");

    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState([]);

    const title = "Search";
    

    useEffect(()=>{
        // current property is refered to input element
        let tempData = [];
        titles.forEach(function(el){
            let num = el.substring(0, el.indexOf(")"));
            let title = el.substring(el.indexOf(")")+1, el.length);

            let displayHymnNum = num;
            let numParse = parseInt(num);
            if(numParse < 100) {
                displayHymnNum = "0" + displayHymnNum;
            }
            if(numParse < 10) {
                displayHymnNum = "0" + displayHymnNum;
            }

            let hymnNum = "hymn" + displayHymnNum;
            let lowerFilter = filterText.toLowerCase();
            let theseLyrics = lyrics.lyrics[language][hymnNum];

            theseLyrics = theseLyrics.substring(theseLyrics.indexOf("</h1>")+5);
            var dom = new DOMParser().parseFromString(theseLyrics, 'text/html');
            let theseSearchLyrics = dom.body.textContent;

            if(searchType=="title"){
                if(
                    title.toLowerCase().indexOf(lowerFilter)>-1|| 
                    lowerFilter==""|| 
                    num.toString().indexOf(lowerFilter)>-1
                ){
                    let temp = {
                        num: num,
                        title: title,
                        lyrics: theseLyrics
                    }
                    tempData.push(temp);
                }
            } else if(searchType=="text"){
                if(
                    theseSearchLyrics.toLowerCase().indexOf(lowerFilter)>-1
                ){
                    let highlightedSearchLyrics = theseSearchLyrics;
                    console.log("lowerFilter", lowerFilter);
                    let searchSplits = lowerFilter.split(" ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(";", " ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(".", " ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(",", " ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(":", " ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll("Chorus", " ");

                    /*
                    searchSplits.forEach(function(term){
                        if(term!=""){
                        highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(term, "<mark>" + term + "</mark>");
                        }
                    })
                    */
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(filterText, "<mark>" + filterText + "</mark>");

                    let temp = {
                        num: num,
                        title: title,
                        lyrics: highlightedSearchLyrics
                    }
                    tempData.push(temp);
                }
            }
        })

        setData(tempData);
     },[filterText])

  
    const handleFilter= function(e){

        setFilterText(e.target.value)
    }


    const clearFilter = function(e) {
        setFilterText("")
    }

    const handleSearchTypeChange = function(e) {
        
        let val = e.target.value;
        setSearchType(val);
    }
    
   
    
    return <>
    
    {(active=="search"?
    <div className="page search">
        
        <header>
            <nav className="navbar  navbar-light ">
           
           <div className='d-flex cols'>
            <select className="searchType form-control" value={searchType} onChange={handleSearchTypeChange}>

                <option value="title">Search by Title</option>
                <option value="text">Full lyrics</option>
                <option value="scripture">Scriptural Index</option>
            </select>
            </div>
           

            <div className="d-flex actionItems">

                        <a href="#" 
                        className="btn btn-outline-secondary float-end" 
                        onClick={()=>back("home")}>
                            <FontAwesomeIcon icon={faArrowLeft} /> 
                        </a>
            </div>
            
               
      
               

            </nav>
            <div className="input-group">
                    <input type="text" 
                            onChange={handleFilter}
                            value={filterText} 
                            className="form-control" 
                            name="searchtitles" />
                    <button 
                        onClick={clearFilter}
                        className="input-group-addon btn btn-outline-secondary">
                        <FontAwesomeIcon icon={faTimes} /> 
                    </button>
                </div>
        </header>
        
        <div className="pageContent">

            <SearchList back={back} searchType={searchType} data={data} />

        
        </div>
        
    </div>
     : <></>)}

    </>
}
export default Search;