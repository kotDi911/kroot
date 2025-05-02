import ServicesCard from "../cards/Services/ServicesCard";
import {useServiceCard} from "../store/services";
import {Helmet} from "react-helmet-async";
const Services = () => {
    const services = useServiceCard((store) => store.services)
    return (
        <article className="article services">
            <Helmet>
                <title>Services - The Kroot</title>
                <meta content="Services - The Kroot" property="og:title" />
                <meta content="Services - The Kroot" property="twitter:title" />
                <meta name="description" content="Services offered by The kroot company"/>
                <meta
                    name="keywords"
                    content="Unreal Engine, VFX, Animation, Visual Effects, 3D Animation, Motion Graphics, The Kroot, Creative Services"
                />
                <meta property="og:description" content="Services offered by The kroot company"/>
                <meta property="og:image" content="https://www.thekroot.com/logo512.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.thekroot.com/services/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="container-64">
                <h1 className="h1 black">Our VFX Solutions</h1>
                <p className="text_details regular gray">
                    High-speed, high-quality VFX solutions – 24/7
                </p>
                <div className="services__grid">
                    {services.map((item, i) => <ServicesCard key={i} props={item}/>)}
                </div>
            </section>
        </article>
    )
}
export default Services