import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, img, description, price} = service;
    
const navigate = useNavigate();
const navigateToServiceDetails=id=>{
navigate(`/service/${id}`);
}

    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <p>{description}</p>
            <button onClick={() =>navigateToServiceDetails(_id)}>Book: {name}</button>
        </div>
    );
};

export default Service;