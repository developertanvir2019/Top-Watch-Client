import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Others/AuthProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';
const MyOrders = () => {
    const stripePromise = loadStripe('pk_test_51M6AoIBSIlSsQgf2OlG5Vk0G8Y2lZfviCeidT0uD67RiiGjNRwpzho0jeUeVCQm21EWfw9x1kbRyrgnBsJ225Mxq00exB8m28L');
    const [product, setProduct] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user);
    useEffect(() => {
        fetch(`https://server-wine-three.vercel.app/bookings/all?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [user])



    // for payment 



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
                                    <td><label htmlFor="my-modal-8" className='btn btn-sm px-5 bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600'>Pay</label></td>

                                    {/* modal */}

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my-modal-8" className="modal-toggle" />
                                    <label htmlFor="my-modal-8" className="modal cursor-pointer">
                                        <label className="modal-box relative" htmlFor="">
                                            <h3 className='text-xl font-semibold text-secondary py-2 text-center'>{p.product}</h3>
                                            <h3 className='text-2xl font-semibold text-center'>Payable amount BDT- <span className='text-primary'>{p?.price}</span></h3>
                                            <Elements stripe={stripePromise}>
                                                <CheckoutFrom data={p} ></CheckoutFrom>
                                            </Elements>
                                        </label>
                                    </label>

                                    {/* modal */}
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