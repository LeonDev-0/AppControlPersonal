import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-azulito h-screen w-64 '>
        <div className='text-white font-bold p-4'>Mi empresa</div>
        <ul className='p-2' >
            <Link to="/"><li className='py-2 px-4 text-white hover:bg-blue-900 cursor-pointer'>Home</li></Link>
            <Link to="users"><li className='py-2 px-4 text-white hover:bg-blue-900 cursor-pointer'>Users</li></Link>
            <Link to="settings"><li className='py-2 px-4 text-white hover:bg-blue-900 cursor-pointer'>Settings</li></Link>
        </ul>

    </div>
  )
}

export default Sidebar