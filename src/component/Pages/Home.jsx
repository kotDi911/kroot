import VideoCard from "../cards/VideoCard";
import HomeCard from "../cards/HomeCard";
import {useMemo} from "react";
import {useHomeCard} from "../store/home";
import {Helmet} from "react-helmet-async";

const Home = () => {
    const data = useHomeCard((store) => store.data)

    const cards = useMemo(() => {
        return (
            data.map((item) => item.poster ?
                <VideoCard key={item.id} props={item}/>
                :
                <HomeCard key={item.id} props={item}/>)
        )
    }, [data])

    return (
        <article className="article home">
            <Helmet>
                <title>The Kroot - VFX and animation</title>
                <meta content="The Kroot" property="og:title"/>
                <meta content="The Kroot" property="twitter:title"/>
                <meta name="description"
                      content="The Kroot provides Unreal Engine, Character Animation, Traditional Animation,
          Beauty and other VFX services for tv show , music videos and commercial."
                />
                <meta
                    name="keywords"
                    content="Unreal Engine, VFX, Animation, TV shows, Music videos, Commercials, Character Animation, Traditional Animation"
                />
                <meta property="og:image" content="https://www.thekroot.com/logo512.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.thekroot.com/" />
                <meta name="twitter:image" content="https://www.thekroot.com/logo512.png" />
                <meta name="twitter:card" content="summary_large_image" />
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