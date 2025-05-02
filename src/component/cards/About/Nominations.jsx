import {useAbout} from "../../store/about";
import CardOptions from "../CardOptions";

const Nominations = () => {
    const nominations = useAbout((store) => store.nominations)
    return(
        <section className="container-64">
            <h2 className="h2 text-center black">
                Our Awards
            </h2>
            <div className="about__card mt-16 mb-32">
                <CardOptions props={nominations}/>
            </div>
        </section>
    )
}
export default Nominations