import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
    {
        name: "US",
        path: "/us",
        desc: "After joining our team, you will change your perception of life and will start thinking differently. We teach you how to create and how to be better! You're Rad! Attend to our courses Generation Kroot"
    },
    {
        name: "UA",
        path: "/ua",
        desc: "After joining our team, you will change your perception of life and will start thinking differently. We teach you how to create and how to be better! You're Rad! Attend to our courses Generation Kroot"
    },
    {
        name: "EU",
        path: "/eu",
        desc: "After joining our team, you will change your perception of life and will start thinking differently. We teach you how to create and how to be better! You're Rad! Attend to our courses Generation Kroot"
    }
];

const CareerNav = () => {
    const { pathname } = useLocation();
    const [desc, setDesc] = useState("");

    useEffect(() => {
        const currentLink = links.find(link => pathname.includes(link.path));
        if (currentLink) {
            setDesc(currentLink.desc);
        }
    }, [pathname]);

    return (
        <div className="nav__cont">
            <h3 className="h3 text-center black">Location</h3>
            <nav className="nav flex space-a mt-16">
                {links.map((link, i) => (
                    <NavLink
                        to={`/career${link.path}`}
                        className={({ isActive }) => isActive ? "nav__btn active" : "nav__btn"}
                        key={i}
                    >
                        <span className="btn-bg" />
                        {link.name}
                    </NavLink>
                ))}
            </nav>
            <p className="nav__text regular gray mt-16">
                {desc}
            </p>
        </div>
    );
};

export default CareerNav;
