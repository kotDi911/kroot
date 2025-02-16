import {Link} from "react-router-dom";
import Button from "../Button";
import {useUrl} from "../store/Urls";
import {useMemo} from "react";

const ProjectsCard = ({props}) => {
    const projectsUrl = useUrl((store) => store.projectsUrl)
    const {
        path,
        project_name,
        description,
        main_imgs,
        gallery_imgs,
        options,
        buttons_url,
    } = props;
    const button = useMemo(()=>{
        return(
            <Button color={true}/>
        )
    },[])
    const folderUrl = projectsUrl+path
    const video = `${folderUrl}/video/preview.mp4`;
    const poster = `${folderUrl}/video/poster.jpg`;
    const name = project_name.replace(/\s+/g, '').toLowerCase()

    return (
                <Link to={`/projects/${name}`}
                      className="projects__card flex end relative hover__card"
                      state={
                          {
                              folderUrl,
                              project_name,
                              description,
                              main_imgs,
                              gallery_imgs,
                              buttons_url,
                              options,
                          }
                      }
                >
                    <div className="video-cont">
                        <video
                            className="video"
                            poster={poster}
                            src={video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                            preload="none"
                        />
                    </div>
                    <div className="absolute w-100">
                        <div className="flex end space-b projects__btn">
                            <div className="flex center projects__text">
                                <span className="fs-20 white">{project_name.toUpperCase()}</span>
                            </div>
                            {button}
                        </div>
                    </div>
                </Link>
    )
}
export default ProjectsCard