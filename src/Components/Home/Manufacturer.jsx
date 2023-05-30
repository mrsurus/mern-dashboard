import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Manufacturer = ({address}) => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm()

    const uniqueId = () => {
        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substr(2);
        return (dateString + randomness).toUpperCase()
    };

    const handlePush =(data) => {
        
        const user = {
            oderId: data.oderid,
            to: data.to,
            from: data.from,
            address: address,
            quantity:data.quantity,
            transporter: data.transporter
        }
        fetch('https://mern-dashboard-server.vercel.app/oders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire(
                'Good job!',
                'Sent to Transporter!',
                'success'
              )
              reset()
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://images.pexels.com/photos/2880872/pexels-photo-2880872.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <p className='bg-base-200 text-5xl p-16 rounded-2xl '>This is manufictures home.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-3/5 shadow-2xl bg-base-100">
                        <p className='text-center text-3xl font-semibold mt-8'>Oder details</p>
                        
                        <form onSubmit={handleSubmit(handlePush)} className="card-body">
                            <div className='lg:flex justify-between '>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Order ID</span>
                                    </label>
                                    <input
                                    {...register('oderid')}
                                     type="text" placeholder="Order ID" className="input input-bordered" defaultValue={uniqueId()} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input
                                    {...register('to')}
                                     type="text" placeholder="To" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='lg:flex lg:justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">From</span>
                                    </label>
                                    <input
                                    {...register('from')}
                                     type="text" placeholder="From" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input
                                    {...register('quantity')}
                                     type="number" placeholder="Quantity" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='lg:flex justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                    {...register('address')}
                                     type="text" placeholder="Address" defaultValue={address} className="input input-bordered" />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>Transporter</span>
                                    </label>
                                    <select
                                    {...register('transporter')}
                                     name="condition" className="select select-bordered w-full   " required>
                                        <option>Transporter 1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Push</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manufacturer;