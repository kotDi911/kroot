import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouterApp from "./component/router/RouterApp";
import {createBrowserRouter as Router, Navigate, RouterProvider} from "react-router-dom";
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
                loader: async ({params}) => {
                    const url1 = "https://api.thekroot.com/wp-json/wp/v2/priority_project?slug=";
                    const url2 = "https://api.thekroot.com/wp-json/wp/v2/project?slug=";
                    const projects = JSON.parse(localStorage.getItem("projects"));

                    const fetchData = async (url) => {
                        try {
                            const res = await fetch(url + params.name.replace(/_/g, '-'));
                            if (!res.ok) throw new Error('Failed to fetch data');
                            const result = await res.json();
                            if (result.length === 0) throw new Error('Project not found');
                            let data = {}
                            result.find(item => data = item.acf);
                            return data;
                        } catch (err) {
                            console.error(err);
                            return null;
                        }
                    };

                    if (projects) {
                        const foundProject = projects.find(item =>
                            item.project_name.replace(/[^a-zA-Z0-9&']+/g, '_').toLowerCase() === params.name
                        );
                        if (foundProject) {
                            return {...foundProject, error: null};
                        }
                    } else {
                        const projectFromApi = await fetchData(url1) || await fetchData(url2);

                        if (projectFromApi) {
                            return {...projectFromApi, error: null};
                        } else {
                            return {error: "No project found"};
                        }
                    }
                },
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
    {
        path: "/error",
        element: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "*",
        element: <Navigate to='/error' replace/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router}/>
        </HelmetProvider>
    </React.StrictMode>
);