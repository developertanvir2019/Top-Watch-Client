import React, { useEffect, useState } from 'react';

const AllBuyer = () => {
    const [buyer, setBuyer] = useState([])
    console.log(buyer);
    useEffect(() => {
        fetch('https://server-wine-three.vercel.app/all/Buyers')
            .then(res => res.json())
            .then(data => setBuyer(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-semibold text-secondary my-4'>All Buyers List</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyer.map(us =>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyer;