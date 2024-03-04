import tel from "../../assets/ico/social/phone.svg"
import mail from "../../assets/ico/social/mail.svg"
import T from "../../assets/Tomash_Kuzmytskyi.png"
import J from "../../assets/Julia_Lusenko.png"
import LongButton from "../LongButton";
import {Link} from "react-router-dom";

const TextCard = ({props, areaName}) => {
    return (
        props.map((item, i) =>
            <div key={i} className="contacts__text flex col space-b" style={{gridArea: areaName}}>
                {/*<h1 className="h1 text-start">{item.title}</h1>*/}
                <h3 className="h3 black mb-8">{item.text}</h3>
                <div className="flex col">
                    {item.options.map((option, i) => <p key={i} className="regular gray mt-16">{option.text}</p>)}
                </div>
                <div className="flex mt-16 contacts__cont">
                    {item.contacts.map((contact, i) =>
                        <Link key={i} className="contact flex center w-100" to={contact.url}>
                            <div className="social__cont">
                                <span className="btn-bg"></span>
                                <img className="social__img" src={contact.img} alt=""/>
                            </div>
                            <p className="regular black">{contact.text}</p>
                        </Link>
                    )}
                </div>
            </div>
        )
    )
}
const PhotoCard = ({props}) => {
    return (
       props.map((item, i)=>
           <div key={i} className="contacts__photo" style={{gridArea: item.area}}>
               <div className="round__text-cont">
                   <div className="contacts__logo">
                       <img className="img" src={item.img} alt="profile"/>
                   </div>
                   <div className="round__text gray regular">
                       {item.text.split("").map((char, j)=>
                           <span key={j} className="round__span" style={{transform: `rotate(${j*5.8}deg)`}}>{char}</span>
                       )}
                   </div>
               </div>
           </div>
       )
    )
}

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