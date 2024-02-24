import LongButton from "../../LongButton";
import {useGeneration} from "../../store/generation";
import SupervisorCard from "./SupervisorCard";

const SupervisorsSection = () => {
    const supervisorsCards = useGeneration((store) => store.supervisorsCards);
    return (
        <section className="container-80">
            <h2 className="h2 gray mt-52 mb-32"><span className="black">G.</span> Supervisors</h2>
            <div className="supervisor__flex flex m-52">
                {supervisorsCards.map(({id, img, name, title}) => (
                    <SupervisorCard key={id} {...{img, name, title}}/>
                ))}
            </div>
            <LongButton text="Get in touch" url="get_in_touch"/>
        </section>
    )
}
export default SupervisorsSection