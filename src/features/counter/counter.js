import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
//import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="btn-group">
       
        
        <button
            className="btn btn-outline-secondary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
       
        <button
        className="btn btn-outline-secondary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}