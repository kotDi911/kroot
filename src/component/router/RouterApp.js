import {Link, useLocation} from "react-router-dom";
import logo from "../../assets/ico/Logo.svg"
import Footer from "../Footer";
import {useEffect} from "react";

const RouterApp = ({props}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <header className="logo">
                <Link expect="" to="/">
                    <img className="logo-img" src={logo} alt="logo"/>
                </Link>
            </header>
            <main>
                {props}
            </main>
            <Footer/>
        </>
    );
}

export default RouterApp;
