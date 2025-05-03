import { onBackgroundMessage } from 'firebase/messaging/sw';
import {useState} from 'react'

function App() {
  const [color,setColor] = useState("white");
  return(
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center top-15 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-7 shadow-lg bg-white px-3 py-2 rounded-4xl'>
          <button onClick = {()=>setColor("red")}className='outline-none cursor-pointer px-4 py-2 shadow-lg rounded-full text-white' style={{backgroundColor:"red"}}>red</button>
          <button onClick = {()=>setColor("purple")}className='outline-none cursor-pointer px-4 py-2 shadow-lg rounded-full text-white' style={{backgroundColor:"purple"}}>purple</button>
          <button onClick = {()=>setColor("green")}className='outline-none cursor-pointer px-4 py-2 shadow-lg rounded-full text-white' style={{backgroundColor:"green"}}>green</button>
          <button onClick = {()=>setColor("black")}className='outline-none cursor-pointer px-4 py-2 shadow-lg rounded-full text-white' style={{backgroundColor:"black"}}>black</button>
          <button onClick = {()=>setColor("blue")}className='outline-none cursor-pointer px-4 py-2 shadow-lg rounded-full text-white' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick = {()=>setColor("orange")}className='outline-none cursor-pointer px-4 py-2 shadow-lg rounded-full text-white' style={{backgroundColor:"orange"}}>orange</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
