import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Others/AuthProvider'
import { toast } from 'react-hot-toast';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFrom from '../../Pages/Dashboard/MyOrders/CheckoutFrom';

const CartProduct = () => {

    const stripePromise = loadStripe('pk_test_51M6AoIBSIlSsQgf2OlG5Vk0G8Y2lZfviCeidT0uD67RiiGjNRwpzho0jeUeVCQm21EWfw9x1kbRyrgnBsJ225Mxq00exB8m28L');
    const { CartProducts, setCartProducts } = useContext(AuthContext)

    const [quantities, setQuantities] = useState(Array(CartProducts.length).fill(1));

    const totalPrice = CartProducts.reduce((acc, curr, index) => {
        console.log();
        return acc + (curr.currentPrice * quantities[index]);
    }, 0);

    function removeProduct(index) {
        const newCartProducts = [...CartProducts]; // make a copy of the cartProducts array
        newCartProducts.splice(index, 1); // remove the product at the given index
        setCartProducts(newCartProducts); // update the cartProducts state with the new array
        toast.success('product remove success')
    }
    return (
        <div className="mx-auto mt-10">
            <div className="lg:flex shadow-md my-10">
                <div className="lg:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{CartProducts?.length} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>

                    {/* products */}

                    {
                        !CartProducts?.length ? <p className='text-2xl text-center text-blue-600 font-semibold'> No products found</p> :

                            CartProducts.map((pro, index) =>
                                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={pro.id}>
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={pro.photo} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{pro.name}</span>
                                            <span className="text-red-500 text-xs">{pro.category}</span>
                                            <p className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => removeProduct(index)} >Remove</p>
                                            {/* Here, we've added an onClick event listener to the "Remove" link that calls a function to remove the product from the cart */}
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <svg onClick={() => {
                                            const newQuantities = [...quantities]; // make a copy of the quantities array
                                            newQuantities[index] = Math.max(1, newQuantities[index] - 1); // decrement the quantity for this product
                                            setQuantities(newQuantities); // update the quantities state with the new array
                                        }} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>

                                        <input className="mx-2 border text-center w-8" type="text" value={quantities[index]} readOnly />
                                        {/* We've added the readOnly attribute to make sure the quantity input field is not editable by the user */}

                                        <svg onClick={() => {
                                            const newQuantities = [...quantities]; // make a copy of the quantities array
                                            newQuantities[index] = parseInt(newQuantities[index]) + 1; // increment the quantity for this product
                                            setQuantities(newQuantities); // update the quantities state with the new array
                                        }} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>

                                    </div>
                                    <div className="flex w-1/3 justify-end">
                                        <span className="text-gray-600 mx-auto">${pro.currentPrice}</span>
                                        <span className="text-gray-600 ml-0">${(parseInt(pro.currentPrice) * parseInt(quantities[index])).toFixed(0)}</span>
                                    </div>
                                    <input type="checkbox" id="my-modal-8" className="modal-toggle" />
                                    <label htmlFor="my-modal-8" className="modal cursor-pointer">
                                        <label className="modal-box relative" htmlFor="">
                                            <h3 className='text-xl font-semibold text-secondary py-2 text-center'>Please complete your payment</h3>
                                            <h3 className='text-2xl font-semibold text-center'>Payable amount BDT- <span className='text-primary'>{totalPrice + 120}</span></h3>
                                            <Elements stripe={stripePromise}>
                                                <CheckoutFrom data={{ price: totalPrice + 120 }} ></CheckoutFrom>
                                            </Elements>
                                        </label>
                                    </label>
                                </div>
                            )}

                    <a href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">

                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </a>
                </div>

                <div id="summary" className="lg:w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items = {CartProducts?.length}</span>
                        <span className="font-semibold text-sm">${totalPrice}</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $120</option>
                        </select>
                    </div>

                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>${totalPrice + 120}</span>
                        </div>
                        <label htmlFor="my-modal-8" className='uppercase w-full btn mt-4 rounded-none bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600'>Checkout</label>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CartProduct