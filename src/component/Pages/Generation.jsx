import PreviewSection from "../cards/Generation/PreviewSection";
import KrootSection from "../cards/Generation/KrootSection";
import MasterclassSection from "../cards/Generation/MasterclassSection";
import WorkshopSection from "../cards/Generation/WorkshopSection";
import SupervisorsSection from "../cards/Generation/SupervisorsSection";
import {Helmet} from "react-helmet";

const Generation = () => {
    return (
        <article className="article generation">
            <Helmet>
                <title>Generation Kroot</title>
                <meta content="Generation Kroot" property="og:title"/>
                <meta content="Generation Kroot" property="twitter:title"/>
                <meta name="description" content="Generation Kroot"/>
            </Helmet>
            <PreviewSection/>
            <KrootSection/>
            <MasterclassSection/>
            <WorkshopSection/>
            <SupervisorsSection/>
        </article>
    )
}
export default Generation