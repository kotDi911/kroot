// import {ReactComponent as Arrow} from "../../public/assets/icon/arrow.svg";

const arrow = "/assets/icon/arrow.svg";

const Button = ({color}) => {
    return (
        <div className={`btn ${color ? "bg" : ""}`}>
            <img src={arrow} className="arrow btn-img"/>
            <span className={`btn-bg ${color && "white-bg"}`}/>
        </div>
    )
}
export default Button