import {useParams} from "react-router";
import CareerCard from "./CareerCard";
import {useCareer} from "../../store/career";
import {useEffect, useState} from "react";
import {Loader} from "../../Loader";

const CareerCards = () => {
    const {name} = useParams();
    const fetchVacancy = useCareer((store) => store.fetchVacancy);
    const vacancy = useCareer((store) => store.vacancy);
    const us = useCareer((store) => store.us);
    const ua = useCareer((store) => store.ua);
    const eu = useCareer((store) => store.eu);
    const error = useCareer((store) => store.error);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (vacancy.length === 0) {
            setLoading(true);
            fetchVacancy().finally(() => setLoading(false));
        }
    }, [vacancy, fetchVacancy]);

    useEffect(() => {
        switch (name) {
            case "us":
                setCards(us);
                break;
            case "ua":
                setCards(ua);
                break;
            case "eu":
                setCards(eu);
                break;
            default:
                setCards([]);
                break;
        }
    }, [name, us, ua, eu]);

    return (
        <div className="career__cards">
            {loading ?
                <Loader/>
                :
                error ?
                    <CareerCard err={error.msg}/>
                    :
                    cards.length > 0 && cards.map((card, i) => <CareerCard key={i} {...card} />)
            }
        </div>
    )
}
export default CareerCards