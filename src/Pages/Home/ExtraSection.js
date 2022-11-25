import React, { useContext } from 'react';
import { AuthContext } from '../../Others/AuthProvider';

const ExtraSection = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='py-8'>
            <h3 className="text-4xl font-semibold text-info pt-12">About our Shop</h3>
            <div className="divider pb-12 lg:w-1/3 mx-auto"></div>
            <div className="lg:flex lg:mx-32 shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Sales</div>
                    <div className="stat-value text-secondary">10K</div>
                    <div className="stat-desc">32% more than last month</div>
                </div>


                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 h-16 rounded-full">
                                <img alt='' src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Delivery done</div>
                    <div className="stat-desc text-secondary">31 delivery remaining</div>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;