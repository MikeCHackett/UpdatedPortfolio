import React from 'react'
import { GiSkullCrack } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='w-full bg-black h-[200px] py-16 flex justify-center items-center'>
        <h1 className='text-center text-2xl flex items-center gap-2 text-white'>Made by<GiSkullCrack size={35} className='text-white dark:text-gray' /> Michael Hackett </h1>  
    </div>
  )
}

export default Footer
