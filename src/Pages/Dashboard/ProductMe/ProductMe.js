import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Others/AuthProvider';

const ProductMe = () => {
    const [product, setProduct] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://server-wine-three.vercel.app/my/product?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [user])



    const handleDelete = id => {
        fetch(`http://localhost:5000/myProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Product deleted successfully')
                }
            })
    }
    return (
        <div>
            <h3 className='mb-6 text-secondary text-4xl text-semibold'>My All Product</h3>

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
                                    <td><button onClick={() => handleDelete(p._id)} className='btn btn-xs btn-secondary'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductMe;