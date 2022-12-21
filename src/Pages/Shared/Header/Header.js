import { useContext } from 'react';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../../../Others/AuthProvider';
import('./Header.css')

const Header = () => {
    const { user, logout } = useContext(AuthContext)

    return (
        <div className="navbar bg-base-100 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-bold text-info px-2'><Link to='/'>Home</Link></li>
                        <li className='font-bold text-info px-2'><Link to='/blogs'>Blogs</Link></li>
                        <li className='font-bold text-info px-2'><Link to='/dashboard'>Dashboard</Link></li>
                        <li className="">
                            {
                                user?.uid ?
                                    <Link onClick={() => logout()} to='/login' className="btn btn-secondary">LogOut</Link>
                                    :
                                    <Link to='/login' className="btn btn-secondary">Login</Link>
                            }
                        </li>
                    </ul>

                </div>
                <Link className="btn btn-ghost normal-case text-xl font-bold text-info ">Top-Watch</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-bold text-info px-2'><Link to='/'>Home</Link></li>
                    <li className='font-bold text-info px-2'><Link to='/blogs'>Blogs</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li className='font-bold text-info px-2'><Link to='/dashboard'>Dashboard</Link></li>

                                <li className="font-bold text-info px-2"> <Link onClick={() => logout()} >LogOut</Link></li>
                            </>
                            :
                            <Link to='/login' className="btn btn-secondary">Login</Link>
                    }
                </ul>
            </div>

            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost ml-auto lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Header;