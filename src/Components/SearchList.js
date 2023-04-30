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
                
                    {(props.data.length>0? props.data.map((ly)=>{
                        
                       
                        
                        return (
                            <tr key={ly.num}>
                                
                                <td>{ly.num}</td>
                                <td>
                                <a href="#" 
                                className="btn btn-sm btn-outline-secondary"
                                    data-hymn={ly.num}
                                    onClick={handleHymnSelect}
                                    dangerouslySetInnerHTML={{__html: ly.title}}>
                                        
                                        
                                    </a>
                                    <br />
                                    <code dangerouslySetInnerHTML={{__html: ly.preview}}></code><br />
                                    <span  dangerouslySetInnerHTML={{__html: ly.lyrics}}></span>
                                </td>                            
                            </tr>
                        )
                    }): <tr><td>No results</td></tr>)}
                    
                    </tbody>
                </table>
                </div>
                )


}
export default SearchList;