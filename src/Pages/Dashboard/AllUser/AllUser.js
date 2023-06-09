import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../Shared/Spinner';

const AllUser = () => {
    const [user, setUSer] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('https://server-wine-three.vercel.app/allUsers')
            .then(res => res.json())
            .then(data => {
                setUSer(data)
                setLoading(false)
            })
    }, [])


    const handleMakeAdmin = id => {
        console.log(id);
        fetch(`https://server-wine-three.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()
                .then(data => {
                    if (data.modifyCount > 0) {
                        toast.success('Make Admin Successfully')
                        // refetch()
                    }
                    else {
                        toast.error('you are not authorized for make admin...Because you are not a admin')
                    }
                }))
    }
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-secondary mb-5'>ALL Users</h2>

            <div className="overflow-x-auto w-full">
                {
                    loading ?
                        <div className='flex justify-center items-center'><Spinner></Spinner></div> :
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    user.map(us =>
                                        <tr key={us._id}>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={us?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{us?.email}</td>
                                            <td>{us?.role}</td>
                                            <td>
                                                <button onClick={() => handleMakeAdmin(us._id)} className="btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 btn-xs">add Admin</button>
                                            </td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default AllUser;