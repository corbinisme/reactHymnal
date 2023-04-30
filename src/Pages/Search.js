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
    const getHymnTitle = function(el){
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
        return {
            num: num,
            title: title,
            displayHymnNum: displayHymnNum
        }
            
    }

    useEffect(()=>{
        // current property is refered to input element
        let tempData = [];

        if(filterText!=null && filterText!="" && filterText!=" "){
            let langLyrics = lyrics.lyrics[language]
            titles.forEach(function(el){
                
                let nums = getHymnTitle(el);
                
                let lowerFilter = filterText.toLowerCase();
                let hymnNum = "hymn" + nums.displayHymnNum;

                let theseLyrics = langLyrics[hymnNum];
                theseLyrics = theseLyrics.substring(theseLyrics.indexOf("</h1>")+5);

                if(theseLyrics.toLowerCase().indexOf(lowerFilter)>-1 || 
                    title.toLowerCase().indexOf(lowerFilter)>-1){
           
                    var dom = new DOMParser().parseFromString(theseLyrics, 'text/html');
                    let theseSearchLyrics = dom.body.textContent;
                    const regex = new RegExp(filterText, "gi");
                    const lyricsWithHighlights = theseSearchLyrics.replace(
                        regex,
                        match => `<mark class="highlight">${match}</mark>`
                    );
                    let title = nums.title;
                    const titleWithHighlights = title.replace(
                        regex,
                        match => `<mark class="highlight">${match}</mark>`
                    );

                    // get just  preview?
                    const index = lyricsWithHighlights.toLowerCase().indexOf(filterText.toLowerCase())-45;
                    const start = index > 15 ? index - 15 : 0;
                    const end = index + filterText.length + 95;
                    const preview = "..." + lyricsWithHighlights.substring(start, end) + "...";
                    
                    let temp = {
                        num: nums.num,
                        title: titleWithHighlights,
                        lyrics: lyricsWithHighlights,
                        preview: preview
                    }
                    tempData.push(temp);
                
                    }
            })

  
        } else {


           
        }

        /*
        
        
     

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



            let temp = {
                num: num,
                title: title,
                lyrics: highlightedSearchLyrics
            }
            tempData.push(temp);

            /*

            if(searchType=="title2"){
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
            } else if(searchType=="text" || searchType=="title"){

                    let highlightedSearchLyrics = theseSearchLyrics;
  
                    let searchSplits = lowerFilter.split(" ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(";", " ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(".", " ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(",", " ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(":", " ");
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll("Chorus", " ");
                   

                if( lowerFilter!="" && lowerFilter!=" " &&
                    theseSearchLyrics.toLowerCase().indexOf(lowerFilter)>-1
                ){
                    highlightedSearchLyrics = highlightedSearchLyrics.replaceAll(filterText, "<mark>" + filterText + "</mark>");

                    let temp = {
                        num: num,
                        title: title,
                        lyrics: highlightedSearchLyrics
                    }
                    tempData.push(temp);
                } else {
                    if(lowerFilter=="" || lowerFilter==" "){
    
                        let temp = {
                            num: num,
                            title: title,
                            lyrics: highlightedSearchLyrics
                        }
                        tempData.push(temp);
                    
                    } else {
                        console.log("no match");
                    }
                    
                    
                }
           
    
        })
         }
            */
        

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
        setFilterText("")
    }
    
    const fontsize = useSelector((state) => state.fontsize.value)
    
    return <>
    
    {(active=="search"?
    <div className="page search">
       
        <header>
            <div className="topHeader">
                <nav className="navbar col  navbar-light ">
                    <div className="container-fluid">
            
                   

                    <span className="navbar-brand">Search</span> 
                

                    <div className="d-flex actionItems">

                                <a href="#" 
                                className="btn btn-outline-secondary float-end" 
                                onClick={()=>back("home")}>
                                    <FontAwesomeIcon icon={faArrowLeft} /> 
                                </a>
                    </div>
                    </div>
                
                </nav>
            </div>
            <div className="bottomHeader">
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
            </div>
        </header>
        
        <div className={`pageContent font_${fontsize}`}>

            <SearchList back={back} filter={filterText} searchType={searchType} data={data} />

        
        </div>
        
        
    </div>
     : <></>)}

    </>
}
export default Search;