import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blog/Blogs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";

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
        ]
    }

])