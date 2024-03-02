import {Link} from "react-router-dom";
import logo from "../assets/ico/Logo.svg";

const Header = () => {
  return(
      <header className="logo">
          <Link expect="" to="/home">
              <img className="logo-img" src={logo} alt="logo"/>
          </Link>
      </header>
  )
}
export default Header