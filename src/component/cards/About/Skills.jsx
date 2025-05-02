import {useAbout} from "../../store/about";
import CardOptions from "../CardOptions";
import NumbersCard from "./NumbersCard";

const Skills = () => {
    const numbers = useAbout((store) => store.numbers)
    const options = useAbout((store) => store.options)
    return(
        <section className="container-64">
            <h2 className="h2 text-center black">
                Skills
            </h2>
            <div className="about__grid mt-16 mb-32">
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
        </section>
    )
}
export default Skills