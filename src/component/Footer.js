import {Link} from "react-router-dom";
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
    return (
        <footer className="footer flex col">
            <div className="flex center space-b">
                <Link className="logo-mini" to='/'>
                    <img className="logo-img" src={logo} alt="logo"/>
                </Link>
                <nav className="nav flex end">
                    {links.map(link =>
                        <Link className="nav__link flex col center gray"
                                 key={link.name} to={`/${link.name === "home" ? "": link.name}`}>
                            <div className="small">
                                {link.name.toUpperCase()}
                            </div>
                            <div className="dot nav__dot"></div>
                        </Link>
                    )}
                </nav>
                <div className="social flex">
                    <Social props="dark"/>
                </div>
            </div>
        </footer>
    )
}
export default Footer