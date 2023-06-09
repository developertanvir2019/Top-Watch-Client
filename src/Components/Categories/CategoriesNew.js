import React from 'react';
import './CategoriesNew.css'
import { Link } from 'react-router-dom';
const CategoriesNew = () => {
    return (
        <div>
            <h3 className="text-4xl font-semibold text-center mt-20 mb-12">Our top Categories</h3>
            <div className='lg:flex justify-between lg:mx-12 mx-auto'>

                <div className='container mb-8'>
                    <ul className="thumb">
                        <li><img src="/img/img1.png" alt="" /></li>
                        <li><img src="/img/img1.png" alt="" /></li>
                        <li><img src="/img/img1.png" alt="" /></li>
                    </ul>
                    <div className="img-box  backdrop-blur-md bg-gray-400 bg-opacity-20">
                        <h2 className='text-3xl font-semibold mb-4'>Casio</h2>
                        <div className='flex justify-center items-center'>
                            <img className='w-3/4 hover:transform hover:scale-110 duration-500' src="/img/img1.png" alt="" />
                        </div>
                        <ul className="size mt-4">
                            <Link to='/product/casio' className='btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600'>View all</Link>
                        </ul>
                    </div>
                </div>
                <div className='container mb-8'>
                    <ul className="thumb">
                        <li><img src="/img/img2.png" alt="" /></li>
                        <li><img src="/img/img2.png" alt="" /></li>
                        <li><img src="/img/img2.png" alt="" /></li>
                    </ul>
                    <div className="img-box  backdrop-blur-md bg-gray-400 bg-opacity-20">
                        <h2 className='text-3xl font-semibold mb-4'>Fastrack</h2>
                        <div className='flex justify-center items-center'>
                            <img className='w-3/4 hover:transform hover:scale-110 duration-500' src="/img/img2.png" alt="" />
                        </div>
                        <ul className="size mt-4">
                            <Link to='/product/fastrack' className='btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600'>View all</Link>
                        </ul>
                    </div>
                </div>
                <div className='container mb-8'>
                    <ul className="thumb">
                        <li><img src="/img/img3.png" alt="" /></li>
                        <li><img src="/img/img3.png" alt="" /></li>
                        <li><img src="/img/img3.png" alt="" /></li>
                    </ul>
                    <div className="img-box  backdrop-blur-md bg-gray-400 bg-opacity-20">
                        <h2 className='text-3xl font-semibold mb-4'>Titan</h2>
                        <div className='flex justify-center items-center'>
                            <img className='w-3/4 hover:transform hover:scale-110 duration-500' src="/img/img3.png" alt="" />
                        </div>
                        <ul className="size mt-4">
                            <Link to='/product/titan' className='btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600'>View all</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesNew;