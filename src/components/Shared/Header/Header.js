import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className=' '>
      <>
        <nav className="top-0  z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-[#130f40] shadow">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/"
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                <img className='h-10' src="https://i.ibb.co/MVDZT3v/10033.png" alt="logo" />
              </Link>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FontAwesomeIcon className='text-white w-8 h-8' icon={faBars} />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-[#130f40] lg:bg-opacity-0 lg:shadow-none" +
                (navbarOpen ? " block" : " hidden")
              }
              id="example-navbar-warning"
            >
              <ul >

              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center ml-4">
                  <Link className='text-white font-bold text-md  hover:text-gray-300' to={'/'}>Home</Link>
                </li>
                <li className="flex items-center ml-4">
                  <Link className='text-white font-bold text-md  hover:text-gray-300' to={'/blog'}>Blog</Link>
                </li>
                <li className="flex items-center ml-4">
                  <Link className='text-white font-bold text-md  hover:text-gray-300' to={'/addproduct'}>Add Product</Link>
                </li>
                <li className="flex items-center ml-4">
                  <Link className='text-white font-bold text-md  hover:text-gray-300' to={'/manageproduct'}>Manage Product</Link>
                </li>
                <li className="flex items-center ml-4">
                  <Link className='text-white font-bold text-md  hover:text-gray-300' to={'/productdetails'}>Product Details</Link>
                </li>
                <li className="flex items-center ml-4">
                  <Link className='text-white font-bold text-md  hover:text-gray-300' to={'/myproduct'}>My Product</Link>
                </li>
                <li className="flex items-center">
                  <Link to={'/login'}>
                    <button
                      className="ml-4 mt-2 md:mt-0 bg-[#D15A18] text-white hover:text-gray-300  text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0  mb-3 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Log in
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;