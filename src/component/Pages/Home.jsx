import VideoCard from "../cards/VideoCard";
import HomeCard from "../cards/HomeCard";
import {useMemo} from "react";
import {useHomeCard} from "../store/home";
import {Helmet} from "react-helmet-async";

// export const loaderHome = async ({request, params}) => {
//     const cardData = await fetch("https://qdz.guk.temporary.site/wp-json/acf/v3/home_card");
//     if (cardData.status === 404) {
//         throw new Response("Not Found", {status: 404, statusText: "Not Found"});
//     }
//     return cardData.json()
// }

const URL = "https://qdz.guk.temporary.site/home/";
const mobile = "_mobile.mp4";
const desktop = "_desktop.mp4";
const poster = "_poster.jpg";

const Home = () => {
    const data = useHomeCard((store) => store.data)

    const cards = useMemo(() => {
        return (
            data.map((item) => item.poster ?
                <VideoCard key={item.id}
                           props={{
                               ...item,
                               videoM: URL + item.name + mobile,
                               videoD: URL + item.name + desktop,
                               poster: URL + item.name + poster
                           }}/>
                :
                <HomeCard key={item.id} props={item}/>)
        )
    }, [])

    return (
        <article className="article home">
            <Helmet>
                <title>The Kroot</title>
                <meta content="The Kroot" property="og:title"/>
                <meta content="The Kroot" property="twitter:title"/>
                <meta name="description"
                      content="The Kroot provides Unreal Engine, Character Animation, Traditional Animation,
          Beauty and other VFX services for tv show , music videos and commercial."
                />
            </Helmet>
            <section className="container-80">
                <div className="home__grid">
                    {cards}
                </div>
            </section>
        </article>
    )
}
export default Home