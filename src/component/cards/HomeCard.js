import {useNavigate} from "react-router-dom";
import Social from "../Social";
import {useState} from "react";
import Button from "../Button";

const dark = "#070707"
const light = "#9ba1a0"

const HomeCard = ({props}) => {
    const {name, url, title, gray, ico, img, imgHover, text, btnText, social} = props;
    const navigate = useNavigate();
    const [bgImg, setBgImg] = useState(img)
    const reg = /^\w+$/;
    const GoToPage = () => {
        reg.test(url) ? navigate(`/${url}`) : window.open(url, "_blank")
    }
    const color = img ? dark : light

    return (
        <div className="main__card relative" style={{gridArea: name}}>
            <div className="home__card flex col hover__card"
                 style={{backgroundImage: `url(${bgImg})`}}
                 onClick={GoToPage}
                 onMouseEnter={() => setBgImg(imgHover)}
                 onMouseLeave={() => setBgImg(img)}
            >
                <div className="home__card-title flex col">
                    {title && <h3 className="title h3">{title} <span className="gray">{gray}</span></h3>}
                    {ico && <div className="ico-img"><img className="img" src={ico} alt="icon"/></div>}
                    {text && <p className="gray mt-16">{text}</p>}
                </div>
                <div className="flex end space-b" style={{justifyContent: social && "flex-end"}}>
                    {btnText &&
                        <div className={`${img ? "box" : ""} flex center`}>
                            <div className="dot" style={{background: color}}/>
                            <div className="small" style={{color: color}}>{btnText.toUpperCase()}</div>
                        </div>
                    }
                    <Button color={!!img}/>
                </div>
            </div>
            {social &&
                <div className="home__social social flex absolute">
                    <Social props="light"/>
                </div>
            }
        </div>
    )
}
export default HomeCard