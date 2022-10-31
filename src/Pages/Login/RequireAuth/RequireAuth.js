import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shaired/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    // console.log('inside requireAuth', user);
    const location = useLocation();
    // email verified
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    //show loading
if(loading){
    return <Loading></Loading>
}

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
   // first user teke and sign porjonto google verified na korar jonno kora hoiche
    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div>
            <h3 className='text-danger'>Your Email is not Verified!!</h3>
            <p className='text-success'>Please Verify Your Email Address</p>
            <button className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
       Send Verification Email Agin
      </button>
      <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;