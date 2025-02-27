import {Link} from "react-router-dom";

const TextCard = ({props, areaName}) => {
    const contactInfo = (img2, text) => {
        if (img2) {
            return <img className="img__tel" src={img2} alt="phone number"/>
        } else {
            return <p className="regular black">{text}</p>
        }
    }

    return (
        props.map((item, i) =>
            <div key={i} className="contacts__text flex col space-b" style={{gridArea: areaName}}>
                <h3 className="h3 black mb-8">{item.text}</h3>
                <div className="flex col">
                    {item.options.map((option, i) => <p key={i} className="regular gray mt-16">{option.text}</p>)}
                </div>
                <div className="flex mt-16 contacts__cont">
                    {item.contacts.map((contact, i) =>
                        <Link key={i} className={`${!contact.img2 ? "contact" : "contact2"} flex center w-100`} to={contact.url}>
                            <div className="social__cont">
                                <span className="btn-bg"></span>
                                <img className="social__img" src={contact.img} alt="icon"/>
                            </div>
                            {contactInfo(contact.img2, contact.text)}
                        </Link>
                    )}
                </div>
            </div>
        )
    )
}
export default TextCard