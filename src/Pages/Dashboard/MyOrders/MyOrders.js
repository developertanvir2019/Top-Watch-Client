import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Others/AuthProvider';

const MyOrders = () => {
    const [product, setProduct] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/my/product?email=${user.email}`)
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
                            <th>Sale Status</th>
                            <th>Price</th>
                            <th>ProductName</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(p =>
                                <tr key={p._id}>
                                    <td>{p.name}</td>
                                    <td>{p.currentPrice}</td>
                                    <th>Available</th>
                                    <td><button className='btn btn-xs btn-secondary'>Delete</button></td>
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