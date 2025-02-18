import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouterApp from "./component/router/RouterApp";
import {createBrowserRouter as Router, RouterProvider} from "react-router-dom";
import Home from "./component/Pages/Home";
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
        // element: <RouterApp props={<Projects/>}/>,
        children: [
            {
                path: "",
                element: <RouterApp props={<Projects/>}/>,
            },
            {
                path: ":name",
                // loader: ({ request }) =>
                //     fetch('https://qdz.guk.temporary.site/wp-api/wp-json/acf/v3/projects', {
                //         signal: request.signal,
                //     }),
                loader: ({params}) => {
                    const projects = JSON.parse(localStorage.getItem("projects"))
                    let state;
                    const project = projects.filter( item => {
                                    if(item.project_name.replace(/\s+/g, '').toLowerCase() === params.name){
                                        state = item
                                    }
                                })
                    return state;
                },
                // loader: (async ({request,params}) => {
                //
                //     const res = await fetch('https://qdz.guk.temporary.site/wp-api/wp-json/acf/v3/priority_project?per_page=18', {
                //         signal: request.signal,
                //     });
                //     const data = await res.json();
                //     const dataProjects = data.map(res => res.acf)
                //     let d
                //     const detail = dataProjects.filter( item => {
                //         if(item.project_name.replace(/\s+/g, '').toLowerCase() === params.name){
                //             d = item
                //         }
                //     })
                //     return d;
                // }),
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