import {Link, useLocation} from "react-router-dom";
import logo from "../assets/ico/Logo.svg";
import {useEffect, useState} from "react";

const Header = () => {
    const {pathname} = useLocation();
    const reg  = new RegExp('/projects*');
    const [isActive, setIsActive] = useState(reg.test(pathname))

    useEffect(()=>{
        setIsActive(reg.test(pathname))
    },[pathname])
  return(
      <header className={`logo ${isActive ? "active": ""}`}>
          <Link expect="" to="/home">
              <img className="logo-img" src={logo} alt="logo"/>
          </Link>
      </header>
  )
}
export default Header