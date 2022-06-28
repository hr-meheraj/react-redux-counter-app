import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementByFive, decrementByOne, incrementByFive, incrementByOne, reset } from '../services/counterAction';

function Counter() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className='count'>Count : {store.count}</h3>
      <button onClick={() => dispatch(incrementByOne())}>Increment by 1</button>
      <button onClick={() => dispatch(incrementByFive())}>Increment by 5</button>
      <button onClick={() => dispatch(decrementByOne())}>Decrement by 1</button>
      <button onClick={() => dispatch(decrementByFive())}>Decrement by 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter