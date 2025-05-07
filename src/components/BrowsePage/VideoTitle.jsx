import React from 'react'

const VideoTitle = ({game_name, game_description}) => {

  
  return (
    <div className='pt-30 px-12'>
      <h1 className='text-6xl  text-white font-bold'>{game_name}</h1>
      <p className='py-6 text-white text-md w-1/4'>{game_description}</p>
      <div className='py-25 flex flex-col items-start space-y-4'>
        <button className='bg-white  text-black p-4 px-9 rounded-lg hover:bg-blue-200'>🎮 Play</button>
        <button className='bg-gray-500 text-black  p-4 px-4 rounded-lg hover:bg-blue-100'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
