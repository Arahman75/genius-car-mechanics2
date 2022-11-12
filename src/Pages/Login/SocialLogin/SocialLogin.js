import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import auth from '../../../firebase.init';
import {useSignInWithGithub, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shaired/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

const navigate = useNavigate();
const location = useLocation();
let from = location?.state?.from?.pathname || '/';

let errorElement;

if(loading || loading1){
    return <Loading></Loading>
}

if (error || error1) {
   
    errorElement =<p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    
   
  }

if(user || user1){
    // navigate('/home');
    navigate(from, {replace: true});
}

    return (
       <div>
         <div className='d-flex align-items-center'>
            <div style={{height:'2px'}} className='bg-primary w-50'></div>
            <p className='mt-2 mx-3'>or</p>
            <div style={{height:'2px'}} className='bg-primary w-50'></div>
          
        </div>
        {errorElement}
        <div>
                <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                     <span className='mx-2'>Google Sign In</span> </button>

                <button 
               className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img height='30px' src={facebook} alt="" />
                     <span className='mx-2'>Facebook Sign In</span> </button>

                <button  onClick={()=> signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                     <span className='mx-2'>Github Sign In</span> </button>
            </div>
       </div>
    );
};

export default SocialLogin;