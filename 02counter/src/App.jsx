import { useState } from 'react'
import './App.css'


function App() {
  const [counter,setCounter] = useState(0)
  // let counter =5;
  const addValue = () =>{
    // counter = counter+1;
    setCounter(counter+1);
    console.log("clicked",counter);
  }
  const subValue = () =>{
    // counter = counter - 1;
    setCounter(counter-1);
    console.log("clicked",counter);
    
  }
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter value: {counter}</h2>
    <button 
    style={{marginRight:10}}
    onClick={addValue}
    >Increase cnt: 1</button>
    <button
    onClick={subValue}
    >Decrease cnt: 1</button>
    <p>counter:{counter}</p>
    </>
  )
}

export default App
