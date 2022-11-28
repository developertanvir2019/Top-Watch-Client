import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blog/Blogs";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllUser/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllUser/AllSeller";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import DashBoard from "../Pages/Dashboard/Dashboard/DashBoard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import ProductMe from "../Pages/Dashboard/ProductMe/ProductMe";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import BuyerRoute from "./AllRoutes/BuyerRoute";
import SellerRouter from "./AllRoutes/SellerRouter";
import PrivateRouter from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/:category',
                loader: ({ params }) => fetch(`https://server-wine-three.vercel.app/${params.category}`),
                element: <CategoryProduct></CategoryProduct>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DashBoard></DashBoard></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRouter><ProductMe></ProductMe></SellerRouter>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRouter><AddProduct></AddProduct></SellerRouter>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
        ]
    }

])