import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../Hooks/useServiceDetails';

const ServiceDetails = () => {
    const {serviceId} = useParams();
const [service] = useServiceDetails(serviceId);

    // const [service, setService] = useState({});

    // useEffect(()=>{
    //     const url =`https://nameless-shore-65260.herokuapp.com/service/${serviceId}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setService(data))
    // },[]);

    return (
        <div>
            <h2>You are about to book : {service.name}</h2>
            <div className='text-center'>
               <Link to={`/checkout/${serviceId}`}> <button className='btn btn-primary'>Proceed checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;