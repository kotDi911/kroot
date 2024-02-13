import Social from "../Social";

const GetInTouch = () => {
    return (
        <section className="section career">
            <div className="container-48">
                <h1 className="h1">Get in <span className="gray">touch</span></h1>
                <p className="regular gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="form__cont">
                    <div className="form__social flex">
                        <Social props="light"/>
                    </div>
                    <form action="/" className="form flex col">
                        <div className="flex">
                            <input className="input mr-16" type="text" placeholder="First name*"/>
                            <input className="input" type="text" placeholder="Last name*"/>
                        </div>
                        <input className="input" type="email" placeholder="Email*"/>
                        <input className="input" type="tel" placeholder="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        <input className="input" type="text" placeholder="Company"/>
                        <textarea className="input message" type="text" placeholder="Message"/>
                        <button className="submit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default GetInTouch