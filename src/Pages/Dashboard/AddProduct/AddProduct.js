import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Others/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.files[0];



        // for upload image in imgBb and save firebase user...
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=8361c702450c4d4223bcf02628cc126f`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const product = {
                    name: form.name.value,
                    email: user?.email,
                    oldPrice: form.oldPrice.value,
                    currentPrice: form.currentPrice.value,
                    photo: data?.data?.display_url,
                    number: form.number.value,
                    location: form.location.value,
                    user: user,
                    description: form.description.value,
                    condition: form.condition.value,
                    category: form.category.value,
                }

                //send mongodb
                fetch('https://server-wine-three.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(product)
                }).then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            toast.success(data.message)
                            form.reset();
                            navigate('/dashboard/myProduct')
                        }
                        else {
                            toast.error(data.error)
                        }
                    })
                    .catch(err => {
                        toast.error(err.message)
                    })
                console.log(product);
            })

    }


    return (
        <div>
            <h2 className='text-center text-secondary font-bold text-3xl'>Add Product From hare</h2>
            <div>
                <div className='p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <form onSubmit={handleSubmit} className='space-y-12'>
                        <div className='space-y-4 grid grid-cols-2 gap-6'>
                            <div>
                                <label className='block mb-2 text-sm'>Product Name</label>
                                <input type='text' name='name' required placeholder='Enter Your product Name Here' className='mt-4 w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm'>Product old price</label>
                                <input type='text' name='oldPrice' required placeholder='Enter Your product old price Here' className=' w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm'>Product Resale price</label>
                                <input type='text' name='currentPrice' required placeholder='Enter Your product resale price Here' className='w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm'>Mobile number</label>
                                <input type='text' name='number' required placeholder='Enter Your mobile number Here' className='w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm'>Location</label>
                                <input type='text' name='location' required placeholder='Enter Your Location Here' className='w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm'>description</label>
                                <input type='text' name='description' required placeholder='Enter Your description number Here' className='w-full px-3 py-6 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900' />
                            </div>
                            <select name='condition' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Condition?</option>
                                <option>excellent</option>
                                <option>Good</option>
                            </select>
                            <select name='category' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Category</option>
                                <option>fastrack</option>
                                <option>casio</option>
                                <option>titan</option>
                            </select>
                            <div>
                                <label htmlFor='image' className='block mb-2 text-sm '>
                                    Select Image:
                                </label>
                                <input
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                    required
                                    className='file-input file-input-bordered file-input-secondary w-full max-w-xs'
                                />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-secondary'>Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;