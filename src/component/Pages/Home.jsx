import VideoCard from "../cards/VideoCard";
import HomeCard from "../cards/HomeCard";
import {useHomeCard} from "../store/home";
import {useEffect, useMemo} from "react";
import {useLoaderData} from "react-router";

export const loaderHome = async ({ request, params }) => {
  const cardData = await fetch("https://qdz.guk.temporary.site/wp-json/acf/v3/home_page");
    if (cardData.status === 404) {
        throw new Response("Not Found", { status: 404, statusText: "Not Found"});
    }
    return cardData.json()
}

const Home = () => {
    const data = useHomeCard((store) => store.data)
    const cardData = useLoaderData()

    useEffect(() => {
        console.log(cardData)
    },[])

    const cards = useMemo(()=>{
        return(
            data.map((item) => item.poster ?
                <VideoCard key={item.id} props={item}/>:<HomeCard key={item.id} props={item}/>)
        )
    },[])

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