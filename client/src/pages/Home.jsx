import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='m-10 p-10'>
    <div className=' flex flex-col gap-4 p-10'>
      <h className='text-slate-800 font-bold text-2xl' > 
        Million Financial problems 😥
      </h>
      <h className='text-orange-800 font-bold text-2xl'>
        One Solution 😎
      </h>
      <h className='text-purple-800 font-bold text-2xl'>
        Welcome to Personal Financial Assistant !!! 
      </h>
    </div>

    <div id='tools' className='flex flex-col place-content-center'>
    <div id='heading' className='mb-8 mt-16'>
      <h1 className='font-bold text-3xl'>
        Our Financial Tools:
      </h1>
    </div>
    <div className='flex place-content-start gap-5'>
    
      <Link to={'/First'} className='p-20 border-hidden hover: bg-orange-100 rounded-lg
       hover:bg-orange-200'>
      <h className="font-semibold text-xl">First</h>
      </Link>
      <Link to={'/Second'} className='p-20 border-hidden bg-orange-100 rounded-lg
      hover:bg-orange-200'>
      <h className="font-semibold text-xl">Second</h>
      </Link>
      <Link to={'/Third'} className='p-20 border-hidden bg-orange-100 rounded-lg
      hover:bg-orange-200'>
      <h className="font-semibold text-xl">Third</h>
      </Link>
    </div>
    </div>
    </div>

  )
}
