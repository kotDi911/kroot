import tel from "../../assets/ico/social/phone.svg";
import mail from "../../assets/ico/social/mail.svg";
import T from "../../assets/Tomash_Kuzmytskyi.png";
import J from "../../assets/Julia_Lusenko.png";
import LongButton from "../LongButton";
import TextCard from "../cards/Contacts/TextCard";
import PhotoCard from "../cards/Contacts/PhotoCard";

const card1 = [
    {
        title: "Contacts",
        text: "U.S Los Angeles",
        options: [
            {text: "Tom Ash"},
            {text: "VFX"},
            {text: "Executive Producer"},
            {text: "Creative"},
        ],
        contacts: [
            {
                img: tel,
                text: "323.386.32.35",
                url: "",
            },
            {
                img: mail,
                text: "tomash@thekroot.com",
                url: "mailto:tomash@thekroot.com",
            }
        ],
    }
]
const card2 = [
    {
        title: "Contacts",
        text: "Europe / Ukraine",
        options: [
            {text: "Julia Lusenko"},
            {text: "Producer"},
            {text: "CFO"},
        ],
        contacts: [
            {
                img: tel,
                text: "067.799.54.84",
                url: "tel: +380677995484",
            },
            {
                img: mail,
                text: "julia@thekroot.com",
                url: "mailto:julia@thekroot.com",
            }
        ],
    }
]

const photo =[
    {
        area: "photo",
        img: T,
        text: "Tom Ash VFX Executive Producer Tom Ash VFX Executive Producer"
    }
]
const photo1 =[
    {
        area: "photo1",
        img: J,
        text: "Julia Lusenko  Producer / CFO  Julia Lusenko  Producer / CFO"
    }
]

const Contacts = () => {
    return (
        <article className="article contacts">
            <section className="container-64">
                <div className="contacts__grid">
                    <TextCard props={card1} areaName="text"/>
                    <PhotoCard props={photo}/>
                    <LongButton text="Get in touch" url="get_in_touch" style="button"/>
                    <PhotoCard props={photo1}/>
                    <TextCard props={card2} areaName="text1"/>
                </div>
            </section>
        </article>
    )
}
export default Contacts