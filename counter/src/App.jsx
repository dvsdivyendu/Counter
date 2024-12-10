
import { useState } from 'react'
import './App.css'

function App() {
  let [count,setcount]=useState(0)
  

  return (
    <>
     <h1>Count:{count}</h1>
     <button onClick={()=>setcount(count+2)}>+</button>
     <button onClick={()=>count > 0 && setcount(count-2)}>-</button>
     <button onClick={()=>setcount(0)}>Reset</button>
    </>
  )
}

export default App
