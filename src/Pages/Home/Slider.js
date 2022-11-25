import React from 'react';

const Slider = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0401/0485/3670/files/WhatsApp_Image_2022-06-23_at_10.15.23_AM_1400x.jpg?v=1656261618")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-secondary mb-5 text-5xl font-bold">Welcome to Watch Area</h1>
                    <p className="mb-5">We have the largest and latest collection of Casio, Fastrack, Fossil, Titan Watches at very affordable price.You can a one from hare..</p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;