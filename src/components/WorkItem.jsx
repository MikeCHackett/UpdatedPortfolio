import React from 'react'

const WorkItem = ({ company, title, from, to, details }) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-gray'>
      <li className='mb-10 ml-4 '>
        <div className='absolute w-3 h-3 bg-gray rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-lg'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-blue'>{company}</span>
            <span className='text-xl font-semibold text-blue'>{title}</span>
            <span className='my-1 text-sm font-normal leading-none text-slate'>{from}</span>
            <hr className='w-4'></hr>
            <span className='my-1 text-sm font-normal leading-none text-slate'>{to}</span>
        </p>
        <p className='my-2 text-lg font-bold text-black dark:text-white'>{details}</p>
      </li>
    </ol>
  )
}

export default WorkItem
