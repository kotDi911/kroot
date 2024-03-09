import VideoCard from "../cards/VideoCard";
import HomeCard from "../cards/HomeCard";
import {useMemo, useState} from "react";
import {useLoaderData} from "react-router";

export const loaderHome = async ({request, params}) => {
    const cardData = await fetch("https://qdz.guk.temporary.site/wp-json/acf/v3/home_card");
    if (cardData.status === 404) {
        throw new Response("Not Found", {status: 404, statusText: "Not Found"});
    }
    return cardData.json()
}

const URL = "https://qdz.guk.temporary.site/home/";
const mobile = "_mobile.mp4";
const desktop = "_desktop.mp4";
const poster = "_poster.jpg";

const Home = () => {
    // const data = useHomeCard((store) => store.data)
    const cardData = useLoaderData()
    const [data] = useState(cardData.map(item => item.acf))

    const cards = useMemo(() => {
        return (
            data.map((item) => item.poster ?
                <VideoCard key={item.id}
                           props={{
                               ...item,
                               videoM: URL + "music" + mobile,
                               videoD: URL + "commercial" + desktop,
                               poster: URL + "commercial" + poster
                           }}/>
                :
                <HomeCard key={item.id} props={item}/>)
        )
    }, [])

    return (
        <article className="article home">
            <section className="container-80">
                <div className="home__grid">
                    {cards}
                </div>
            </section>
        </article>
    )
}
export default Home