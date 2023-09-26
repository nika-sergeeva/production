import React, { useState } from 'react'
import styles from './Counter.module.scss'

export const Counter = () => {
const [counter, setCounter] = useState(0)

const count = () => setCounter(counter + 1)

  return (
    <div>
      <h1>{counter}</h1>
      <button
      className={styles.button}
       onClick={count}>+</button>
    </div>
  )
}
