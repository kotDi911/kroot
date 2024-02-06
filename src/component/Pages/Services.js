import ServicesCard from "../cards/ServicesCard";
import {useServiceCard} from "../store/services";
const Services = () => {
    const services = useServiceCard((store) => store.services)
    return (
        <section className="section services">
            <div className="services__cont">
                <h1 className="h1">Services</h1>
                <p className="text_details regular gray">
                    We bring creativity to life, enhance visual appeal, and ensure a flawless execution
                    of visual elements from start to finish
                </p>
                <div className="services__grid">
                    {services.map((item, i) => <ServicesCard key={i} props={item}/>)}
                </div>
            </div>
        </section>
    )
}
export default Services