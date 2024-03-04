import {useOutletContext} from "react-router";
import CareerCard from "./CareerCard";

const CareerCards = () => {
    const cards = useOutletContext();

    return (
        <div className="career__cards">
            {
                cards.map((card, i) => <CareerCard key={i} props={card}/>)
            }
        </div>
    )
}
export default CareerCards