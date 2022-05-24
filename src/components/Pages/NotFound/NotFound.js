
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=  useNavigate();
    return (
        <div data-aos="fade-left" className='w-full h-80vh cursor-pointer'>
            <img onClick={()=>navigate("/home")} className='w-full h-full' src="https://i.ibb.co/2c7q9rB/x.jpg" alt="" />
        </div>
    );
};

export default NotFound;