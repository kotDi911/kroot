import {Routes} from "react-router";
import {NavLink, Route} from "react-router-dom";
import Home from "../Pages/Home";
import logo from "../../assets/ico/Logo.svg"
import About from "../Pages/About";
import Services from "../Pages/Services";
import Projects from "../Pages/Projects";
import Details from "../Pages/Details";
import Contacts from "../Pages/Contacts";
import Career from "../Pages/Career";
import Generation from "../Pages/Generation";
import Footer from "../Footer";

const RouterApp = () => {

    return (
        <>
            <div className="logo">
                <NavLink expect="" to="/">
                    <img className="logo-img" src={logo} alt="logo"/>
                </NavLink>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/projects:name' element={<Details/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/career' element={<Career/>}/>
                <Route path='/generationkroot' element={<Generation/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default RouterApp;
