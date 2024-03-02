import Social from "../Social";
import GetInTouchForm from "../Form";
import {useEffect, useState} from "react";
import done from "../../assets/ico/done.svg"
import notDone from "../../assets/ico/notDone.svg"

const GetInTouch = () => {
    const [isActive, setIsActive] = useState(false)
    const [message, setMessage] = useState("")
    const [doneImg, setDoneImg] = useState(done)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, [isActive]);

    const sentMail = (msg, res) => {
        setIsActive(true)
        setMessage(msg)
        res === "success" ? setDoneImg(done) : setDoneImg(notDone)
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
                <img className="mr-16" src={doneImg} alt="ok" width="24px" height="24px"/>
                <p className="popup__text fs-20">{message}</p>
            </div>
        </article>
    )
}
export default GetInTouch