import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './fontsizeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export function FontSize() {
  const count = useSelector((state) => state.fontsize.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="btn-group">
       
        
        <button
            className="btn btn-outline-secondary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
         <FontAwesomeIcon icon={faMinus} /> 
        </button>
       
        <button
        className="btn btn-outline-secondary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <FontAwesomeIcon icon={faPlus} /> 
        </button>
      </div>
    </div>
  )
}