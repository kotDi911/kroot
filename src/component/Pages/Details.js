import {useLocation} from "react-router-dom";
import Gallery from "../cards/Details/Gallery";
import HomeCard from "../cards/HomeCard";
import {useCards} from "../store/projects";
import VideoCard from "../cards/VideoCard";

const Title = ({title}) => {
    const slice = title.indexOf("-");
    return (
        <h1 className="h1 black">
            {slice < 0 ? title : (
                <>
                    {title.slice(0, slice)}
                    <span className="gray">{title.slice(slice)}</span>
                </>
            )}
        </h1>
    )
}
const Images = ({images}) => {
    return (
        <div className="img-cont flex col">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            {images.map((img, i) => <img key={i} src={img.img} alt="info image" className="img mt-32"/>)}
        </div>
    )
}
const Options = ({options}) => {
    return (
        <div className="flex col mt-32">
            {options.map((option, i) =>
                <div key={i} className="flex col mt-16">
                    <p className="gray fs-14">{option.title}</p>
                    <p className="regular black">{option.desc}</p>
                </div>
            )}
        </div>
    )
}

const Details = () => {
    const cards = useCards((store) => store.cards)
    const {state} = useLocation()

    // const {props} = state;
    const {name, description, descriptionImg, galleryImg, options} = state;
    console.log(state)
    // console.log(name)
    // return (
    //     <article className="article details">
    //         <section className="container-80">
    //             <Title title={name}/>
    //             <p className="regular gray mt-16">{description}</p>
    //             <Images images={descriptionImg}/>
    //             <Gallery images={galleryImg}/>
    //             <Options options={options}/>
    //         </section>
    //         <section className="container-80">
    //             <div className="details__grid mt-112">
    //                 <HomeCard props={{name: "projects",  url: "projects", title: "Projects", btnText: "all projects"}}/>
    //                 {cards.map((card, i) => <VideoCard key={i} props={card}/>)}
    //             </div>
    //         </section>
    //     </article>
    // )
}
export default Details