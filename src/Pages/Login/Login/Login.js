import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

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

    const handleSubmitForm =(event)=>{
event.preventDefault();
const email = emailRef.current.value;
const password = passwordRef.current.value;
signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event =>{
navigate('/register');
    }
    if(user){
      navigate(from, {replace: true});
    }

    return (
        <div className='container w-50 max-auto'>
            <h3 className='text-center text-primary'>Please Login.</h3>
            <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Login
      </Button>
    </Form>
    <p>Are you new genius car? <Link to='/register' onClick={navigateRegister} className='text-danger text-decoration-none'>Please Register</Link></p>
        </div>
    );
};

export default Login;