import {useNavigate} from "react-router-dom";
import Social from "../Social";
import Button from "../Button";

const light = "#9ba1a0"

const HomeCard = ({props}) => {
    const {name, url, title, gray, ico, text, btnText, social} = props;
    const navigate = useNavigate();
    const reg = /^\w+$/;

    const GoToPage = () => {
        reg.test(url) ? navigate(`/${url}`) : window.open(url, "_blank")
    }

    return (
        <div className={`${url === "generation_kroot" ? "g_kroot" : ""} main__card relative`}
             style={{gridArea: name ? name : ""}}
        >
            <div className={`home__card flex col hover__card relative`}
                 onClick={GoToPage}
            >
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
                               <div className="dot"/>
                                <div className="small" style={{color: light}}>
                                    {btnText.toUpperCase()}
                                </div>
                            </div>
                        }
                        <Button />
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