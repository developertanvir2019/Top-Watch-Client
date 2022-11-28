import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Others/AuthProvider';

const MyOrders = () => {
    const [product, setProduct] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user);
    useEffect(() => {
        fetch(`https://server-wine-three.vercel.app/bookings/all?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [user])
    return (
        <div>
            <h3 className='mb-6 text-secondary text-4xl text-semibold'>My All Order is Hare</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>ProductName</th>
                            <th>pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(p =>
                                <tr key={p._id}>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <th>{p.product}</th>
                                    <td><button className='btn btn-xs btn-secondary'>Pay</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;