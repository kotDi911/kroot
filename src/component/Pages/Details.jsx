import {useLocation} from "react-router-dom";
import Gallery from "../cards/Details/Gallery";
import HomeCard from "../cards/HomeCard";
import VideoCard from "../cards/VideoCard";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useState} from "react";

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
const Images = ({images, name}) => {
    const slice = name.indexOf("-");
    const alt = name.slice(0, slice) + "details image"
    const [style, setStyle] = useState({filter: "blur(.2rem)"})
    return (
        <div className="img-cont flex col mt-32">
            {
                images.map((img, i) =>
                    <div className="w-100 h-100" style={style}>
                        <LazyLoadImage key={i}
                                       width="100%"
                                       heihg="100%"
                                       className="img img__main"
                                       src={img.img}
                                       alt={alt + "-" + (i + 1)}
                                       placeholderSrc={img.poster}
                                       onLoad={() => setStyle({filter: "none"})}
                        />
                    </div>
                )
            }
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
    const {state} = useLocation()

    const {
        buttons,
        description,
        descriptionImg,
        galleryImg,
        name,
        options,
    } = state;
    return (
        <article className="article details">
            <section className="container-80 p_top">
                    <Title title={name}/>
                    <p className="regular gray mt-16">{description}</p>
                    <Images images={descriptionImg} name={name}/>
                    <Gallery images={galleryImg}/>
                    <Options options={options}/>
            </section>
            <section className="container-80">
                    <div className="details__grid mt-112">
                        <HomeCard props={{name: "projects", url: "projects", title: "Projects", btnText: "all projects"}}/>
                        {buttons.map((card, i) => <VideoCard key={i} props={card}/>)}
                    </div>
            </section>
        </article>
    )
}
export default Details