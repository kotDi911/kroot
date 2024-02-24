import {Navigate, Outlet, Routes} from "react-router";
import {Link, Route, useLocation} from "react-router-dom";
import Home from "../Pages/Home";
import logo from "../../assets/ico/Logo.svg"
import About from "../Pages/About";
import Services from "../Pages/Services";
import Projects from "../Pages/Projects";
import Details from "../Pages/Details";
import Contacts from "../Pages/Contacts";
import Career from "../Pages/Career";
import Footer from "../Footer";
import {useEffect} from "react";
import CareerCards from "../cards/Career/CareerCards";
import GetInTouch from "../Pages/GetInTouch";
import Generation from "../Pages/Generation";

const RouterApp = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <header className="logo">
                <Link expect="" to="/home">
                    <img className="logo-img" src={logo} alt="logo"/>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Outlet/>}>
                        <Route path='home' element={<Home/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='services' element={<Services/>}/>
                        <Route path='projects' element={<Outlet/>}>
                            <Route path='' element={<Projects/>}/>
                            <Route path=':name' element={<Details/>}/>
                        </Route>
                        <Route path='contacts' element={<Contacts/>}/>
                        <Route path='career' element={<Career/>}>
                            <Route path=':name' element={<CareerCards/>}/>
                        </Route>
                        <Route path='generation_kroot' element={<Generation/>}/>
                        <Route path='get_in_touch' element={<GetInTouch/>}/>
                        <Route path='*' element={<Navigate to='/home' replace/>}/>
                        <Route path='/' element={<Navigate to='/home' replace/>}/>
                    </Route>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default RouterApp;
