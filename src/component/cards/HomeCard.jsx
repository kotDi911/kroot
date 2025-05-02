import {Link} from "react-router-dom";
import Social from "../Social";
import Button from "../Button";

const light = "#9ba1a0"

const HomeCard = ({props}) => {
    const {name, url, title, gray, btnText, social} = props;

    return (
        <div className={`${url === "generation_kroot" ? "g_kroot" : ""} main__card relative`}
             style={{gridArea: name ? name : ""}}
        >
            <Link className={`home__card flex col hover__card relative`} to={`/${url}`}>
                {
                    name !== "get_in_touch"
                        ?
                        <div className="home__card-title flex col">
                            {
                                title && <h3 className={`title ${name === "contacts" ? "fs-56" : "h3"}`}>
                                    {title} <span className="gray">{gray}</span>
                                </h3>
                            }
                        </div>
                        :
                        <div className="home__card-title flex col" style={{textAlign: "center"}}>
                            {
                                title && <h3 className={`title fs-56`}>
                                    {title} <span className="gray">{gray}</span>
                                </h3>
                            }
                        </div>
                }
                <div className="w-100 absolute home__card-text-cont" style={{justifyContent: social ? "flex-end" : ""}}>
                    <div className={`flex end ${social ? "space-end" : "space-b"}`}>
                        {btnText &&
                            <div className="flex center">
                                <div className="dot"/>
                                <div className="small" style={{color: light}}>
                                    {btnText.toUpperCase()}
                                </div>
                            </div>
                        }
                        <Button/>
                    </div>
                </div>
            </Link>
            {social &&
                <div className="home__social social flex absolute">
                    <Social props="light"/>
                </div>
            }
        </div>
    )
}
export default HomeCard