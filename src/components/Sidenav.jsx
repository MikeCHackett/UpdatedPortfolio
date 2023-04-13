import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { TfiHome } from 'react-icons/tfi';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { GiNetworkBars } from 'react-icons/gi';
import { GoFileCode } from 'react-icons/go';
import { RiMailSendFill } from 'react-icons/ri';
import { FaPenAlt } from 'react-icons/fa';

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
      <CgMenuRight
       size={35}
       onClick={handleNav}
       className='absolute top-4 right-4 z-[92] md:hidden' />

      {nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} className='w-[75%] gap-4 text-lg flex justify-center items-center rounded-lg border dark:border-black shadow-lg dark:text-gray text-black bg-white dark:bg-black shadow-gray-400 dark:shadow-[#000] m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200' 
                href="#main">
                    <TfiHome size={20} />
                    <span className=''>Home</span>
                </a>
                <a onClick={handleNav} className='w-[75%] gap-4 text-lg flex justify-center items-center rounded-lg border dark:border-black shadow-lg dark:text-gray text-black bg-white dark:bg-black shadow-gray-400 dark:shadow-[#000] m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200' 
                href="#about">
                    <BsFileEarmarkPerson size={20} />
                    <span className=''>About</span>
                </a>
                <a onClick={handleNav} className='w-[75%] gap-4 text-lg flex justify-center items-center rounded-lg border dark:border-black shadow-lg dark:text-gray text-black bg-white dark:bg-black shadow-gray-400 dark:shadow-[#000] m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200' 
                href="#work">
                    <FaPenAlt size={20} />
                    <span className=''>Work</span>
                </a>
                <a onClick={handleNav} className='w-[75%] gap-6 text-lg flex justify-center items-center rounded-lg border dark:border-black shadow-lg dark:text-gray text-black bg-white dark:bg-black shadow-gray-400 dark:shadow-[#000] m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200' 
                href="#skills">
                    <GiNetworkBars size={20} />
                    <span className=''>Skills</span>
                </a>
                <a onClick={handleNav} className='w-[75%] gap-2 text-lg flex justify-center items-center rounded-lg border dark:border-black shadow-lg dark:text-gray text-black bg-white dark:bg-black shadow-gray-400 dark:shadow-[#000] m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200' 
                href="#projects">
                    <GoFileCode size={20} />
                    <span className=''>Projects</span>
                </a>
                <a onClick={handleNav} className='w-[75%] gap-2 text-lg flex justify-center items-center rounded-lg border dark:border-black shadow-lg dark:text-gray text-black bg-white dark:bg-black shadow-gray-400 dark:shadow-[#000] m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200' 
                href="#contact">
                    <RiMailSendFill size={20} />
                    <span className=''>Contact</span>
                </a>
            </div>
        )
        : (
            ''
        )
      }

      <div className='md:block hidden fixed top-[32%] z-10 '>
        <div className='flex flex-col'>
            <a href='#main' className='rounded-full shadow-lg bg-gray dark:bg-blue dark:hover:bg-white hover:bg-transparent bg-gray-200 hover:shadow-2xl hover:shadow-black shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                <TfiHome size={25} />
            </a>
            <a href='#about' className='rounded-full shadow-lg bg-gray dark:bg-blue dark:hover:bg-white hover:bg-transparent bg-gray-200 hover:shadow-2xl hover:shadow-black shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                <BsFileEarmarkPerson size={25} />
            </a>
            <a href='#work' className='rounded-full shadow-lg bg-gray dark:bg-blue dark:hover:bg-white hover:bg-transparent bg-gray-200 hover:shadow-2xl hover:shadow-black shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                <FaPenAlt size={25} />
            </a>
            <a href='#skills' className='rounded-full shadow-lg bg-gray dark:bg-blue dark:hover:bg-white hover:bg-transparent  bg-gray-200 hover:shadow-2xl hover:shadow-black shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                <GiNetworkBars size={25} />
            </a>
            <a href='#projects' className='rounded-full shadow-lg bg-gray dark:bg-blue dark:hover:bg-white hover:bg-transparent  bg-gray-200 hover:shadow-2xl hover:shadow-black shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                <GoFileCode size={25} />
            </a>
            <a href='#contact' className='rounded-full shadow-lg bg-gray dark:bg-blue dark:hover:bg-white hover:bg-transparent hover:shadow-2xl hover:shadow-black shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                <RiMailSendFill size={25} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
