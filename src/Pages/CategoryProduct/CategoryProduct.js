import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Others/AuthProvider";

const CategoryProduct = () => {
    const [modalopen, setmodalopen] = useState(null)
    const data = useLoaderData()
    const { user } = useContext(AuthContext);

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
        fetch('http://localhost:5000/bookings/all', {
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

            <div className="grid lg:grid-cols-2 gap-12 my-12 sm:grid-cols-1">
                {
                    data.map(d =>
                        <div key={d._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className="w-44 h-48" src={d?.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-secondary">{d.name}</h2>
                                <div className="flex justify-between ">
                                    <div>
                                        <p className="text-xl text-info">Resale Price =${d.currentPrice}</p>
                                        <p className="text-xl text-info">Original Price =${d.oldPrice}</p>
                                    </div>
                                    <div>
                                        <h2>total used= 2 month</h2>
                                        <h2>Zone-{d.location}</h2>
                                    </div>
                                </div>
                                <h2 className="text-secondary text-xl">Seller - {d?.user?.displayName}✔️</h2>
                                <div className="card-actions">
                                    <a href="#my-modal-2" className="btn btn-secondary">Book Now</a>
                                </div>
                            </div>
                            {/* modal */}
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

                                            <input className='btn btn-secondary w-full ' type="submit" value='Submit' />
                                        </form>
                                    </div>
                                </div>
                            }






                            {/* modal */}
                        </div>
                    )
                }
            </div>





        </div>
    );
};

export default CategoryProduct;