import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouterApp from "./component/router/RouterApp";
import {createBrowserRouter as Router, RouterProvider} from "react-router-dom";
import Home, {loaderHome} from "./component/Pages/Home";
import About from "./component/Pages/About";
import ErrorPage from "./component/Pages/ErrorPage";
import Services from "./component/Pages/Services";
import Projects from "./component/Pages/Projects";
import Details from "./component/Pages/Details";
import Contacts from "./component/Pages/Contacts";
import Career from "./component/Pages/Career";
import CareerCards from "./component/cards/Career/CareerCards";
import Generation from "./component/Pages/Generation";
import GetInTouch from "./component/Pages/GetInTouch";
import {HelmetProvider} from "react-helmet-async";

const router = Router([
    {
        path: "/",
        element: <RouterApp props={<Home/>}/>,
        // loader: loaderHome,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/about",
        element: <RouterApp props={<About/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/services",
        element: <RouterApp props={<Services/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/projects",
        children: [
            {
                path: "",
                element: <RouterApp props={<Projects/>}/>,
            },
            {
                path: ":name",
                element: <RouterApp props={<Details/>}/>,
            },
        ],
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/contacts",
        element: <RouterApp props={<Contacts/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/career",
        element: <RouterApp props={<Career/>}/>,
        children: [
            {
                path: ":name",
                element: <CareerCards/>,
            },
        ],
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/generation_kroot",
        element: <RouterApp props={<Generation/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/get_in_touch",
        element: <RouterApp props={<GetInTouch/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    // {
    //     path: "/error",
    //     errorElement: <RouterApp props={<ErrorPage/>}/>,
    // },
    // {
    //     path: "*",
    //     element: <Navigate to='/' replace/>,
    //     errorElement: <RouterApp props={<ErrorPage/>}/>,
    // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router}/>
        </HelmetProvider>
    </React.StrictMode>
);