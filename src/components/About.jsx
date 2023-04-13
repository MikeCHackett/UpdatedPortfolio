import React from 'react';
import MeImage from '../assets/picofme.png';
import CV from '../assets/UPDATED - resume 2023.pdf';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div id='about' className='max-w-[1040px] h-screen m-auto md:pl-20 p-4 md:py-[-20rem]'>
      <img className='m-auto rounded-full w-96 object-cover' src={MeImage} />
      <h1 className='title pt-6'>About me</h1>
      <p className='subtitle'>The history of me</p>
      <p className='text-lg md:text-3xl dark:text-gray text-center pb-8'>Ever since high school I have always had a passion for creating and experimenting with new flavors in the kitchen. However, I have recently decided to switch careers and pursue my love of <span className='px-2 text-transparent bg-clip-text inline-block bg-gradient-to-r from-blue to-violet'>technology</span> by becoming a web developer. I am excited to bring my creativity and attention to detail to this new field of web development. I am confident that my experience in the culinary industry has prepared me for the fast-paced and constantly evolving world of technology. I am eager to learn and grow as a<span className='px-2 text-transparent bg-clip-text inline-block bg-gradient-to-r from-blue to-violet'> web developer</span>and I am excited to see where this career path takes me.</p>
      <a className='flex justify-center items-center m-auto w-1/4 text-center border border-gray dark:border-blue bg-blue p-3 text-white hover:bg-black dark:text-gray rounded-lg text-lg hover:scale-110 ease-in-out duration-200 shadow-lg' target='_blank' href={CV}>Download CV</a>
      <h2 className='md:mt-16 mt-4 flex flex-col justify-center dark:text-gray items-center max-w-[200px] w-/4 m-auto shadow-2xl text-lg md:text-xl border border-black dark:border-gray  p-4 font-code'
      ><TypeAnimation
                    sequence={[ 
                      'career.',
                      1000,
                      'career.replace (',
                      2000,
                      () => {
                        console.log('Done Typing!');
                    },
                ]}  
                      cursor={true}
                      style={{ }}
                      repeat={Infinity}
                     /><span className='flex'><TypeAnimation
                     sequence={[
        '"C"',
        100,
        '"Ch"',
        300,
        '"Chef",',
        2000,
        () => {
          console.log('Done typing!');
        },
      ]}
      cursor={true}
      style={{ }}
      repeat={Infinity}
     /></span><span className='flex'><TypeAnimation
        sequence={[
        '"Web"',
        1000,
        '"Web Developer"',
        2000,
        () => {
          console.log('Done typing!');
        }
      ]}
      cursor={true}
      style={{  }}
      repeat={Infinity}
      />
      </span><span><TypeAnimation
        sequence={[
      ')',
      1000,
      ');',
      2000,
      () => {
        console.log('Done typing!');
      },
    ]}
    cursor={true}
    style={{ }}
    repeat={Infinity}
    /></span></h2>
    </div>
  )
}

export default About
