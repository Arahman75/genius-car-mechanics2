import React from 'react';
import notfound from '../../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-danger'>Mechanics is Sleeping Now. <br /> Please you will coming next time!!</h1>
            <div className="text-center">
                <img src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;