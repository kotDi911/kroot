import {useServiceCard} from "../store/services";
import {Helmet} from "react-helmet-async";
import CarouselServices from "../cards/Services/CarouselServices";

const Services1 = () => {
    const services = useServiceCard((store) => store.services)
    return (
        <main className="main services">
            <Helmet>
                <title>Services - The Kroot</title>
                <meta content="Services - The Kroot" property="og:title"/>
                <meta content="Services - The Kroot" property="twitter:title"/>
                <meta name="description" content="Services offered by The kroot company"/>
                <meta
                    name="keywords"
                    content="Unreal Engine, VFX, Animation, Visual Effects, 3D Animation, Motion Graphics, The Kroot, Creative Services"
                />
                <meta property="og:description" content="Services offered by The kroot company"/>
                <meta property="og:image" content="https://www.thekroot.com/logo512.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.thekroot.com/services/"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            <section className="container-64">
                <h1 className="h1 black">Our VFX Solutions</h1>
                <p className="text_details regular gray">
                    High-speed, high-quality VFX solutions – 24/7
                </p>

                <div className="grid__partners">
                    <div className="img__cont">
                        <img src="" alt="" className="img"/>
                    </div>
                    <div className="img__cont">
                        <img src="" alt="" className="img"/>
                    </div>
                    <div className="img__cont">
                        <img src="" alt="" className="img"/>
                    </div>
                    <div className="img__cont">
                        <img src="" alt="" className="img"/>
                    </div>
                    <div className="img__cont">
                        <img src="" alt="" className="img"/>
                    </div>
                    <div className="img__cont">
                        <img src="" alt="" className="img"/>
                    </div>
                </div>

                <div className="grid__service">
                    <div className="service__card">
                        <img src="" alt="" className="img"/>
                        <p className="regular white"></p>
                    </div>
                </div>

                <div className="main__video-cont">
                    <video src="" className="reel"></video>
                    <p className="regular white"></p>
                </div>

                <h1 className="h1 black">What people say about us</h1>

                <CarouselServices/>

                {/*<div className="services__grid">*/}
                {/*    {services.map((item, i) => <ServicesCard key={i} props={item}/>)}*/}
                {/*</div>*/}
            </section>
        </main>
    )
}
export default Services1