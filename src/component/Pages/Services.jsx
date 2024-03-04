import ServicesCard from "../cards/ServicesCard";
import {useServiceCard} from "../store/services";
const Services = () => {
    const services = useServiceCard((store) => store.services)
    return (
        <article className="article services">
            <section className="container-64">
                <h1 className="h1 black">Services</h1>
                <p className="text_details regular gray">
                    We bring creativity to life, enhance visual appeal, and ensure a flawless execution
                    of visual elements from start to finish
                </p>
                <div className="services__grid">
                    {services.map((item, i) => <ServicesCard key={i} props={item}/>)}
                </div>
            </section>
        </article>
    )
}
export default Services