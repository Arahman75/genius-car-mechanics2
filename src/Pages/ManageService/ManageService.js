import React from 'react';
import useService from '../../Hooks/useService';

const ManageService = () => {
    const [services, setServices] = useService();

    const handleDeleteService = id =>{
        const proceed = window.confirm('Are you sure? delete your service.')
        if(proceed){
            const url = `https://nameless-shore-65260.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        const remaining = services.filter(service => service._id !== id);
        setServices(remaining)
        })
        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Manage Your Services : {services.length}</h3>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={()=> handleDeleteService(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;