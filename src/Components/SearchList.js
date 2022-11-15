import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementHymn } from '../features/hymn/hymnSlice'

function SearchList(props){

    const dispatch = useDispatch();
    
    const handleHymnSelect = function(e){
        
        let hymn=e.target.getAttribute("data-hymn")
        dispatch(incrementHymn(hymn))
        props.back("home");
    }


    return(
        <div>

            <table className='dataTable table table-bordered'>
            <tbody>
                {(props.searchType=="scripture"? <>scripture list</>: <>
                    {(props.data.length>0? props.data.map((ly)=>{
                        
                        return (
                            <tr key={ly.num}>
                                {(props.searchType=="title"? <>
                                    <td>{ly.num}</td>
                                    <td>
                                        <a href="#" 
                                        data-hymn={ly.num}
                                        onClick={handleHymnSelect}>{ly.title}
                                        </a>
                                    </td>
                                </>: (props.searchType=="text"? <>
                                    <td>{ly.num}</td>
                                    <td><span className="badge bg-info">{ly.title}</span><br />
                                    
                                        <span dangerouslySetInnerHTML={{__html: ly.lyrics}}></span>
                                    </td>
                                </>: <tr><td>No results</td></tr>))}
                            </tr>
                        )
                    }): <tr><td>No results</td></tr>)}
                    </>)}
                    </tbody>
                </table>
                </div>
                )


}
export default SearchList;