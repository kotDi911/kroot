import LongButton from "../../LongButton";
import MasterclassCard from "./MasterclassCard";
import khalid from "../../../assets/g_kroot/Khalid_Satelite.png";
import {useGeneration} from "../../store/generation";
import TextP from "../TextP";

const registration = "https://forms.gle/Dshcz75zEU3vJ9f17";

const MasterclassSection = () => {
    const masterclassCards = useGeneration((store) => store.masterclassCards);
    const masterclassText = useGeneration((store) => store.masterclassText);
    return (
        <section className="container-80">
            <h2 className="h2 gray mt-52 mb-32">
                <span className="black">G.</span>
                Masterclass
            </h2>
            {masterclassText.map((item, i) => <TextP key={i} text={item.text}/>)}
            <LongButton text="Registration" url={registration}/>
            <div className="generation__grid-cards mt-52">
                {masterclassCards.map((item, i) => <MasterclassCard key={i} props={item}/>)}
            </div>
            <h1 className="h1 black m-52">New masterclass soon</h1>
            <div className="relative">
                <img className="img" src={khalid} alt="Khalid Satelite"/>
                <span className="img__text absolute white h3">Khalid Satelite</span>
            </div>
        </section>
    )
}
export default MasterclassSection