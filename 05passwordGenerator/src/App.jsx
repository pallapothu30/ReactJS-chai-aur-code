import { useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allowNums, setNums] = useState(false)
  const [allowChars, setChars] = useState(false)
  const [password, setPassword] = useState("")

  return (
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg text-center text-4xl text-white font-semibold bg-gray-400 px-6 mt-20 py-5'>
      Password Generator

      {/* Password field and copy button */}
      <div className='flex text-2xl shadow rounded-lg mb-10 mt-10 text-black overflow-hidden'>
        <input 
          type="text" 
          value={password}
          readOnly
          className='w-full outline-none bg-white px-4 py-2'
          placeholder='password'
        />
        <button className='bg-red-800 text-white cursor-pointer px-4 py-2'>copy</button>
      </div>

      {/* Slider and checkboxes row */}
      <div className='flex flex-wrap items-center justify-between gap-6 text-lg text-orange-700'>

        {/* Slider */}
        <div className='flex items-center gap-3'>
          <label>Length:</label>
          <input 
            type="range" 
            min={4} 
            max={32} 
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='accent-blue-700'
          />
          <span className='text-white'>{length}</span>
        </div>

        {/* Checkboxes */}
        <div className='flex items-center gap-6'>
          <label className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              checked={allowNums}
              onChange={() => setNums(prev => !prev)}
            />
            Numbers
          </label>
          <label className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              checked={allowChars}
              onChange={() => setChars(prev => !prev)}
            />
            Characters
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
