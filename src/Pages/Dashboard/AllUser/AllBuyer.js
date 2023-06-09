import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AllBuyer = () => {
    const [buyer, setBuyer] = useState([])
    useEffect(() => {
        fetch('https://server-wine-three.vercel.app/all/Buyers')
            .then(res => res.json())
            .then(data => setBuyer(data))
    }, [buyer])


    const deleteUser = async (id) => {
        try {
            const response = await fetch(`https://server-wine-three.vercel.app/users/${id}`, { method: 'DELETE' });
            const data = await response.json();
            if (response.ok) {
                toast.success('User deleted successfully!');
            } else {
                toast.error(`Error deleting user: ${data.error}`);
            }
        } catch (err) {
            toast.error(`Error deleting user: ${err.message}`);
        }
    };
    return (
        <div>
            <h2 className='text-4xl font-semibold text-secondary my-4'>All Buyers List</h2>
            <div className='overflow-x-auto w-full'>
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
                                        <button onClick={() => deleteUser(us._id)} className="btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 btn-xs">delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;