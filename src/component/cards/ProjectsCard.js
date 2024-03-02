import {Link} from "react-router-dom";
import Button from "../Button";
import {LazyLoadImage} from "react-lazy-load-image-component";
import videoM from "../../assets/470H.mp4";
import videoD from "../../assets/920H.mp4";
import poster from "../../assets/poster.png"
import {useSize} from "../store/size";

const Image = ({image, placeholder}) => {
    return (
        <>
            <LazyLoadImage
                alt="alt"
                height="100%"
                width="100%"
                src={image}
                placeholderSrc={placeholder}
                effect="blur"
            />
        </>
    )
}
const ProjectsCard = ({props}) => {
    const size = useSize((store) => store.size)
    const {name, img, placeholder, description, descriptionImg, galleryImg, options} = props;
    return (
        <Link to={`/projects/${name.replace(/\s+/g, '').toLowerCase()}`}
              className="projects__card flex end relative hover__card"
              state={{
                  name: name,
                  description: description,
                  descriptionImg: descriptionImg,
                  galleryImg: galleryImg,
                  options: options,
              }}
        >
            <div className="video-cont">
                <video src={size <= 550 ? videoM : videoD} autoPlay muted loop className="video" poster={poster}/>
            </div>
            <div className="absolute w-100">
                <div className="flex end space-b projects__btn">
                    <div className="flex center projects__text">
                        <span className="fs-20 white">{name.toUpperCase()}</span>
                    </div>
                    <Button color={true}/>
                </div>
            </div>
        </Link>
    )
}
export default ProjectsCard