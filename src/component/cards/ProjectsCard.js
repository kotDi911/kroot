import {ReactComponent as Arrow} from "../../assets/ico/arrow.svg";
import {Link} from "react-router-dom";

const ProjectsCard = ({props}) => {
    const {name, img, details, galleryTitle, galleryDescription, galleryImg} = props;

    return (
        <Link to={`/projects/${name.replace(/\s+/g, '').toLowerCase()}`}
              className="projects__card flex end relative hover__card"
              state={{
                  details: details,
                  galleryTitle: galleryTitle,
                  galleryDescription: galleryDescription,
                  galleryImg: galleryImg
              }}
        >
            <div>
                <img className="project-img" src={img} alt=""/>
            </div>
            <div className="absolute w-100">
                <div className="flex end space-b projects__btn">
                    <div className="flex center projects__text">
                        <div className="dot black"/>
                        <div className="small black">{name.toUpperCase()}</div>
                    </div>
                    <div className="btn bg">
                        <Arrow className="arrow btn-img"/>
                        <span className="btn-bg white-bg"/>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default ProjectsCard