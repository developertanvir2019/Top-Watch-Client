import React from 'react';

const Slider = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/G9XK6TZ/slide2.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-start">
                <div className="max-w-md">
                    <h1 className="text-white mb-5 text-5xl font-bold">Welcome to Watch Area</h1>
                    <p className="mb-5">We have the largest and latest collection of Casio, Fastrack, Fossil, Titan Watches at very affordable price.You can a one from hare..</p>
                    <button className="btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;