import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white h-8 flex justify-center items-center gap-4'>
        <NavLink to="/">Home</NavLink>
         <NavLink to="/todo">Todo</NavLink>
    </div>
  )
}

export default Header