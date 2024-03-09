import {Link, useLocation} from "react-router-dom";
import logo from "../assets/ico/Logo.svg";
import {useEffect, useState} from "react";

const Header = ({path}) => {
    const [isActive, setIsActive] = useState(path === "/projects" && true)

    useEffect(()=>{
        setIsActive(path === "/projects" && true)
    },[path])
  return(
      <header className={`logo ${isActive ? "active": ""}`}>
          <Link expect="" to="/">
              <img className="logo-img" src={logo} alt="logo"/>
          </Link>
      </header>
  )
}
export default Header