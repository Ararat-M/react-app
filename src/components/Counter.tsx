import { useState } from 'react'
import classes from  "./counter.module.scss"

export function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <div>{counter}</div>
      <button className={classes.btn} onClick={() => (setCounter(counter + 1))}>incremment</button>
    </>
  )
}
