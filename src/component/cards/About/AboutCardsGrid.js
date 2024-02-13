import {useAbout} from "../../store/about";
import CardOptions from "./CardOptions";
import NumbersCard from "./NumbersCard";

const AboutCardsGrid = () => {
    const nominations = useAbout((store) => store.nominations)
    const numbers = useAbout((store) => store.numbers)
    const options = useAbout((store) => store.options)
    return(
        <div className="about__grid mt-16">
            <div className="about__card" style={{gridArea: "nominations"}}>
                <h3 className="h3">Nominations</h3>
                <CardOptions props={nominations}/>
            </div>
            <div className="about__card flex col" style={{gridArea: "numbers"}}>
                <div className="about__grid-small">
                    {numbers.map((item, i) => <NumbersCard key={i} {...item}/>)}
                </div>
            </div>
            <div className="about__card flex col" style={{gridArea: "options"}}>
                <h3 className="h3">What <span className="gray">we do</span></h3>
                <CardOptions props={options}/>
            </div>
        </div>
    )
}
export default AboutCardsGrid