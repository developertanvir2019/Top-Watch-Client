import React from 'react';

const Another = () => {
    return (
        <div className='lg:flex mt-8 mb-6 lg:mx-16'>
            <div data-aos="zoom-in-up" className='lg:w-1/2'>
                <img src="https://watchbox-sfcc.imgix.net/Third+Mod.jpg?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5&h=450" alt="" />
            </div>
            <div data-aos="zoom-in-up" className='flex justify-center items-center lg:w-1/2 bg-black'>
                <div>
                    <p className="text-white font-semibold text-4xl">Around the World</p>
                    <p className="py-4 text-white font-semibold">Discover our global inventory featuring the finest names in watchmaking.</p>
                    <p className='btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600'>Shop Now</p>
                </div>
            </div>
        </div>
    );
};

export default Another;