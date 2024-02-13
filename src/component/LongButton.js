import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../assets/ico/arrow.svg";

const LongButton = ({text, link}) => {
    return (
        <div className="long-btn hover__card mt-16">
            <Link to={`/${link}`} className="flex center">
                <>
                    <p className="fs-14 gray">{text.toUpperCase()}</p>
                    <div className="btn">
                        <Arrow className="arrow btn-img"/>
                        <span className="btn-bg"/>
                    </div>
                </>
            </Link>
        </div>
    )
}
export default LongButton