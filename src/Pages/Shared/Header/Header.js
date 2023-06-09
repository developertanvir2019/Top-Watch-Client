import { useContext, useState } from 'react';
import { Link, NavLink, } from 'react-router-dom';
import { AuthContext } from '../../../Others/AuthProvider';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import('./Header.css')

const Header = () => {
    const { user, logout, cartNumber } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

    const links = [
        { name: "Home", href: "/" },
        { name: "Blogs", href: "/blogs" },
    ];
    const handleLinkClick = (name) => {
        setActiveLink(name);
    };


    return (
        <nav className="bg-white ">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex">
                            <h2 className='text-3xl font-semibold text-secondary lg:mr-24'>Top Watch</h2>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-16 flex items-baseline space-x-8">
                                <Link to='/'
                                    onClick={() => setActiveLink('/')}
                                    className={`${activeLink === '/'
                                        ? "border-b-2 border-primary text-primary"
                                        : "text-gray-700 hover:text-primary"
                                        } px-1 py-2 text-sm font-medium`}
                                >
                                    Home
                                </Link>
                                <a href='/#about'
                                    onClick={() => setActiveLink('/about')}
                                    className={`${activeLink === '/about'
                                        ? "border-b-2 border-primary text-primary"
                                        : "text-gray-700 hover:text-primary"
                                        } px-1 py-2 text-sm font-medium`}
                                >
                                    About
                                </a>
                                {
                                    user && <Link to='/dashboard'
                                        onClick={() => setActiveLink('dashboard')}
                                        className={`${activeLink === 'dashboard'
                                            ? "border-b-2 border-primary text-primary"
                                            : "text-gray-700 hover:text-primary"
                                            } px-1 py-2 text-sm font-medium`}
                                    >
                                        Dashboard
                                    </Link>
                                }
                                <Link to='/blogs'
                                    onClick={() => setActiveLink('blogs')}
                                    className={`${activeLink === 'blogs'
                                        ? "border-b-2 border-primary text-primary"
                                        : "text-gray-700 hover:text-primary"
                                        } px-1 py-2 text-sm font-medium`}
                                >
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <Link to='/cartproducts' tabIndex={0} className="btn btn-ghost btn-circle lg:ml-96">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cartNumber}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            {user?.uid ? <Link onClick={() => logout()} className="btn text-white font-semibol bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600">
                                Logout
                            </Link> :
                                <a href="/login" className="btn text-white font-semibold bg-gradient-to-r from-blue-400 to-pink-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 px-7">
                                    Login
                                </a>
                            }
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {menuOpen ? (
                                <RxCross2 className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <RxHamburgerMenu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 grid grid-cols-1">
                        <Link to='/'
                            onClick={() => setActiveLink('/')}
                            className={`${activeLink === '/'
                                ? "border-b-2 border-primary text-primary"
                                : "text-gray-700 hover:text-primary"
                                } px-1 py-2 text-sm font-medium`}
                        >
                            Home
                        </Link>
                        {
                            user && <Link to='/dashboard'
                                onClick={() => setActiveLink('dashboard')}
                                className={`${activeLink === 'dashboard'
                                    ? "border-b-2 border-primary text-primary"
                                    : "text-gray-700 hover:text-primary"
                                    } px-1 py-2 text-sm font-medium`}
                            >
                                Dashboard
                            </Link>
                        }
                        <Link to='/blogs'
                            onClick={() => setActiveLink('blogs')}
                            className={`${activeLink === 'blogs'
                                ? "border-b-2 border-primary text-primary"
                                : "text-gray-700 hover:text-primary"
                                } px-1 py-2 text-sm font-medium`}
                        >
                            Blogs
                        </Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        {user?.uid ? <div className="mt-3 flex items-center px-5">
                            <Link onClick={() => logout()} className="btn text-white font-semibold bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full">
                                Logout
                            </Link>
                        </div> :
                            <div className="mt-3 flex items-center px-5">
                                <a href="/login" className="btn text-white font-semibold bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full">
                                    login
                                </a>
                            </div>}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;