import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Button from "./Button";

const LongButton = ({text, url, style, className}) => {
    const [blank, setBlank] = useState(false);
    const reg = /^\w+$/;
    useEffect(() => {
        reg.test(url) ? setBlank(false) : setBlank(true)
    }, [])
    return (
        <Link
            to={blank ? url : `/${url}`}
            target={blank ? "_blank" : ""}
            className={`${className ? className : ""} flex long-btn hover__card`}
            style={{gridArea: style}}
        >
            <p className="fs-20 gray">{text.toUpperCase()}</p>
            <Button/>
        </Link>
    )
}
export default LongButton