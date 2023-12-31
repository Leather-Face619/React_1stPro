import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

const page = () => {
  return (<>
    <head>

      <link rel="icon" href=
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png" />

    </head>


    <div className=' relative w-full h-screen bg-zinc-700 '>
      <Foreground />
      <Background />

    </div>
  </>)

}

export default page