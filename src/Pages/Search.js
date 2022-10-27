import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import DataTable from 'react-data-table-component';
import { decrement, increment, incrementHymn } from '../features/hymn/hymnSlice'


function Search(props){

    const active = props.activepage;
    const back = props.handlePage;
    const lyrics = props.lyrics;
    console.log(lyrics);
    const language= useSelector((state) => state.language.value)
    const titles=  lyrics.titles[language];
    const dispatch = useDispatch();

    const [filterText, setFilterText] = useState('blest');
    const [data, setData] = useState([]);
    const columns = [
        {
            name: '#',
            selector: row => row.num,
            width: "59px"
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
    ];
    

    useEffect(()=>{
        // current property is refered to input element
        let tempData = [];
        titles.forEach(function(el){
            let num = el.substring(0, el.indexOf(")"));
            let title = el.substring(el.indexOf(")")+1, el.length);

            let lowerFilter = filterText.toLowerCase();
            if(
                title.toLowerCase().indexOf(lowerFilter)>-1|| 
                lowerFilter==""|| 
                num.toString().indexOf(lowerFilter)>-1
            ){
                let temp = {
                    num: num,
                    title: title
                }
                tempData.push(temp);
            }
        })
        console.log("data", tempData);
        setData(tempData);
     },[filterText])

  
    const handleFilter= function(e){

        console.log(e)
        setFilterText(e.target.value)
    }

    const handleHymnSelect = function(e){
        
        let hymn=e.target.getAttribute("data-hymn")
        console.log(hymn);
        dispatch(incrementHymn(hymn))
        back("home");
    }
    
   
    
    return <>
    
    {(active=="search"?
    <div className="page search">
        
        <div className="p-4">
            <header>
                <div className="row">
                    <div className="col">
                        <h2>Search by Title</h2> 
                    </div>
                    <div className="col float-right text-right pull-right">
                        
                        <a href="#" onClick={()=>back("home")}>Back</a>
                    </div>
                </div>
                
                
            
    <div className="input-group">
        <input type="text" 
                onChange={handleFilter}
                value={filterText} 
                className="form-control" 
                name="searchtitles" />
        <button className="input-group-addon btn btn-primary">
            X
        </button>
    </div>
    <hr />
                
               
            </header>
        
     

        <table className='dataTable table table-bordered'>
            <tbody>
        {(data.length>0? data.map((ly)=>{
            
            return (
                <tr key={ly.num}>
                    <td>{ly.num}</td>
                    <td>
                        <a href="#" 
                        data-hymn={ly.num}
                        onClick={handleHymnSelect}>{ly.title}
                        </a>
                    </td>
                </tr>
            )
        }): <tr><td>No results</td></tr>)}
        </tbody>
        </table>
        </div>
    </div>
     : <></>)}

    </>
}
export default Search;