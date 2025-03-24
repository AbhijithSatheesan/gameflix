import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div>
      <h1 class = "text-2xl text-red-500 font-bold underline"
      >Hello welcome to Gameflix </h1>
      <h2 className='text-red-100'>
        This is a red text
      </h2>
      <h1 className='text-green-300'>
        Green Text
      </h1>
     </div>
   
  )
}

export default App
