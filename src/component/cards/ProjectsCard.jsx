import {Link} from "react-router-dom";
import Button from "../Button";
import {useSize} from "../store/size";
import {useUrl} from "../store/Urls";
import {useMemo} from "react";

const ProjectsCard = ({props}) => {
    const size = useSize((store) => store.size)
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
    const videoM = `${folderUrl}/video/preview_mobile.mp4`;
    const videoD = `${folderUrl}/video/preview_desktop.mp4`;
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
                            src={size <= 550 ? videoM : videoD}
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