import {Link} from "react-router-dom";
import Button from "../Button";

const ProjectsCard = ({props}) => {
    const {name, img, description, descriptionImg, galleryImg, options} = props;
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
            <div>
                <img className="project-img" src={img} alt=""/>
            </div>
            <div className="absolute w-100">
                <div className="flex end space-b projects__btn">
                    <div className="flex center projects__text">
                        <div className="dot black"/>
                        <div className="small black">{name.toUpperCase()}</div>
                    </div>
                    <Button color={true}/>
                </div>
            </div>
        </Link>
    )
}
export default ProjectsCard