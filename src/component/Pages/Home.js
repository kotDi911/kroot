import HomeCard from "../cards/HomeCard";
import {useHomeCard} from "../store/home";
import Projects from "./Projects";
import ProjectsCard from "../cards/ProjectsCard";
import VideoCard from "../cards/VideoCard";

const Home = () => {
    const data = useHomeCard((store) => store.data)

    return (
        <article className="article home">
            <section className="container-80">
                <div className="home__grid">
                    {data.map((item) => item.poster ? <VideoCard key={item.id} props={item}/>:<HomeCard key={item.id} props={item}/>)}
                </div>
            </section>
        </article>
    )
}
export default Home