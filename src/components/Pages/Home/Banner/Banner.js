import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section id="header" className="bg-[url(https://i.ibb.co/72fjZWC/10014.jpg)] bg-no-repeat bg-cover px-10  h-[500px]" >
      <div className="md:flex text-center md:text-left justify-around items-center mx-auto pt-5 md:pt-0">
        <div className='md:w-8/12'></div>
        <div className=" mx-auto md:mx-0 mt-32 md:w-4/12" >
          <h6 className=" text-md text-white font-bold capitalize md:mb-5 mb-3 "data-aos="flip-left">new biker heaven</h6>
          <h1 className=" mb-6 uppercase text-white md:text-6xl text-3xl font-bold"data-aos="flip-left">bike rider</h1>
          <p className='text-sm text-white md:mb-6 mb-5  'data-aos="flip-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis blanditiis corrupti illum earum a temporibus quaerat laborum facilis dignissimos vitae!</p>
          <Link to={'/'} className='hover:bg-[#FF6500] md:text-2xl text-white font-bold border-2 rounded px-3 py-2 'data-aos="flip-left">See Details</Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;