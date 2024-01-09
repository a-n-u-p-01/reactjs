import { useState } from 'react'
import './App.css'



function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 0;
  function addValue() { 
    setCounter(counter+1);
    console.log(counter);
  }
  function removeValue() { 
    // counter = counter - 1;
    setCounter(counter-1);
    console.log(counter)
  }
  return (
    <>
    <h1>welcome to vit react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
