import {useNavigate} from "react-router-dom";
import Social from "../Social";
import {useState} from "react";
import Button from "../Button";

const white = "white"
const light = "#9ba1a0"

const HomeCard = ({props}) => {
    const {name, url, title, gray, ico, img, imgHover, text, btnText, social} = props;
    const navigate = useNavigate();
    const [bgImg, setBgImg] = useState(img)
    const reg = /^\w+$/;
    const GoToPage = () => {
        reg.test(url) ? navigate(`/${url}`) : window.open(url, "_blank")
    }
    const color = img ? white : light

    return (
        <div className={`${url === "generation_kroot" && "g_kroot"} main__card relative`} style={{gridArea: name}}>
            <div className="home__card flex col hover__card"
                 style={{backgroundImage: `url(${bgImg})`}}
                 onClick={GoToPage}
                 onMouseEnter={() => setBgImg(imgHover)}
                 onMouseLeave={() => setBgImg(img)}
                 onTouchStart={() => setBgImg(imgHover)}
            >
                <div className="home__card-title flex col">
                    {title && <h3 className={`title ${name === "contacts" ? "fs-56" : "h3"}`} >{title} <span className="gray">{gray}</span></h3>}
                    {ico && <div className="ico-img"><img className="img" src={ico} alt="icon"/></div>}
                    {text && <p className="gray mt-16">{text}</p>}
                </div>
                <div className="flex end space-b" style={{justifyContent: social && "flex-end"}}>
                    {btnText &&
                        <div className="flex center">
                            {!img && <div className="dot" style={{background: color}}/>}
                            <div className={img ? "fs-20" : "small"} style={{color: color}}>{btnText.toUpperCase()}</div>
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