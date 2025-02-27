import {Link} from "react-router-dom";
// import {ReactComponent as Arrow} from "../../public/assets/icon/arrow.svg";

const arrow = "/assets/icon/arrow.svg";

const LinkButton = ({link}) => {
    return(
        <Link to={link} target="_blank" className="link-btn btn">
            {/*<Arrow className="arrow btn-img"/>*/}
            <img src={arrow} className="arrow btn-img"/>
            <span className="btn-bg"/>
        </Link>
    )
}
export default LinkButton