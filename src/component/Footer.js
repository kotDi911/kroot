import {Link, NavLink, useLocation} from "react-router-dom";
import logo from "../assets/ico/LogoMini.svg"

import {ReactComponent as Insta} from "../assets/ico/insta.svg";
import {ReactComponent as Fb} from "../assets/ico/fb.svg";
import {ReactComponent as Linkedin} from "../assets/ico/linkedin.svg";

const links = [
    {name: "home"},
    {name: "about"},
    {name: "services"},
    {name: "projects"},
    {name: "contacts"},
]
const color = "#070707";

const Footer = () => {
    const {pathname} = useLocation();
    return (
        <footer className="footer flex col">
            <div className="flex center space-b">
                <NavLink className="logo-mini" to="/">
                    <img className="logo-img" src={logo} alt="logo"/>
                </NavLink>
                <nav className="nav flex end">
                    {links.map(link =>
                        <NavLink className="nav__link flex col center gray"
                                 key={link.name} to={`/${link.name === "home" ? "" : link.name}`}>
                            <div className="small">
                                {link.name.toUpperCase()}
                            </div>
                            <div className="dot nav__dot"></div>
                        </NavLink>
                    )}
                </nav>
                {
                    pathname === "/" ?
                        <span className="text small gray">© 2021 THE KROOT</span>
                        :
                        <div className="footer__social flex">
                            <Link className="footer__social-cont" to="" target="_blank">
                                <span className="btn-bg"/>
                                <Insta className="social-img" fill={color}/>
                            </Link>
                            <Link className="footer__social-cont" to="" target="_blank">
                                <span className="btn-bg"/>
                                <Fb className="social-img" fill={color}/>
                            </Link>
                            <Link className="footer__social-cont" to="" target="_blank">
                                <span className="btn-bg"/>
                                <Linkedin className="social-img" fill={color}/>
                            </Link>
                        </div>
                }
            </div>
            {pathname !== "/" && <span className="text small gray">© 2021 THE KROOT</span>}
        </footer>
    )
}
export default Footer