import {React, useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementHymn } from '../features/hymn/hymnSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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

        <header>
                <div className="row topHeader">
              <div className="col">
                <h2>Number</h2> 
              </div>
              
              <div className="col">
                        
                        <a href="#" 
                            className="btn btn-outline-secondary float-end" 
                            onClick={()=>back("home")}>
                                <FontAwesomeIcon icon={faArrowLeft} /> 
                            </a>
                        </div>
          </div>
        
        </header>
        <div className="pageContent">
        
        <form onSubmit={handleSubmit}>
        <div className="input-group mt-4">
            
            <input type="number" name="number" ref={searchInput} placeholder={hymnNum} className="form-control" />
            <input type="submit" value="Go" className="input-group-addon btn btn-primary" />
           
        </div>
        </form>
        </div>
        </div>

    </div>
     : <></>)}
    </>
}
export default Num;