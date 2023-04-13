import React from 'react'
import { MdOutlineMyLocation } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] h-screen md:py-16 m-auto md:pl-20 p-4 py-[65rem]'>
      <h1 className='title'>Contact me</h1>
      <p className='subtitle'>Let's connect!</p>
      <div className='flex gap-8 p-12 justify-center items-center'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <MdOutlineMyLocation className='w-6 h-6 text-blue' /><p className='text-lg bg-clip-text inline-block text-transparent bg-gradient-to-r from-blue to-violet font-bold'>Tampa, Florida</p>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <TfiEmail className='w-6 h-6 text-blue' /><p className='text-lg bg-clip-text inline-block text-transparent bg-gradient-to-r from-blue to-violet font-bold'>Mchackett96@gmail.com</p>
        </div>
      </div>
      <form action='https://getform.io/f/18bc42ef-0893-46ce-9aab-3870e387129e' method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-3 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm font-bold text-black dark:text-white py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray dark:bg-gray' type='text' name='name' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm font-bold text-black dark:text-white py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray dark:bg-gray' type='email' name='email' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm font-bold text-black dark:text-white py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray dark:bg-gray' type='text' name='subject' />
          </div>
          </div>
          <div className='flex flex-col w-full py-2'>
            <label className='uppercase text-sm font-bold text-black dark:text-white py-2'>Message</label>
            <textarea className='border-2 w-full rounded-lg border-gray dark:bg-gray' rows={10} name='message'></textarea>
        </div>
        <button className='bg-blue hover:bg-black border border-blue text-white text-lg mt-4 w-full p-4 rounded-lg'>
          Send message
        </button>
      </form>
    </div>
  )
}

export default Contact
