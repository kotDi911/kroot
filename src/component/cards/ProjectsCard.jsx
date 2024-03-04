import {Link} from "react-router-dom";
import Button from "../Button";
import {useSize} from "../store/size";

import videoX from "../../assets/video/projects/640x360.mp4"

const ProjectsCard = ({props}) => {
    const size = useSize((store) => store.size)
    const {
        buttons,
        description,
        descriptionImg,
        galleryImg,
        name,
        options,
        poster,
        videoD,
        videoM
    } = props;
    return (
        <Link to={`/projects/${name.replace(/\s+/g, '').toLowerCase()}`}
              className="projects__card flex end relative hover__card"
              state={
                  {
                      buttons,
                      description,
                      descriptionImg,
                      galleryImg,
                      name,
                      options,
                  }
              }
        >
            <div className="video-cont">
                <video
                    className="video"
                    poster={poster}
                    src={size <= 550 ? videoM : videoD}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                />
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