import Social from "../Social";
import GetInTouchForm from "../Form";
import {useEffect, useState} from "react";
import done from "../../assets/ico/done.svg"

const GetInTouch = () => {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(false)
        }, 2000);
        console.log("use",isActive)
        return () => clearTimeout(timer);
    }, [isActive]);
    const sentMail = () => {
        setIsActive(true)
        console.log(isActive)
    }
    return (
        <article className="article get-in-touch">
            <section className="container-48 relative">
                <h1 className="h1">Get in <span className="gray">touch</span></h1>
                <p className="regular gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="form__cont">
                    <div className="form__social flex">
                        <Social props="light"/>
                    </div>
                    <GetInTouchForm sentMail={sentMail}/>
                </div>
            </section>
            <div className={`popup__message ${isActive ? "active" : ""}`}>
                <img className="mr-16" src={done} alt="ok" width="24px" height="24px"/>
                <p className="popup__text fs-20">Your message has been sent</p>
            </div>
        </article>
    )
}
export default GetInTouch