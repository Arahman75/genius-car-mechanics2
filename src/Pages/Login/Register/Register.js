import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shaired/Loading/Loading';
import PageTitle from '../../Shaired/PageTitle/PageTitle';


const Register = () => {
const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
//update profile name
const [updateProfile, updating, updateError] = useUpdateProfile(auth);
     
 const navigateLogin=()=>{
        navigate('/login')
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if(user){
       console.log('user', user) ;
    }


    const handleRegisterForm =async(event) =>{
        event.preventDefault();
const name = event.target.name.value;
const email = event.target.email.value;
const password = event.target.password.value;
//checkbox checked
// const agree = event.target.terms.checked;
// if(agree){
//     createUserWithEmailAndPassword(email, password);
// }
await  createUserWithEmailAndPassword(email, password);
await updateProfile({ displayName: name });
console.log('Updated profile');
navigate('/home');

    }

    return (
        <div className='register-form'>
            <PageTitle title='Register'></PageTitle>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
           <form onSubmit={handleRegisterForm}>
           <input type="text" name="name" id="" placeholder='Your name' />
            <input type="email" name="email" id="" placeholder='Email address' required/>
            <input type="password" name="password" id="" placeholder='password' required/>
            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms And Conditions</label> */}
            <label className={`ps-2 ${agree? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms And Conditions</label>
            <input 
            disabled ={!agree} 
            className='w-50 d-block mx-auto btn btn-primary mt-2' 
            type="submit" value="Register" />
           </form>
           <p>All ready have an account? <Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none'>Please Login</Link></p>
           <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;