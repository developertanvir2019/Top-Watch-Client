import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='mt-16 lg:mx-16 md:mx-8 sm:mx-4'>
            <h3 className="text-4xl font-semibold text-secondary pt-4">All Categories</h3>
            <div className="divider pb-4 lg:w-1/3 mx-4"></div>
            <div className='lg:flex gap-7 sm:block'>
                <div className="card w-96 bg-base-100 shadow-xl image-full my-4 mx-auto">
                    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Fastrack_logo.png" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto text-3xl font-semibold text-info">Fastrack</h2>
                        <p>Expensive and top budget watch.</p>
                        <div className="card-actions justify-center">
                            <Link to='/fastrack' className="btn btn-secondary">Buy Now</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full my-4 mx-auto">
                    <figure><img src="https://i.pinimg.com/originals/0a/c6/6c/0ac66c2f437644e10300b7fc5240ca1a.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto text-3xl font-semibold text-info">Casio</h2>
                        <p>Reasonable budget watch.</p>
                        <div className="card-actions justify-center">
                            <Link to='/casio' className="btn btn-secondary">Buy Now</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full my-4 mx-auto">
                    <figure><img src="https://static.wikia.nocookie.net/logopedia/images/1/10/Titan_%28Blue%29.svg/revision/latest?cb=20210731091109" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto text-3xl font-semibold text-info">Titan</h2>
                        <p>Expensive and Middle budget watch.</p>
                        <div className="card-actions justify-center">
                            <Link to='/titan' className="btn btn-secondary">Buy Now</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;