import React, { useEffect, useState } from 'react';

const AllSeller = () => {
    const [seller, setSeller] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/all/seller')
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-semibold text-secondary my-4'>All Sellers List</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Remove</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seller.map(us =>
                            <tr key={us._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={us?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{us?.email}</td>
                                <td>{us?.userName}</td>
                                <td>
                                    <button className="btn btn-secondary btn-xs">delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-secondary btn-xs">Verify</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;