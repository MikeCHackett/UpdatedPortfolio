import React from 'react';
import { BsCodeSlash, BsCollectionPlay } from 'react-icons/bs';

const ProjectItem = ({img, title, info, builtWith, builtWiths, builtAlso, href1, href2, built, builtWithAlso}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl group hover:bg-gradient-to-r from-black to-blue'>
      <img src={img} alt='/' className='grayscale rounded-xl object-cover group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
            {title}
        </h3>
        <p className=' pt-2 text-white text-center text-sm'>{info}</p>
        <div className='pt-2 flex justify-center items-center gap-2'>
        <a className='text-white bg-black rounded-full p-2' target='_blank' href={href2}>
            <BsCodeSlash size={25} />
        </a>
        <a className='text-white bg-black rounded-full p-2' target='_blank' href={href1}>
            <BsCollectionPlay size={25} />
        </a>
        </div>
        <p className='text-white flex pt-5 justify-center items-center gap-4'>{builtWith}{builtWiths}{builtAlso}{built}{builtWithAlso}</p>
      </div>
    </div>
  )
}

export default ProjectItem
