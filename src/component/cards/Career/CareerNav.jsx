import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const links = [
    {
        name: "US",
        path: "/us",
        desc: "After joining our team, you will change your perception of life" +
            " and will start thinking differently.We teach you how to create and how to be better! You're Rad!" +
            "Attend to our courses Generation Kroot"
    },
    {
        name: "UA",
        path: "/ua",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, assumenda corporis et facere in maxime molestiae nam optio veritatis." +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, assumenda corporis et facere in maxime molestiae nam optio veritatis."
    },
    {
        name: "EU",
        path: "/eu",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, assumenda corporis et facere in maxime molestiae nam optio veritatis."
    }
]

const CareerNav = () => {
    const {pathname} = useLocation();
    const [desc, setDesc] = useState();

    useEffect(()=>{
        switch (pathname) {
            case "/career/us":
                links.filter(i => i.name === "US" && setDesc(i.desc));
                break;
            case "/career/ua":
                links.filter(i => i.name === "UA" && setDesc(i.desc));
                break;
            case "/career/eu":
                links.filter(i => i.name === "EU" && setDesc(i.desc));
                break;
            default:
                break;
        }
    }, [pathname])

    return (
        <div className="nav__cont">
            <h3 className="h3 text-center black">Location</h3>
            <nav className="nav flex space-a mt-16">
                {
                    links.map((link, i) => (
                        <NavLink className="nav__btn" key={i} onClick={() => setDesc(link.desc)} to={`/career${link.path}`}>
                            <span className="btn-bg"/>
                            {link.name}
                        </NavLink>
                    ))
                }
            </nav>
            <p className="nav__text regular gray mt-16">
                {desc}
            </p>
        </div>
    )
}
export default CareerNav