import {ReactComponent as Arrow} from "../../assets/ico/arrow.svg";
import {useNavigate} from "react-router-dom";
import Social from "../Social";

const dark = "#070707"
const light = "#9ba1a0"

const HomeCard = ({props}) => {
    const {id, url, title, ico, img, text, btnText, social} = props;
    const navigate = useNavigate();
    let size
    const reg = /^\w+$/;
    switch (id) {
        case 1:
            size = "1/1/2/5"
            break;
        case 2:
            size = "1/5/2/9"
            break;
        case 3:
            size = "2/1/3/4"
            break;
        case 4:
            size = "2/4/3/7"
            break;
        case 5:
            size = "2/7/3/9"
            break;
        case 6:
            size = "3/1/4/5"
            break;
        case 7:
            size = "3/5/4/9"
            break;
        default:
            break;
    }

    const GoToPage = () => {
        reg.test(url) ? navigate(`/${url}`) : window.open(url, "_blank")
    }

    const color = img ? dark : light
    return (
        <div className="home__card flex col hover__card"
             style={{gridArea: size, backgroundImage: `url(${img})`}}
             onClick={GoToPage}
        >
            <div className="home__card-title flex col">
                {title && <h3 className="h3">{title}</h3>}
                {ico && <div className="ico-img"><img className="img" src={ico} alt="icon"/></div>}
                {text && <p className="gray mt-16">{text}</p>}
            </div>
            <div className="flex end space-b">
                {btnText &&
                    <div className={`${img ? "box" : ""} flex center`}>
                        <div className="dot" style={{background: color}}/>
                        <div className="small" style={{color: color}}>{btnText.toUpperCase()}</div>
                    </div>
                }
                {social &&
                    <div className="social flex">
                        <Social props="light"/>
                    </div>
                }
                <div className={`btn ${color === dark ? "bg" : ""}`} >
                    <Arrow className="arrow btn-img" stroke={color}/>
                    <span className={`btn-bg ${img ? "white-bg" : ""}`}/>
                </div>
            </div>
        </div>
    )
}
export default HomeCard