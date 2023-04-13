import React from 'react';
import ProjectItem from './ProjectItem';
import Project1 from '../assets/utube.png';
import Project2 from '../assets/hero.png';
import Project3 from '../assets/macmiller.png';
import Project4 from '../assets/sorrells.png';
import Project5 from '../assets/nintenmatch.png';
import { FaReact, FaCss3, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVite, SiMongodb, SiExpress, SiMaterialui } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { TbApi } from 'react-icons/tb';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] h-screen m-auto md:pl-20 p-4 md:py-16 py-[40rem]'>
        <h1 className='title'>Projects</h1>
        <p className='subtitle dark:text-white text-black'>
        These are some projects I'd like to highlight. More projects coming soon...
        </p>
        <div className='grid sm:grid-cols-2 md:gap-32 gap-10'>
            <ProjectItem img={Project1} href1='https://u-tube-clone-app.netlify.app/' href2='https://github.com/MikeCHackett/utube-clone-app' title='Utube clone'  builtWith={<FaReact color='#61DAFB' size={20} />} builtWiths={<SiMaterialui color='rgb(0, 127, 255)' size={20}/>} builtWithAlso={<TbApi color='#8b5cf6' size={20} />} />
            <ProjectItem img={Project2} href1='https://elogicalwebservices.netlify.app/' href2='https://github.com/MikeCHackett/E-Logical-Website' title='E-logical Web Services' builtWith={<FaReact color='#61DAFB' size={20} />} builtWiths={<SiTailwindcss color='#7DD3FC' size={20} />} builtAlso={<SiVite color='#646cFF' size={20} />} />
            <ProjectItem img={Project3} href1='https://mikechackett.github.io/Favorite-Artist-Blog/' href2='https://github.com/MikeCHackett/Favorite-Artist-Blog' title='Mac Miller Store' builtWith={<FaHtml5 color='#EA4335' size={20} />} builtWiths={<FaCss3 color='#1D7EAD' size={20} />} builtAlso={<SiJavascript color='#FCDC00' size={20} />} />
            <ProjectItem img={Project4} href1='https://sorrellsinsurancesolutions.com/' href2='https://github.com/MikeCHackett/InsuranceSite' title='Sorrells Insurance Solutions' builtWith={<FaReact color='#61DAFB' size={20} />} builtWiths={<FaCss3 color='#1D7EAD' size={20} />} />
            <ProjectItem img={Project5} href1='https://nintenmatch.netlify.app/' href2='https://github.com/MikeCHackett/ninten-match' title='NintenMatch' builtWith={<FaReact color='#61DAFB' size={20} />} builtWiths={<SiTailwindcss color='#7DD3FC' size={20} />}/>
        </div>
      
    </div>
  )
}

export default Projects
