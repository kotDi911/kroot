import PreviewSection from "../cards/Generation/PreviewSection";
import KrootSection from "../cards/Generation/KrootSection";
import MasterclassSection from "../cards/Generation/MasterclassSection";
import WorkshopSection from "../cards/Generation/WorkshopSection";
import SupervisorsSection from "../cards/Generation/SupervisorsSection";

const Generation = () => {
    return (
        <article className="article generation">
            <PreviewSection/>
            <KrootSection/>
            <MasterclassSection/>
            <WorkshopSection/>
            <SupervisorsSection/>
        </article>
    )
}
export default Generation