import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../assets/ico/arrow.svg";
import {useEffect, useState} from "react";

const LongButton = ({text, link, style}) => {
    const [blank, setBlank] = useState(false);
    const reg = /^\w+$/;
    useEffect(() => {
        reg.test(link) ? setBlank(false) : setBlank(true)
    }, [])
    console.log(blank)
    return (
            <Link
                to={blank ? link : `/${link}`}
                target={blank ? "_blank" : ""}
                className="flex long-btn hover__card"
                style={{gridArea: style}}
            >
                <p className="fs-20 gray">{text.toUpperCase()}</p>
                <div className="btn">
                    <Arrow className="arrow btn-img"/>
                    <span className="btn-bg"/>
                </div>
            </Link>
    )
}
export default LongButton