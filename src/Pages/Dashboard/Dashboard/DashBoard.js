import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Others/AuthProvider";
import Header from "../../Shared/Header/Header";
// import useAdmin from "../hooks/useAdmin";
// import useBuyer from "../hooks/useBuyer";
// import useSeller from "../hooks/useSeller";

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    //   const [isAdmin] = useAdmin(user?.email);
    //   const [isSeller] = useSeller(user?.email);
    //   const [isBuyer] = useBuyer(user?.email);
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
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="/dashboard">All Users</Link>
                        </li>
                        {/* {isAdmin && ( */}
                        <>
                            <li>
                                <Link to="/dashboard/allBuyers">Buyers</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/allSellers">Sellers</Link>
                            </li>
                        </>
                        {/* )} */}
                        {/* {isSeller && ( */}
                        <>
                            <li>
                                <Link to="/dashboard/addProduct">Add Product</Link>
                            </li>
                        </>
                        {/* )} */}
                        {/* {isBuyer && ( */}
                        <>
                            <li>
                                <Link to="/dashboard/myOrders">My Orders</Link>
                            </li>
                        </>
                        {/* )} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;