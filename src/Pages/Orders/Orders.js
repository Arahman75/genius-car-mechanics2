
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
const navigate = useNavigate();
    useEffect(()=>{
        const getOrders= async()=>{
            const email= user.email;
            const url=`https://nameless-shore-65260.herokuapp.com/order?email=${email}`;
          try{
            // const {data} = await axios.get(url,{
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
            //     }
            // });

        const {data} = await axiosPrivate.get(url);

            setOrders(data);
          }
          catch(error){
console.log(error.message);
if(error.response.status === 401 || error.response.status === 403){
    signOut(auth);
navigate('/login');
}
          }
                }
                getOrders();

    },[user])
  
    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Orders;