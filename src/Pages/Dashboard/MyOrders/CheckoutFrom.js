import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutFrom = ({ data }) => {

    const { price } = data;
    const [cardError, setError] = useState('');
    const [transition, settransition] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://p-hero-task-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data?.clientSecret));
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
        }
        else {
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: '',
                    },
                },
            },
        );
        if (confirmError) {
            setError(confirmError.message)
            return;
        }
        if (paymentIntent.status) {
            settransition(paymentIntent.id)
            toast.success(`Successfully payment BDT ${price} Tk`)
        }
    }
    return (
        <div className='py-4'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-4 bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>

            {
                transition && <div>
                    <h2 className='text-green-500'> Congratulations your Payment is successfully completed!!</h2>
                    <h2>Transition Id: <span className='text-secondary font-semibold'>{transition}</span></h2>
                </div>
            }
        </div>
    );
};

export default CheckoutFrom;