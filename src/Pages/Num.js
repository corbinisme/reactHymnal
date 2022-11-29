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

        }
     },[active])

     const fontsize = useSelector((state) => state.fontsize.value)

    return <>
    
    {(active=="num"?
    <div className="page num">
        

        <header>
            <div className="topHeader">
              <nav className="navbar col  navbar-light ">
                  <div className="container-fluid">
                      <div className='d-flex'>
                      <span className="navbar-brand">Number</span> 
                      </div>
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
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                    
                    <input type="number" name="number" ref={searchInput} placeholder={hymnNum} className="form-control" />
                    <input type="submit" value="Go" className="input-group-addon btn btn-primary" />
                  
                </div>
                </form>
            </div>
        
        </header>
        <div className={`pageContent font_${fontsize}`}>
          Num
     
        </div>

    </div>
     : <></>)}
    </>
}
export default Num;