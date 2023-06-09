import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useBuyer from "../../../Others/AllHooks/useBuyer";
import useSeller from "../../../Others/AllHooks/useSeller";
import { AuthContext } from "../../../Others/AuthProvider";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin, isLoading] = useAdmin(user?.email);

    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content bg-white w-full rounded-md">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-white">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="/dashboard">All Users</Link>
                        </li>
                        {/* {isAdmin && ( */}
                        <>
                            <li>
                                <Link to="/dashboard/allBuyers">All Buyers</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/allSellers">All Sellers</Link>
                            </li>
                        </>
                        {/* )} */}
                        {isSeller && (
                            <>
                                <li>
                                    <Link to="/dashboard/addProduct">Add Product</Link>
                                    <Link to="/dashboard/myProduct">My Product</Link>
                                </li>
                            </>
                        )}
                        <>
                            <li>
                                <Link to="/dashboard/myOrders">My Orders</Link>
                            </li>
                        </>

                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;