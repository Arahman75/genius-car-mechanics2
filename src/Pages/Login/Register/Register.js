import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

     

    const navigateLogin=()=>{
        navigate('/login')
    }
    if(user){
        navigate('/home');
    }


    const handleRegisterForm = event =>{
        event.preventDefault();
const name = event.target.name.value;
const email = event.target.email.value;
const password = event.target.password.value;

createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
           <form onSubmit={handleRegisterForm}>
           <input type="text" name="name" id="" placeholder='Your name' />
            <input type="email" name="email" id="" placeholder='Email address' required/>
            <input type="password" name="password" id="" placeholder='password' required/>
            <input type="submit" value="Register" />
           </form>
           <p>All ready have an account? <Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;