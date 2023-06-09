import React, { useContext } from 'react';
import { AuthContext } from '../../Others/AuthProvider';
import './Extra.css'

const ExtraSection = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-8">
            <div className="w-full relative flex items-center justify-center">
                {/* <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" /> */}
                {/* <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0" /> */}
                <div className="contact-bg bg-opacity-30 bg-gray-200 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9  text-center">Don’t miss out!</h1>
                    <p className="text-base leading-normal text-center font-medium text-gray-500 mt-6">
                        Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                        a week on every friday so subscribe to get latest news and updates.
                    </p>
                    <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-gray-500 text-base w-full font-medium leading-none  p-4 focus:outline-none bg-transparent " placeholder="Email Address" />
                        <button className="bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;