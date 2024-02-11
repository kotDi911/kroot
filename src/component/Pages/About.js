import mtv from "../../assets/mtv.jpg";
import team from "../../assets/team.jpg";
import {NavLink} from "react-router-dom";
import {ReactComponent as Arrow} from "../../assets/ico/arrow.svg";
import Social from "../Social";

const firstCard = [
    {
        black: "15",
        gray: "+",
        desc: "YEARS OF EXPERIENCE"
    },
    {
        black: "70",
        gray: "+",
        desc: "projects done"
    },
    {
        black: "35",
        gray: null,
        desc: "artist"
    },
    {
        black: "3",
        gray: null,
        desc: "won nomination"
    }
]
const secondCard = [
    {name: "3D"},
    {name: "Compositing"},
    {name: "Clean up"},
    {name: "Rotoscoping"},
    {name: "Matchmoving"},
]
const thirdCard = [
    {
        name: "MTV AWARDS WINNER BEST LATIN",
        gray: "– Billie Eilish, ROSALÍA - Lo Vas A Olvidar (2021)"
    },
    {
        name: "MTV AWARDS WINNER BEST VISUAL EFFECT",
        gray: "– Coldplay - Up&Up(2016)"
    },
    {
        name: "MTV AWARDS WINNER BEST VISUAL EFFECT",
        gray: "– Justine Bieber - Where Are U Now (2015)"
    }
]

const FirstCard = ({black, gray, desc}) => {
    return (
        <div className="flex col numbers-content">
            <div className="flex">
                <h2 className="h2">{black.toUpperCase()}</h2>
                <span className="h2 gray">{gray}</span>
            </div>
            <div className="numb-description gray">{desc.toUpperCase()}</div>
        </div>
    )
}

const Options = ({props}) => {
    return (
        <div className="flex col">
            {props.map((item, i) =>
                <div key={i} className="flex base mt-16">
                    <div>
                        <div className="round"></div>
                    </div>
                    <p className={`regular w-100 ${item.gray ? "black" : "gray"}`}>
                        {item.name}
                        {item.gray && <span className="gray">{item.gray}</span>}
                    </p>
                </div>
            )}
        </div>
    )
}

const About = () => {
    return (
        <section className="section about">
            <div className="container-80">
                <h1 className="h1">About</h1>
                <div className="about__main-img relative">
                    <div className="about__text-cont flex col absolute white space-b">
                        <h3 className="h3">MTV Award Winning</h3>
                        <p className="regular text-center">The Kroot is Visual Effects and Animation studios.
                            We based in Los Angeles
                            ‍An important aspect of our job - is to show creativity, using the latest technology and
                            radical ideas that the world hasn’t seen before. Our motto is “You are Rad!“</p>
                        <h3 className="h3 text-end">Best Visual Effect</h3>
                    </div>
                    <img className="img" src={mtv} alt=""/>
                </div>
                <div className="about__grid mt-16">
                    <div className="about__card" style={{gridArea: "1/1/1/4"}}>
                        <div className="about__grid-small">
                            {firstCard.map((item, i) => <FirstCard key={i} {...item}/>)}
                        </div>
                    </div>
                    <div className="about__card flex col" style={{gridArea: "1/4/1/6"}}>
                        <h3 className="h3">What <span className="gray">we do</span></h3>
                        <Options props={secondCard}/>
                    </div>
                    <div className="about__card flex col" style={{gridArea: "1/6/1/9"}}>
                        <h3 className="h3">Nominations</h3>
                        <Options props={thirdCard}/>
                    </div>
                </div>
                <div className="about__team mt-16">
                    <h2 className="h2">Our team</h2>
                    <p className="text_details regular gray mt-16">
                        Generation Kroot is our secret in the creation of visual effects!Everyone who joins our team
                        becomes a superstar. You’re Rad!
                    </p>
                    <img className="img mt-16" src={team} alt="team"/>
                    <p className="regular gray mt-16 text-center">
                        Successful and interesting projects were created under the leadership Tomash Kuzmitskyi, for
                        such musical artists as: Post Malone, Travis Scott, Justin Bieber, Imagine Dragons, Daft Punk,
                        Ava Max, Kanie west,Dj Khaled, Lil Pump, Marilyn Manson, Snoop Dogg, Tyga, Wiz Khalifa,
                        Lil Wayne, Chris brown, Rick Ross, Nicki Minaj and many other .
                    </p>
                    <p className="regular gray mt-16 text-center">
                        The Kroot is Animation and Visual Effects Studios based in Los Angeles.
                        We are dreamers and creative team who love any arts and animaiton.
                        We have international team.
                        Most of our artist from UkraineSince 24th of Fab 2022 we changed our workflow to remote.
                    </p>
                    <div className="about__social flex mt-16">
                       <Social props="light"/>
                    </div>
                </div>
                <div className="long-btn hover__card mt-16">
                    <NavLink to="/career" className="flex center">
                        <>
                            <p className="numbers-content gray mr-16">text</p>
                            <div className="btn">
                                <Arrow className="arrow btn-img"/>
                                <span className="btn-bg"/>
                            </div>
                        </>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}
export default About