import videoPreview from "../../assets/video/g-kroot.mp4"
import {Link} from "react-router-dom";
import {useGeneration} from "../store/generation";
import mtv from "../../assets/mtv.jpg";
import khalid from "../../assets/g_kroot/Khalid_Satelite.png";
import LongButton from "../LongButton";

const imdb = "https://www.imdb.com/name/nm6282617/?ref_=nv_sr_srsg_0";
const registration = "https://forms.gle/Dshcz75zEU3vJ9f17";
const Generation = () => {
    const links = useGeneration((store) => store.links)
    const supervisors = useGeneration((store) => store.supervisors)
    return (
        <section className="section generation">
            <div className="container-80">
                <h1 className="h1">Generation Kroot</h1>
                <video className="mt-52" width="100%" muted autoPlay loop>
                    <source src={videoPreview}/>
                </video>
                <h1 className="h1 m-52">Experience from the<br/>best Supervisors</h1>
                <h2 className="h2 gray"><span className="black">G.</span> Kroot</h2>
                <p className="regular gray mt-16">
                    Genration Kroot is an online vfx school.
                    We provide our experience from Music Video and Commercial Industry.
                    We have program for Courses, Workshops and also Masterclasses to help
                    understand vision in this VFX industry. Our lessons are designed to target
                    the most importiang areas what we VFX supervisers go through on a daily basis.
                    Our supervisers will check your skill level to offer you the best classes for you.
                    "Generation Kroot" team will support you as feedback or notes during the education
                </p>
                <p className="regular gray mt-16">
                    Tomash Kuzmytskyi is a Visual Effects society member and MTV VMA winning The Best
                    Visual Effects for the videos: Justin Bieber- Where are you know ( 2015 )Coldplay
                    Up&Up ( 2016 )His modern creative brings a streamlined approach to any projects what
                    he works.Tomash has working in Music Videos, Commercial industry for 15 years.
                </p>
                <p className="regular gray mt-16">
                    Tomash Kuzmytskyi is a VFX Producer, Creative Director, Animator, VFX supervisor and
                    wildlife artist.Recent credits:Music Videos - Colplay, Justin Bieber, Post Malone,
                    Travis ScottBillie Eilish, Rosali , Khalid, French Montana, Russ and moreTV ShowAmerican Gods,
                    Disney Promo TV Show: Descendants 3,American Aid, The Little Prince(ss)
                </p>
                <div className="generation__grid m-52">
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            to={link.url}
                            className="generation__link flex col text-center gray">
                            <img src={link.img} alt="icon" className="generation__img mb-16"/>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <img src={mtv} alt="mtv" className="img mb-32"/>
                <LongButton text="IMDB - link" link={imdb}/>
                <h2 className="h2 gray mt-52 mb-32"><span className="black">G.</span> Masterclass</h2>
                <p className="regular gray mb-32">
                    We have created a master class on the Coldplay Up&Up project in different
                    languages( English, Ukranian, Rus )Our analysis of the project so subtly
                    shows the detailsYou will understand the basics of thinking and visual
                    perception on the part of the director and learn how to look.This master
                    class is a hybrid model. You can watch the master class when you have time.
                    And we are conducting an online lesson to answer your questions about this
                    project.For a small training, we suggest you do your homework for which we will
                    give you feedback. This is a valuable consolidation and enlightenment of the
                    master class.Pricing and dates you will find on registration page.Click ro REGISTRATION !Le'ts go!
                </p>
                <LongButton text="Registration" link={registration}/>
                <div className="flex mt-52" style={{gap: "1rem"}}>
                    <div
                        className="card"
                        style={{
                            background: "white",
                            borderRadius: "25px",
                            height: "20rem",
                            width: "100%",
                        }}></div>
                    <div
                        className="card"
                        style={{
                            background: "white",
                            borderRadius: "25px",
                            height: "20rem",
                            width: "100%",
                        }}></div>
                </div>
                <h1 className="h1 black m-52">New masterclass soon</h1>
                <div className="relative">
                    <img className="img" src={khalid} alt="Khalid Satelite"/>
                    <span className="img__text absolute white h3">Khalid Satelite</span>
                </div>
                <h2 className="h2 gray mt-52 mb-32"><span className="black">G.</span> Workshops</h2>
                <div className="flex mt-52" style={{gap: "1rem"}}>
                    <div
                        className="card"
                        style={{
                            background: "white",
                            borderRadius: "25px",
                            height: "14rem",
                            width: "100%",
                        }}
                    >
                    </div>
                    <div
                        className="card"
                        style={{
                            background: "white",
                            borderRadius: "25px",
                            height: "14rem",
                            width: "100%",
                        }}
                    >
                    </div>
                </div>
                <div className="flex mt-16" style={{gap: "1rem"}}>
                    <div
                        className="card"
                        style={{
                            background: "white",
                            borderRadius: "25px",
                            height: "14rem",
                            width: "100%",
                        }}
                    >
                    </div>
                    <div
                        className="card"
                        style={{
                            background: "white",
                            borderRadius: "25px",
                            height: "14rem",
                            width: "100%",
                        }}
                    >
                    </div>
                </div>
                <div className="flex mt-16" style={{gap: "1rem"}}>
                    <div
                        className="card"
                        style={{
                            background: "white",
                            borderRadius: "25px",
                            height: "14rem",
                            width: "100%",
                        }}
                    >
                    </div>
                    <div
                        className="card"
                        style={{
                            background: "white",
                            borderRadius: "25px",
                            height: "14rem",
                            width: "100%",
                        }}
                    >
                    </div>
                </div>
                <h2 className="h2 gray mt-52 mb-32"><span className="black">G.</span> Supervisors</h2>
                <div className="supervisor__flex flex m-52">
                    {supervisors.map(({id, img, name, title}) => (
                        <div
                            key={id}
                            className="supervisor__card flex col text-center gray"
                        >
                            <img src={img} alt="icon" className="supervisor__img mb-16"/>
                            <p className="black">{name}</p>
                            <p className="gray mt-16">{title}</p>
                        </div>
                    ))}
                </div>
                <LongButton text="Get in touch" link="get_in_touch"/>
            </div>
        </section>
    )
}
export default Generation