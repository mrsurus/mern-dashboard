import React from 'react';

const Detailsmodal = ({ details }) => {
    const { oderId, to, from, address, quantity } = details
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='text-center text-2xl font-bold my-3'>Order Details</p>
                    <p> <span className='font-bold text-xl '>OrderId:</span>  {oderId}</p>
                    <p> <span className='font-bold text-xl'>To:</span>  {to}</p>
                    <p> <span className='font-bold text-xl'>From:</span>  {from}</p>
                    <p> <span className='font-bold text-xl'>Address:</span>  {address}</p>
                    <p> <span className='font-bold text-xl'>Quantity:</span>  {quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default Detailsmodal;