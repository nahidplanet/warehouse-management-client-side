import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase/firebase.init";
import Loading from "../Loading/Loading";




function RequireAuth({ children }) {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  let location = useLocation();


  if (loading) {
    return <Loading ></Loading>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="border-2 rounded-lg p-10">
        <h1 className="text-[#D15A18] font-bold capitalize text-3xl">Please Verify Your Email</h1>
        <p className="text-[#130F40] font-semibold capitalize text-lg mt-2">check your email inbox or spam </p>
        <button onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }} className="text-white font-bold capitalize text-xl border-2 rounded-lg mt-2 bg-gray-800 py-2 px-3">Resend</button>
      </div>
    </div>
  }

  return children;
}
export default RequireAuth;