import LongButton from "../LongButton";
import TextCard from "../cards/Contacts/TextCard";
import PhotoCard from "../cards/Contacts/PhotoCard";
import {Helmet} from "react-helmet-async";
import {useContacts} from "../store/contactsData";
import {useEffect, useState} from "react";

const RenderCard = ({count, item}) => {
    const [isEven, setIsEven] = useState(false);
    const [counter] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991) {
                setIsEven(false);
            } else {
                setIsEven(count % 2 === 0);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [counter]);

    return (
        <div className="contacts__grid-card">
            {isEven ?
                <>
                    <PhotoCard props={item.photo}/>
                    <TextCard props={item.card} areaName={"text" + count}/>
                </>
                :
                <>
                    <TextCard props={item.card} areaName={"text" + count}/>
                    <PhotoCard props={item.photo}/>
                </>
            }
        </div>
    )
}

const Contacts = () => {
    const card = useContacts((store) => store.card)
    const photo = useContacts((store) => store.photo)
    const other = useContacts((store) => store.other)

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
                <meta property="og:description"
                      content="Contact The Kroot team: Tom Ash (Executive Producer) in Los Angeles and Julia Lusenko (Producer, CFO) in Ukraine."/>
                <meta property="og:image" content="https://www.thekroot.com/logo512.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.thekroot.com/contacts/"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            <section className="container-64">
                <div className="contacts__grid">
                    <div className="contacts__grid-card">
                        <TextCard props={card} areaName="text"/>
                        <PhotoCard props={photo}/>
                    </div>
                </div>
                <LongButton text="START YOUR PROJECT" url="get_in_touch" style="button"/>
                {/*<PhotoCard props={photo2}/>*/}
                {/*<TextCard props={card2} areaName="text1"/>*/}

                <div className="contacts__grid">
                    {other.map((item, i) =>
                        <RenderCard key={i} count={i} item={item}/>
                    )}
                </div>
            </section>
        </article>
    )
}
export default Contacts