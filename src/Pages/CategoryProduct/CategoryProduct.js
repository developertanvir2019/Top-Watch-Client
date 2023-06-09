import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import './CategoryPro.css'
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Others/AuthProvider";
import Spinner from "../Shared/Spinner";

const CategoryProduct = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [modalopen, setmodalopen] = useState(null)
    const [data, setData] = useState([]);
    const { user } = useContext(AuthContext);
    const { category } = useParams();
    useEffect(() => {
        setLoading(true)
        fetch(`https://server-wine-three.vercel.app/${category}`)
            .then(res => res.json())
            .then(dataa => {
                setData(dataa)
                setLoading(false)
            })
    }, [category])

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const booking = {
            name: form.name.value,
            email: form.email.value,
            product: form.product.value,
            price: form.price.value,
            phone: form.phone.value,
            location: form.location.value,
        }
        fetch('https://server-wine-three.vercel.app/bookings/all', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Product Booked Successfully')
                    navigate('/dashboard/myOrders')
                    form.reset()

                }
                else {
                    toast.error(data.message)
                }
            })


        setmodalopen(!modalopen)
    }
    return (
        <div className="lg:mx-36">
            <h2 className="my-8 text-4xl font-semibold">Hare is our all <span className="text-secondary">{data[0]?.category}</span> Product</h2>
            {loading ? <Spinner></Spinner> :
                <div className="grid lg:grid-cols-2 gap-12 my-12 sm:grid-cols-1">
                    {
                        data?.map(d =>

                            <section key={d._id} className="mx-auto w-fit p-12">
                                <div className="w-72 h-fit group bg-gray-50">
                                    <div className="relative overflow-hidden">
                                        <img className="h-96 w-full object-cover" src={d?.photo} alt="" />
                                        <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <a href="#my-modal-2" className="btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600">Add to cart</a>
                                        </div>
                                    </div>
                                    <h2 className="mt-3 text-xl capitalize">{d?.name}</h2>
                                    <del className="text-red-700 text-lg">{d?.oldPrice}</del>
                                    <p className="text-xl mt-2 ml-1 inline-block">{d?.currentPrice}</p>
                                </div>
                                {!modalopen &&
                                    <div className="modal" id="my-modal-2">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-info py-4">Fill the form for Booking</h3>

                                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                                                <input readOnly defaultValue={user?.displayName ? user?.displayName : 'Default Name'} name='name' type="text" placeholder="Your name" className="input input-bordered w-full " />
                                                <input disabled defaultValue={user?.email} name='email' type="text" placeholder="Email address" className="input input-bordered w-full " />
                                                <input disabled defaultValue={d?.name} name='product' type="text" placeholder="Email address" className="input input-bordered w-full " />
                                                <input disabled defaultValue={`$${d?.currentPrice} Tk`} name='price' type="text" placeholder="Email address" className="input input-bordered w-full " />
                                                <input required name='phone' type="text" placeholder="Your Phone number" className="input input-bordered w-full " /> <br />
                                                <input required name="location" type="text" placeholder="Your Location" className="input input-bordered w-full" />

                                                <input className='btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 w-full ' type="submit" value='Submit' />
                                            </form>
                                        </div>
                                    </div>
                                }

                            </section>

                        )
                    }
                </div>

            }



        </div>
    );
};

export default CategoryProduct;