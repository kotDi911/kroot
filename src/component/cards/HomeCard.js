import {useNavigate} from "react-router-dom";
import Social from "../Social";
import {useState} from "react";
import Button from "../Button";


import videoM from "../../assets/335H.mp4";
import videoT from "../../assets/470H.mp4";
import videoD from "../../assets/920H.mp4";
import poster from "../../assets/poster.png"
import {useSize} from "../store/size";

const white = "white"
const light = "#9ba1a0"

const HomeCard = ({props}) => {
    const size = useSize((store) => store.size)
    const {name, url, title, gray, ico, img, imgHover, text, btnText, social} = props;
    const navigate = useNavigate();
    const [bgImg, setBgImg] = useState(img)
    const reg = /^\w+$/;

    const GoToPage = () => {
        reg.test(url) ? navigate(`/${url}`) : window.open(url, "_blank")
    }
    const color = img ? white : light

    return (
        <div className={`${url === "generation_kroot" && "g_kroot"} main__card relative`}
             style={{gridArea: name ? name : ""}}>
            <div className={`home__card flex col hover__card ${bgImg ? "video-cont" : ""} relative`}
                // style={{background: bgImg ? "none" : "white!important"}}
                 onClick={GoToPage}
                // onMouseEnter={() => imgHover && setBgImg(imgHover)}
                // onMouseLeave={() => img && setBgImg(img)}
                // onTouchStart={() => imgHover && setBgImg(imgHover)}
            >
                {bgImg &&
                    <>
                        {size <= 550 &&
                            <video className="video" src={videoM} autoPlay muted loop width="100%" height="100%"
                                   poster={poster}/>}
                        {550 > size || size <= 991 &&
                            <video className="video" src={videoT} autoPlay muted loop width="100%" height="100%"
                                   poster={poster}/>}
                        {size > 991 &&
                            <video className="video" src={videoD} autoPlay muted loop width="100%" height="100%"
                                   poster={poster}/>}
                    </>
                }
                {
                    title || ico || text
                        ?
                        <div className="home__card-title flex col">
                            {title && <h3 className={`title ${name === "contacts" ? "fs-56" : "h3"}`}>{title} <span
                                className="gray">{gray}</span></h3>}
                            {ico && <div className="ico-img"><img className="img" src={ico} alt="icon"/></div>}
                            {text && <p className="gray mt-16">{text}</p>}
                        </div>
                        :
                        <></>
                }
                <div className="w-100 absolute home__card-text-cont" style={{justifyContent: social ? "flex-end" : ""}}>
                    <div className={`flex end ${ social? "space-end":"space-b"}`}>
                        {btnText &&
                            <div className="flex center">
                                {!img && <div className="dot" style={{background: color}}/>}
                                <div className={img ? "fs-20" : "small"} style={{color: color}}>
                                    {btnText.toUpperCase()}
                                </div>
                            </div>
                        }
                        <Button color={!!img}/>
                    </div>
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