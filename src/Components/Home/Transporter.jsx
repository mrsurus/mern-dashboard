import React, { useEffect, useState } from 'react';

const Transporter = ({setDetails}) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/oderget')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='mx-10'>
            <div className='w-3/4 mx-auto shadow-2xl p-10 m-10 text-center'>
                <p className='text-5xl font-semibold'>This is transporter Home</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat laborum doloribus odio hic asperiores impedit harum, iusto id neque iure magni, error maxime laudantium ea nostrum numquam quisquam! Accusamus officia a itaque incidunt et nesciunt, perferendis vitae minima aliquam quaerat.</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Reply</th>
                            <th>OderId</th>
                            <th>Price</th>
                            <th >dtails </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            orders?.map((order) =>
                                <tr key={order._id}>
                                    <th><button className='btn btn-sm btn-primary'>Reply</button></th>
                                    <td>{order.oderId}</td>
                                    <td>
                                        <input className='border border-gray-800 rounded-lg' placeholder=' Price' type="text" />
                                    </td>
                                    <td><label onClick={()=> setDetails(order)} htmlFor="my-modal-3" className="btn btn-sm">Details</label></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transporter;