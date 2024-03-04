import {Outlet} from "react-router";
import CareerNav from "../cards/Career/CareerNav";
import {useCareer} from "../store/career";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import LongButton from "../LongButton";
import AppsCard from "../cards/Career/AppsCard";

const Career = () => {
    const {pathname} = useLocation();
    const us = useCareer((store) => store.us);
    const ua = useCareer((store) => store.ua);
    const eu = useCareer((store) => store.eu);

    const [cards, setCards] = useState(us);

    useEffect(()=>{
        switch (pathname) {
            case "/career/us":
                setCards(us);
                break;
            case "/career/ua":
                setCards(ua);
                break;
            case "/career/eu":
                setCards(eu);
                break;
            default:
                break;
        }
    }, [pathname])

    return (
        <article className="article career">
            <section className="container-64">
                <h1 className="h1 black">Career</h1>
                <CareerNav/>
                <Outlet context={cards}/>
                <LongButton text="Get in touch" url="get_in_touch"/>
                <AppsCard/>
            </section>
        </article>
    )
}
export default Career