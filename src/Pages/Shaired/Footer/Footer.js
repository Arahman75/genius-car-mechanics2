import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5'>
            <p>All content reserved by {year} Abdur Rahman.</p>
        </div>
    );
};

export default Footer;