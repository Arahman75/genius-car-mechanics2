import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <p>{description}</p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;