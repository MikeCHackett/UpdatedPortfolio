import React from 'react';
import { useState, useEffect } from 'react';

const DarkModeFilter = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    );

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    console.log(darkQuery, "darkQuery");

    const element = document.documentElement

    function onWindowMatch(){
        if(localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && darkQuery.matches)
        ) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }

    onWindowMatch();

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            break;

            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            break;

            default:
                localStorage.removeItem('theme');
                break;
        }
    }, [theme, element.classList]);
    


    darkQuery.addEventListener('change', (e) => {
        if(!('theme' in localStorage)) {
            if(e.matches) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark');
            }
        }
    })

    const options = [
        {
            icon: "sunny",
            text: 'light',
        },
        {
            icon: "moon",
            text: 'dark',
        },
    ]


  return (
    <div className='fixed flex flex-col top-[10%] z-10 cursor-pointer hover:bg-transparent text-black rounded-full shadow-lg bg-gray dark:bg-blue shadow-black-200 m-2 p-1'>
        {
            options?.map(opt=> (
                <button 
                key={opt.text} 
                onClick={() => setTheme(opt.text)}
                className={`w-10 h-10 leading-9 text-xl dark:text-white hover:text-white dark:bg-black dark:hover:bg-white hover:bg-black dark:hover:text-blue hover:scale-110 ease-in-out duration-200 rounded-full m-1 
                ${theme === opt.text && ' bg-black text-white dark:text-blue z-0'}`}>
                    <ion-icon className='z-0' name={opt.icon}></ion-icon>
                </button>
            ))
        }
    </div>
  )
}

export default DarkModeFilter;