import LongButton from "../LongButton";
import TextCard from "../cards/Contacts/TextCard";
import PhotoCard from "../cards/Contacts/PhotoCard";
import {Helmet} from "react-helmet-async";

const tel = process.env.PUBLIC_URL + "/assets/icon/social/phone.svg";
const mail = process.env.PUBLIC_URL + "/assets/icon/social/mail.svg";
const T = process.env.PUBLIC_URL + "/assets/images/team/Tomash_Kuzmytskyi.png";
const J = process.env.PUBLIC_URL + "/assets/images/team/Julia_Lusenko.png";
const telAnatoly = process.env.PUBLIC_URL + "/assets/images/contacts/anatoly.svg";
const telJulia = process.env.PUBLIC_URL + "/assets/images/contacts/julia.svg";

const card1 = [
    {
        title: "Contacts",
        text: "Los Angeles U.S",
        options: [
            {text: "Anatoly Kuzmytskyi"},
            {text: "Executive Producer / Creative"},
        ],
        contacts: [
            {
                img: tel,
                img2: telAnatoly,
                // text: "323.386.32.35",
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
        text: "Ukraine / Europe",
        options: [
            {text: "Julia Lusenko"},
            {text: "Executive Producer"},
        ],
        contacts: [
            {
                img: tel,
                img2: telJulia,
                // text: "067.799.54.84",
                // url: "tel: +380677995484",
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
            <Helmet>
                <title>Contacts - The Kroot</title>
                <meta content="Contacts the Kroot" property="og:title"/>
                <meta content="Contacts the Kroot" property="twitter:title"/>
                <meta
                    name="description"
                    content="Get in touch with The Kroot. Contact information for Tom Ash (Executive Producer) in Los Angeles and Julia Lusenko (Producer, CFO) in Ukraine."
                />
                <meta
                    name="keywords"
                    content="The Kroot, Contact, VFX, Animation, Executive Producer, Producer, CFO, Unreal Engine, Creative Services"
                />

                <meta property="og:description" content="Contact The Kroot team: Tom Ash (Executive Producer) in Los Angeles and Julia Lusenko (Producer, CFO) in Ukraine." />
                <meta property="og:image" content="https://www.thekroot.com/logo512.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.thekroot.com/contacts/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="container-64">
                <div className="contacts__grid">
                    <TextCard props={card1} areaName="text"/>
                    <PhotoCard props={photo}/>
                    <LongButton text="START YOUR PROJECT" url="get_in_touch" style="button"/>
                    <PhotoCard props={photo1}/>
                    <TextCard props={card2} areaName="text1"/>
                </div>
            </section>
        </article>
    )
}
export default Contacts