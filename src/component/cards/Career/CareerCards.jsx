import {useOutletContext} from "react-router";
import CareerCard from "./CareerCard";
import {useCareer} from "../../store/career";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const CareerCards = () => {
    const {pathname} = useLocation();
    const fetchVacancy = useCareer((store) => store.fetchVacancy);
    const vacancy = useCareer((store) => store.vacancy);
    const us = useCareer((store) => store.us);
    const ua = useCareer((store) => store.ua);
    const eu = useCareer((store) => store.eu);
    const [cards, setCards] = useState([]);

    useEffect(()=> {
        if(vacancy.length <= 0){
            fetchVacancy().then(() => {
            })
        }
        handleFilter()
    }, [fetchVacancy, vacancy])


    useEffect(()=>{
       handleFilter()
    }, [pathname])

    const handleFilter =() =>{
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
    }

    return (
        <div className="career__cards">
            {
                cards.map((card, i) => <CareerCard key={i} props={card}/>)
            }
        </div>
    )
}
export default CareerCards