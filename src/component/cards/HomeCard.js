import {ReactComponent as Arrow} from "../../assets/ico/arrow.svg";
import {Link, useNavigate} from "react-router-dom";

const dark = "#070707"
const light = "#cbced0"
const bg = "#ebf1f5"
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
        <div className="home__card flex col" style={{gridArea: size, backgroundImage: `url(${img})`}} onClick={GoToPage}>
            <div className="home__card-title">
                {title && <h2>{title}</h2>}
            </div>
            <div className="flex end space-b">
                {btnText &&
                    <div className={`${img ? "box" : ""} flex center`}>
                        <div className="dot" style={{background: color}}/>
                        <div className="small" style={{color: color}}>{btnText.toUpperCase()}</div>
                    </div>
                }
                {social &&
                    <div style={{position: "relative"}}>
                        <div className="social flex">
                            {social.map((item) =>
                                <Link className="social-cont" key={item.name} to={item.url} target="_blank">
                                    <span className="btn-bg"/>
                                    <img className="social-img"
                                         key={item.id}
                                         src={item.img}
                                         alt={item.name}
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                }
                <div className="btn" style={{background: color === dark ? bg : "none"}}>
                    <Arrow className="arrow btn-img" stroke={color}/>
                    <span className="btn-bg"/>
                </div>
            </div>
        </div>
    )
}
export default HomeCard