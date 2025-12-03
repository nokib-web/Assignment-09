import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Details from "../Pages/Details/Details";
import BookNow from "../Pages/Details/BookNow";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "../provider/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../Pages/Loading/LoadingSpinner";
import ForgetPassword from "../Pages/Login/ForgetPassword";
import AllServices from "../Pages/AllServices/AllServices";
import About from "../Pages/About/About";
import Support from "../Pages/Support/Support";
import Adoption from "../Pages/Adoption/Adoption";



const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        Loading: <LoadingSpinner></LoadingSpinner>,
        children: [
            {
                index: true,
                Component: Home,
                
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: '/details/:id',
                Component: Details,
                loader: () => fetch('/services.json'),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            },
            {
                path: '/booking',
                Component: BookNow,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/forget-password',
                Component: ForgetPassword,
            },
            {
                path:'/all-services',
                Component: AllServices,
                loader: () => fetch('/services.json'),
            },
            {
                path:'/support',
                Component: Support,
            },
            {
                path: '/adoption',
                Component: Adoption,
            }

        ]
    }
])

export default router