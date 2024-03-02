import {ReactComponent as Arrow} from "../assets/ico/arrow.svg";

const Button = ({color}) => {
  return(
      <div className={`btn ${color ? "bg":""}`}>
          <Arrow className="arrow btn-img"/>
          <span className={`btn-bg ${color && "white-bg"}`}/>
      </div>
  )
}
export default Button