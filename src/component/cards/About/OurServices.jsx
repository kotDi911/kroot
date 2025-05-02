import ServicesCard from "../Services/ServicesCard";
import {useServiceCard} from "../../store/services";

const OurServices = () => {
    const services = useServiceCard((store) => store.services)
    return(
        <section className="container-64">
            <h2 className="h2 text-center black">
                Services
            </h2>
            <div className="flex col mb-32">
                {services.map((item, i) => <ServicesCard key={i} props={item}/>)}
            </div>
        </section>
    )
}
export default OurServices