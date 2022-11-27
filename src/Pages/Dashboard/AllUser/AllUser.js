import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../Shared/Spinner';

const AllUser = () => {
    const [user, setUSer] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/allUsers')
            .then(res => res.json())
            .then(data => {
                setUSer(data)
                setLoading(false)
            })
    }, [])


    const handleMakeAdmin = id => {
        console.log(id);
        fetch(`http://localhost:5000/users/admin/${id}`, {
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
                        toast.error(data.message)
                    }
                }))
    }
    return (
        <div>
            {
                loading ?
                    <div className='flex justify-center items-center'><Spinner></Spinner></div> :
                    <h2 className='text-center text-3xl font-bold text-secondary mb-5'>ALL Users</h2>
            }


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>add admin</th>
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
                                        <button onClick={() => handleMakeAdmin(us._id)} className="btn btn-secondary btn-xs">add Admin</button>
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

export default AllUser;