import MainImgCard from "../cards/About/MainImgCard";
import AboutCardsGrid from "../cards/About/AboutCardsGrid";
import AboutTeam from "../cards/About/AboutTeam";
import LongButton from "../LongButton";
import HomeCard from "../cards/HomeCard";
import {useAbout} from "../store/about";

const About = () => {
    const cards = useAbout((store) => store.cards)
    return (
        <section className="section about">
            <div className="container-80">
                <h1 className="h1">About <span className="gray">us</span></h1>
                <MainImgCard/>
                <AboutCardsGrid/>
                <AboutTeam/>
                <LongButton text="join the kroot" link="career"/>
                <div className="about__grid-cards mt-112">
                    {cards.map((card, i) => <HomeCard key={i} props={card}/>)}
                </div>
            </div>
        </section>
    )
}
export default About