import {ReactComponent as Arrow} from "../../assets/ico/arrow.svg";
import {useNavigate} from "react-router-dom";

const ProjectsCard = ({props}) => {
    const navigate = useNavigate();

    const GoToPage = () => {
        navigate(`/projects/${props.name.replace(/\s+/g, '').toLowerCase()}`);
    }

    return (
        <div className="projects__card flex end relative" onClick={GoToPage}>
            <div>
                <img className="project-img" src={props.img} alt=""/>
            </div>
            <div className="absolute w-100">
                <div className="flex end space-b projects__btn">
                    <div className= "flex center projects__text">
                        <div className="dot black"/>
                        <div className="small black">{props.name.toUpperCase()}</div>
                    </div>
                    <div className="btn bg">
                        <Arrow className="arrow btn-img"/>
                        <span className="btn-bg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectsCard