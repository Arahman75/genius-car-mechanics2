import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../Hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


const CheckOut = () => {
    const {serviceId} =useParams();
    const [service] =useServiceDetails(serviceId);
    const [user] = useAuthState(auth);

//     const [user, setUser] = useState({
//         name:'Tanvir Emon',
//         email:'tanvir@emon.com',
//         address:'banshkhali',
//         phone:'001944788848'
//     });
// const handleAddressChange = event =>{
//     console.log(event.target.value);
// const {address, ...rest} = user;
// const newAddress = event.target.value;
// const newUser = {address: newAddress, ...rest}
// console.log(newUser);
// setUser(newUser);
// }

const handlePlaceOrder = event =>{
    event.preventDefault();
    const order={
        email: user.email,
        service: service.name,
        serviceId: serviceId,
        address: event.target.address.value,
        phone: event.target.phone.value
    }
    axios.post('https://nameless-shore-65260.herokuapp.com/order', order)
    .then(response=>{
        const {data} = response;
        if(data.insertedId){
            toast('Your order is booked!!');
            event.target.reset();
        }
        // console.log(response);
    })
}

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name='name' placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' value={user?.email} type="email" name='email' placeholder='email' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='service' required readOnly/>
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' autoComplete='off' required/>
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' autoComplete='off' required/>
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order"/>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;