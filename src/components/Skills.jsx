import React from 'react';
import { SiReact, SiTailwindcss, SiMongodb, SiExpress, SiBootstrap, SiHtml5, SiCss3, SiGithub, SiFigma, SiJavascript } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id='skills' className='max-w-[1040px] h-screen m-auto md:pl-20 p-10 md:py-[16rem] py-36'>
      <h1 className='title'>Skills</h1>
      <p className='subtitle text-black'>Technologies I use to create stunning web applications...</p>
      <div className='grid mt-6 grid-cols-4 gap-10'>
        <div className='flex flex-col justify-center items-center'>
            <SiReact color='#61DAFB' size={65} className='hover:animate-spin' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>React</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <GrNode color='#026e00' size={65} className='hover:animate-bounce' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>Node.js</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiMongodb color='#00ed64' size={65} className='hover:animate-ping' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>MongoDB</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiExpress color='black' size={65} className='hover:animate-pulse' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>Express.js</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiTailwindcss color='#7DD3FC' size={65} className='hover:animate-spin' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>TailWind</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiBootstrap color='#9451FB' size={65} className='hover:animate-bounce' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>BootStrap</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiHtml5 color='#EA4335' size={65} className='hover:animate-ping' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>HTML5</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiCss3 color='#1D7EAD' size={65} className='hover:animate-pulse' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>CSS3</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <FaGitAlt color='#F14E32' size={65} className='hover:animate-spin' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>Git</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiGithub color='black' size={65} className='hover:animate-bounce' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>Github</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiFigma color='#0FA958' size={65} className='hover:animate-ping' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>Figma</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <SiJavascript color='#FCDC00' size={65} className='hover:animate-pulse' />
            <p className='pt-4 text-lg md:text-2xl text-black dark:text-gray font-bold'>JavaScript</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
