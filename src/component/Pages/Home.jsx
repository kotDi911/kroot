import {useLoaderData} from "react-router";
import {useState} from "react";
import VideoCard from "../cards/VideoCard";
import HomeCard from "../cards/HomeCard";
import {useHomeCard} from "../store/home";

export const homeLoader = async () => {                                                   //add { request, params }
    const res = await fetch(`https://qdz.guk.temporary.site/wp-api/wp-json/wp/v1/project`);

    if (res.status === 404) {
        throw new Response("Not Found", {status: 404});
    }
    // res.json().then(res=> res.map(data => data.acf))
    return res.json()
        .then(res => res.map(item=> {
                if (item.acf) {
                    return item.acf
                } else {
                    throw new Response("Not Found", {status: 404})
                }
            }
            // console.log(res.map(item=> item))
        ))
    // const res = {render: "data cards request"};
    // const res = {status: 404};
    // if (res.status === 404) {
    //     throw new Response("Not Found", {status: 404});
    // }
    // return res.json();
    // return json(res,{status: 404});
}

const Home = () => {
    const data = useHomeCard((store) => store.data)

    // const data = useLoaderData()
    // console.log(data)

    // const [a, setA] = useState();
    // const [b, setB] = useState();
    // const [c, setC] = useState();
    // const [d, setD] = useState();
    // // fun()
    // // .then(res=> setA(res.map(item=> item.acf)))
    // // .then(res=> setB(res.map(options => options.options)))
    // // .then(res=> setC(res))
    // // .catch(err=> console.log(err))
    // // .then(res=> console.log(res))
    // // .map(el=> console.log(el.options))))
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d)
    // console.log(res)
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