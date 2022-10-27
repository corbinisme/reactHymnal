import {React, useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementHymn } from '../features/hymn/hymnSlice'

function Num(props){

    const searchInput = useRef(null);
    const active = props.activepage;
    const back = props.handlePage;
    const hymnNum= useSelector((state) => state.hymn.value);
    const dispatch = useDispatch();
    //ref.current.focus();

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


      useEffect(()=>{
        // current property is refered to input element
        if(active=="num"){
          searchInput.current.focus();
          console.log("num page454")
        }
     },[active])

    return <>
    
    {(active=="num"?
    <div className="page num">
        <div className="p-4">
        <h2>Search by Number</h2> 
        <a href="#" onClick={()=>back("home")}>Back</a>
        <hr />
        <form onSubmit={handleSubmit}>
        <div className="input-group mt-4">
            
            <input type="number" name="number" ref={searchInput} placeholder={hymnNum} className="form-control" />
            <input type="submit" value="Go" className="input-group-addon btn btn-primary" />
           
        </div>
        </form>
        </div>

    </div>
     : <></>)}
    </>
}
export default Num;