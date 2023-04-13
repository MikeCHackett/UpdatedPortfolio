import React from 'react'
import WorkItem from './WorkItem';

const data = [
    {
        company: 'InvestCloud Inc',
        title: 'Frontend Developer',
        from: 'April 2022',
        to: 'Current',
        details: 'Successfully built, tested and deployed web applications using a proprietary programming language called PWP.'
    },
    {
        company: 'E-logical Web Services',
        title: 'Freelance Developer',
        from: 'June 2021',
        to: 'Current',
        details: 'Developed, designed and tested innovative user-friendly web pages for clients using React, HTML, CSS, Tailwind and JavaScript.'
    },
    {
        company: 'Council Oak',
        title: 'Lead Cook',
        from: 'May 2019',
        to: 'April 2022',
        details: 'Improved team composition by leading the organization of the kitchen.'
    },
    {
        company: 'Rise',
        title: 'Line Cook',
        from: 'April 2018',
        to: 'May 2019',
        details: 'Work cross-functionally with the kitchen team to prepare excellent quality services.'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] h-screen m-auto md:pl-20 p-4 md:py-[16rem] py-[55rem]'>
        <h1 className='title'>
            Resume
        </h1>
        <p className='subtitle'>Professional Experience...</p>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            company={item.company} 
            title={item.title} 
            from={item.from} 
            to={item.to} 
            details={item.details} />
        ))}
      
    </div>
  )
}

export default Work
