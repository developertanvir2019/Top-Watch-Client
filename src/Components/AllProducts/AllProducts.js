import React, { useContext, useEffect, useState } from 'react'
import Spinner from '../../Pages/Shared/Spinner';
import { AuthContext } from '../../Others/AuthProvider';
import { toast } from 'react-hot-toast';

const AllProducts = () => {
    const [allProducts, setAlProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cartNumber, setCartNumber, CartProducts, setCartProducts } = useContext(AuthContext)
    useEffect(() => {
        setLoading(true)
        fetch('https://server-wine-three.vercel.app/api/allProducts')
            .then(res => res.json())
            .then(data => {
                setAlProducts(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='mt-12'>
            <h2 className="text-4xl font-semibold text-center">Products of the week</h2>
            <div className='flex justify-center items-center'>
                <div className='flex mt-4'>
                    <a href='/#' className='text-lg mx-3 font-medium'>Best Seller </a>
                    <a href='/#' className='text-lg mx-3 font-medium text-gray-400'>Hot Collection</a>
                    <a href='/#' className='text-lg mx-3 font-medium text-gray-400'>Trendy</a>
                </div>
            </div>
            {/* jfaijfaelofjioaifjaiofjoaifjeioooooooooow */}
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20  lg:gap-x-24 md:gap-x-12 sm:gap-x-8 mt-10 mb-5">
                {
                    loading ? <Spinner /> :
                        allProducts?.map(d =>
                            <div key={d._id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <div>
                                    <img src={d?.photo} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                                    <div className="px-4 py-3 w-72">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">{d?.category}</span>
                                        <p className="text-lg font-bold text-black truncate block capitalize">{d.name}</p>
                                        <div className="flex items-center">
                                            <p className="text-lg font-semibold text-black cursor-auto my-3">${d.currentPrice}</p>
                                            <del>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2">${d.oldPrice}</p>
                                            </del>
                                            <div onClick={() => {
                                                // Check if product already exists in cartProducts array
                                                const productIndex = CartProducts.findIndex(product => product._id === d._id);
                                                if (productIndex === -1) {
                                                    setCartProducts([...CartProducts, d]); // Add product to cartProducts array
                                                    setCartNumber(cartNumber + 1); // Increment cartNumber
                                                    toast.success('Product added to your cart. Please check your cart.'); // Show success toast
                                                } else {
                                                    toast.error('This product is already in your cart.'); // Show error toast if product already exists
                                                }
                                            }} className="ml-auto flex justify-center items-center bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 px-2 py-1  text-white font-semibold cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                </svg> <span>add to cart</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                }
            </section>



        </div>
    )
}

export default AllProducts