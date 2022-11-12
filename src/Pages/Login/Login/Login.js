import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shaired/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
// show toast
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shaired/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmitForm =async(event)=>{
event.preventDefault();
const email = emailRef.current.value;
const password = passwordRef.current.value;
await signInWithEmailAndPassword(email, password);
const {data} = await axios.post('http://localhost:5000/login',{email});
localStorage.setItem('accessToken', data.accessToken);
navigate(from, {replace: true});
    }

    const navigateRegister = event =>{
navigate('/register');
    }

const resetPassword= async()=>{
  const email = emailRef.current.value;
  if(email){
    await sendPasswordResetEmail(email);
  toast('Sent email');
  }
  else{
    toast('Please enter your email address');
  }
}

    if(user){
      // navigate(from, {replace: true});
    }
    let errorElement;

    if(loading || sending){
      return <Loading></Loading>
    }
    if (error) {
       
        errorElement =<p className='text-danger'>Error: {error?.message}</p>
          
       
      }


    return (
        <div className='container w-50 max-auto'>
          <PageTitle title='Login'></PageTitle>
            <h3 className='text-center text-primary'>Please Login.</h3>
            <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
       Login
      </Button>
    </Form>
    {errorElement}
    <p>Are you new genius car? <Link to='/register' onClick={navigateRegister} className='text-primary text-decoration-none'>Please Register</Link></p>
    <p>Forget password? <button onClick={resetPassword} className='text-primary text-decoration-none btn btn-link'>Reset Password</button></p>
    <div>
    <SocialLogin></SocialLogin>
    <ToastContainer />
    </div>
        </div>
       
    );
};

export default Login;