import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useToken from '../../Others/AllHooks/UseToken'
import { AuthContext } from '../../Others/AuthProvider'

const Signup = () => {
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { createUser, updateUserProfile, signInWithGoogle, loading, setLoading } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const password = form.password.value;
        const email = form.email.value;
        const role = form.role.value;

        //for upload image in imgBb and save firebase user...
        const formData = new FormData()
        formData.append('image', image)
        console.log(formData);

        const url = `https://api.imgbb.com/1/upload?key=8361c702450c4d4223bcf02628cc126f`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                createUser(email, password)
                    .then(result => {
                        updateUserProfile(name, data.data.display_url)
                            .then(() => {
                                saveUser(name, email, result?.user?.photoURL, role);
                                setLoading(false)
                                toast.success('login successfully ..')
                                navigate(from, { replace: true });
                            })
                        console.log(result)
                    })
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })

    }
    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const role = 'buyer';
                saveUser(result?.user?.displayName, result?.user?.email, result?.user?.photoURL, role);
                toast.success('login successfully ..')
                navigate(from, { replace: true });
                // console.log(result.user)
            })
            .catch(err => toast.error(err.message))
    }
    const saveUser = (userName, email, image, role) => {
        const user = { userName, email, image, role };
        fetch('https://server-wine-three.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email)
                console.log(data);
            })
    }
    return (
        <div className='flex justify-center items-center pt-8'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Signup</h1>
                    <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'> Name</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                required
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm '>
                                Select Image:
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                                className='file-input file-input-bordered file-input-secondary w-full max-w-xs'
                            />
                        </div>
                        <select name='role' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>What will Your Role?</option>
                            <option>seller</option>
                            <option>buyer</option>
                        </select>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                required
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-cyan-500 text-gray-900'
                            />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            {
                                loading ?
                                    <button className='btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 w-full loading'>Loading</button> :
                                    <button className='btn bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 w-full'>SignUp</button>
                            }
                        </div>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with <span className='text-secondary font-bold'>social</span> accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div className='flex justify-center space-x-4'>
                    <button onClick={handleGoogle} aria-label='Log in with Google' className='p-3 rounded-sm text-secondary'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-7 h-7 fill-current'
                        >
                            <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                        </svg>
                    </button>
                    <button aria-label='Log in with GitHub' className='p-3 rounded-sm text-secondary'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-7 h-7 fill-current'
                        >
                            <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
                        </svg>
                    </button>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link to='/login' className='hover:underline text-cyan-600'>
                        Log In
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default Signup
