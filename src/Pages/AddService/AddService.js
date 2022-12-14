import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://nameless-shore-65260.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add User</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name")} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
               <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
               <input className='mb-3' placeholder='Photo Url' type='text' {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;