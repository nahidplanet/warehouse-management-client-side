import React from 'react';

const Button = (props) => {
  return (
    <span className=''>
    <button  className='text-right font-bold text-md border-gray-300 border-sm text-[#090622]  px-3 py-2  bg-white mb-6 shadow-lg rounded-lg bg-lightBlue-500'>{props.children}</button>

    </span>
    );
};

export default Button;

// 