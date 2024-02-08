import HomeCard from "../cards/HomeCard";
import {useHomeCard} from "../store/home";

const Home = () => {
    const data = useHomeCard((store) => store.data)
    return (
        <section className="section home">
            <div className="container-80">
                <div className="home__grid"> {/*grid-template-columns: repeat(8, 1fr);*/}
                    {data.map((item) => <HomeCard key={item.id} props={item}/>)}
                </div>
            </div>
        </section>
    )
}
export default Home