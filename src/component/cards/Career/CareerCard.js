import Button from "../../Button";
import {Link} from "react-router-dom";

const CareerCard = ({props}) => {
    const {title, desc} = props
  return(
      <Link className="career__card hover__card flex end base mt-16" to="/">
          <div className="flex col w-100">
              <p className="fs-14 black">{title}</p>
              <p className="regular gray mt-16" style={{cursor: "pointer"}}>{desc}</p>
          </div>
          <Button color={false}/>
      </Link>
  )
}
export default CareerCard