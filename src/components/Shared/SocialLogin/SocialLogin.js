import axios from 'axios';
import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading'

const SocialLogin = () => {
  let errorShow;
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userG, loadingG, errorG] = useSignInWithGithub(auth);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  }
  const handleGithubLogin = () => {
    signInWithGithub();
  }

  if (user || userG) {
    navigate(from, { replace: true });
  }


  if (errorG || error) {
    errorShow = <p className='text-red-600'> {error.message || errorG.message}</p>
  }
  return (
    <div className="rounded-t mb-0 px-6 py-6 ">

      <div className="text-center mb-3">
        <h6 className="text-[#130F40] text-sm font-bold">
          Sign in with
        </h6>
      </div>
      <div className="btn-wrapper text-center">
        <button
          onClick={handleGithubLogin}
          className="bg-white active:bg-blueGray-50 text-[#130F40]  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
          type="button"
        >
          <img
            alt="..."
            className="w-5 mr-1"
            src={require("../../../images/form/github.svg").default}
          />
          Github
        </button>
        <button
          onClick={handleGoogleLogin}
          className="bg-white active:bg-blueGray-50 text-[#130F40]  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
          type="button"
        >
          <img
            alt="..."
            className="w-5 mr-1"
            src={require("../../../images/form/google.svg").default}
          />
          Google
        </button>
      </div>
      <hr className="mt-6 border-b-1 border-blueGray-300" />
      {errorShow}
    </div>
  );
};

export default SocialLogin;