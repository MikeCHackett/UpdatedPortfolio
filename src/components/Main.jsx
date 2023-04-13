import React from 'react'
import MainImage from '../assets/main.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';


const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={MainImage} />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/30'>
            <div className='max-w-[700px] m-auto gap-8 h-full w-full text-center flex flex-col justify-center lg:items-center items-center'>
                <h1 className='md:text-7xl text-white dark:text-black text-center text-4xl font-semibold'>Hi I'm Michael Hackett,</h1>
                <h2 className='bg-clip-text text-transparent flex bg-gradient-to-r from-cyan
              to-purple font-bold' ><TypeAnimation
                    sequence={[
                        'Software Engineer',
                        1000,
                        'Web Developer',
                        1000,
                        'Web Designer',
                        1000,
                        () => {
                            console.log('Done Typing!');
                        },
                    ]} 
                    wrapper='div'
                    cursor={true}
                    repeat={Infinity}
                    style={{fontSize: '3.5rem', paddingLeft: '5px'}}
                    />

                </h2>
                <div className='flex justify-evenly items-center max-w-[200px] w-full '>
                    <a href='https://twitter.com/xMikeTech' target='_blank'><FaTwitter className='text-white dark:text-black cursor-pointer hover:text-black dark:hover:text-white' size={25} /></a>
                    <a href='https://www.linkedin.com/in/mikehackettlink/' target='_blank'><FaLinkedin className='text-white dark:text-black cursor-pointer hover:text-black dark:hover:text-white' size={25} /></a>
                    <a href='https://github.com/MikeCHackett' target='_blank'><FaGithub className='text-white dark:text-black cursor-pointer hover:text-black dark:hover:text-white' size={25} /></a>
                    <a href='mailto:mchackett96@gmail.com' target='_blank'><SiMinutemailer className='text-white dark:text-black cursor-pointer hover:text-black dark:hover:text-white' size={25} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
