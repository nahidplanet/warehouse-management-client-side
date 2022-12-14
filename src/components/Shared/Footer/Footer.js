import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { f} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const gitlink  = () =>{
return window.location.assign('https://github.com/nahidplanet');
  }
  const fblink  = () =>{
return window.location.assign('https://web.facebook.com/bu.nahid2021');
  }
  return (
    <div>
      <>
        <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-[#130f40]">
          
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap text-center lg:text-left ">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-white">
                  Find us on any of these platforms, we respond 1-2 business days.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6 flex">
                  <button
                  onClick={gitlink}
                    className="bg-white flex justify-center items-center text-white shadow-lg font-normal h-10 w-10  align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                   <img className='w-8 h-8' src="https://i.ibb.co/Sx6Zxfx/icons8-github-48.png" alt="git" />
                  </button>
                  <button
                  onClick={fblink}
                    className="bg-white flex justify-center items-center text-white shadow-lg font-normal h-10 w-10  align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <img className='w-8 h-8' src="https://i.ibb.co/hDZtYW9/icons8-facebook-48.png" alt="fb" />
                  </button>
                  <button
                  onClick={gitlink}
                    className="bg-white flex justify-center items-center text-white shadow-lg font-normal h-10 w-10  align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                   <img className='w-8 h-8' src="https://i.ibb.co/Sx6Zxfx/icons8-github-48.png" alt="git" />
                  </button>
                  <button
                  onClick={fblink}
                    className="bg-white flex justify-center items-center text-white shadow-lg font-normal h-10 w-10  align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <img className='w-8 h-8' src="https://i.ibb.co/hDZtYW9/icons8-facebook-48.png" alt="fb" />
                  </button>
                  
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-white text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/presentation?ref=nr-footer"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
                          href="https://blog.creative-tim.com?ref=nr-footer"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
                          href="https://www.github.com/creativetimofficial?ref=nr-footer"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                        >
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-sm font-semibold mb-2 text-white">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
                          href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
                        >
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/terms?ref=nr-footer"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/privacy?ref=nr-footer"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/contact-us?ref=nr-footer"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold text-white py-1">
                  Copyright ?? {new Date().getFullYear()} Rayz by{" "}
                  <a
                    href="https://github.com/nahidplanet" 
                    className="text-white hover:text-gray-400"
                  >
                    Nahid Hasan
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;