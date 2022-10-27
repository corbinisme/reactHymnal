import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementHymn } from '../features/hymn/hymnSlice'

function Num(props){

    let active = props.activepage;
    let back = props.handlePage;
    const hymnNum= useSelector((state) => state.hymn.value);
    const dispatch = useDispatch()

    const handleChange = event => {
        //console.log('Label 👉️', event.target.selectedOptions[0].label);
      
        let numb = event.target.value;
        console.log("num", numb)
        dispatch(incrementHymn(numb))
      };

      const handleSubmit = event => {
        event.preventDefault();
        let newNum = event.target.number.value;
        dispatch(incrementHymn(newNum))
        back("home");
      };

    return <>
    
    {(active=="num"?
    <div className="page num">
        <div className="p-4">
        <h2>Search by Number</h2> 
        <a href="#" onClick={()=>back("home")}>Back</a>
        <hr />
        <div className="input-group mt-4">
            <form onSubmit={handleSubmit}>
            <input type="number" name="number" placeholder={hymnNum} className="form-control" />
            <input type="submit" value="Go" className="input-group-addon btn btn-primary" />
            </form>
        </div>
        </div>

    </div>
     : <></>)}
    </>
}
export default Num;