import React, { useRef, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTopButton() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        buttonRef.current.style.opacity = '1';
      } else {
        buttonRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        className="fixed z-20 top-[85%] rounded-full shadow-lg bg-gray dark:bg-blue dark:hover:bg-white hover:bg-transparent hover:shadow-2xl hover:shadow-black shadow-black-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200"
        onClick={handleClick}
        ref={buttonRef}
        style={{ opacity: 0 }}
       >
        <FaArrowUp size={24} />
      </button>
    </>
  );
}

export default BackToTopButton;