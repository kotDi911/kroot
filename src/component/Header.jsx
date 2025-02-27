import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const logo = "/assets/icon/Logo.svg";

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