import { useState } from 'react'
import './App.css'


function App() {
  const [counter,setCounter] = useState(0)


  const addValue = () =>{
    let newCntr = counter+1;
    if(newCntr>20)newCntr = 0;
    setCounter(newCntr);
    console.log("clicked",newCntr);
  }


  const subValue = () =>{
    let newCntr = counter - 1;
    if(newCntr<0)newCntr = 0;
    setCounter(newCntr);
    console.log("clicked",newCntr);
    
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
