import {useLocation} from "react-router-dom";
import Footer from "../Footer";
import {useEffect} from "react";
import Header from "../Header";

const RouterApp = ({props}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <Header/>
            <main>
                {props}
            </main>
            <Footer/>
        </>
    );
}

export default RouterApp;
