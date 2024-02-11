import {Link, NavLink, useLocation} from "react-router-dom";
import logo from "../assets/ico/LogoMini.svg"

import Social from "./Social";

const links = [
    {name: "home"},
    {name: "about"},
    {name: "services"},
    {name: "projects"},
    {name: "contacts"},
]

const Footer = () => {
    const {pathname} = useLocation();
    return (
        <footer className="footer flex col">
            <div className="flex center space-b">
                <NavLink className="logo-mini" to='/home'>
                    <img className="logo-img" src={logo} alt="logo"/>
                </NavLink>
                <nav className="nav flex end">
                    {links.map(link =>
                        <NavLink className="nav__link flex col center gray"
                                 key={link.name} to={`/${link.name}`}>
                            <div className="small">
                                {link.name.toUpperCase()}
                            </div>
                            <div className="dot nav__dot"></div>
                        </NavLink>
                    )}
                </nav>
                <div className="social flex">
                    <Social props="dark"/>
                </div>
            </div>
            {pathname !== "/home" && <span className="text-center small gray">© 2021 THE KROOT</span>}
        </footer>
    )
}
export default Footer