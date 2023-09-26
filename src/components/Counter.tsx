import React, { useState } from 'react'
import './Counter.scss'

export const Counter = () => {
const [counter, setCounter] = useState(0)

const count = () => setCounter(counter + 1)

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={count}>+</button>
    </div>
  )
}
