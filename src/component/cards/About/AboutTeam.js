import team from "../../../assets/team.jpg";
import team2 from "../../../assets/team2.jpg";
import Social from "../../Social";
import {useEffect} from "react";

const AboutTeam = () => {
    const width = window.innerWidth;

    return(
        <div className="about__team mt-16">
            <h2 className="h2">Our team</h2>
            <p className="text_details regular gray mt-16">
                Generation Kroot is our secret in the creation of visual effects!Everyone who joins our team
                becomes a superstar. You’re Rad!
            </p>
            <img className="team img mt-16" src={width <= 550 ? team2: team} alt="team"/>
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
    )
}
export default AboutTeam