import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/Button'
const Header = () => {
  return (
   <nav className="w-full h-[60px] text-white p-3 flex justify-between item-center bg-gray-800">
    <a href="/">
  <h2 className='font-bold select-none'    >Web dev Compiler by Pixels&co.</h2>

    </a>
  <ul className="flex gap-2">
<li>
 <a href="/compile"><Button variant='secondary' className='  bg-gray-950'>Compile</Button></a>
</li>
  </ul>
   </nav>
  )
}

export default Header
