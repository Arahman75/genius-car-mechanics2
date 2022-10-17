import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p>All content reserved by {year} Abdur Rahman.</p>
        </div>
    );
};

export default Footer;