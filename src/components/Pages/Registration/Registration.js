import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';

const Registration = () => {
  const [check, setCheck] = useState(false);
  const [showError ,setShowError] =useState();
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
  
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');


  const handleRegistration = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    
    if (password !== confirmPassword) {
      setShowError('password not Matching..');
      return;
    }
    else{
      await createUserWithEmailAndPassword(email,password);
    }
   
    
  }
  if (user) {
    navigate('/home');
  }


  return (
    <div>
      <div>
        <>
          <div className="container mx-auto px-4  mt-8 ">
            <div className="flex content-center items-center justify-center">
              <div className="lg:w-5/12  w-9/12   rounded-md">
                <div className=" flex flex-col min-w-0 break-words border-[#130F40]   mb-6 shadow-lg rounded-lg bg-blueGray-200 border">

                  <SocialLogin></SocialLogin>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-[#130F40] text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>


                    <form onSubmit={handleRegistration}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-[#130F40] text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          ref={emailRef}
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-[#130F40] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-[#130F40] text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          ref={passwordRef}
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-[#130F40] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-[#130F40] text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Confirm Password
                        </label>
                        <input
                          ref={confirmPasswordRef}
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-[#130F40] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Confirm Password"
                          required
                        />
                      </div>
                      <p className='text-red-600'>
                      {showError&&showError}
                      </p>

                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            onClick={()=>setCheck(!check)}
                            
                          />
                          <span className="ml-2 text-sm font-semibold text-[#130F40]">
                            Agree With Rayz?
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <input
                        disabled={!check}
                        className={` text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 ${check ? 'bg-[#130F40] cursor-pointer ':"bg-[#140f4279]"}`}
                        type="submit"
                         value="Registration" />

                        
                      </div>
                    </form>


                    <div className="flex flex-wrap mt-6 relative">
                      <div className="w-1/2">
                        <Link
                          to={'/forgetpassword'}
                          className="text-[#130F40]"
                        >
                          <small>Forgot password?</small>
                        </Link>
                      </div>
                      <div className="w-1/2 text-right cursor-pointer">
                        <Link to="/login" className="text-[#130F40]">
                          <small>Have a Account?</small>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Registration;