import { useState } from 'react'
import './App.css'


function App() {
  const [counter,setCounter] = useState(0)


  const addValue = () =>{
    let newCntr = counter+1;
    // ✅ Summary: How useState updates the UI
    // useState holds a value (counter).

    // Calling setCounter(newValue):

    // updates internal state

    // causes the component to re-render

    // On re-render, JSX using counter reflects the new value.

    // Multiple identical setCounter calls are batched — only one render happens if the value doesn't change.
    // Soln
    setCounter(counter=>counter+1);
    setCounter(counter=>counter+1);
    setCounter(counter=>counter+1);
    setCounter(counter=>counter+1);
    setCounter(counter=>counter+1);
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
