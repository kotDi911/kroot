import {useSize} from "../store/size";
import {Link} from "react-router-dom";
import Button from "../Button";

const VideoCard = ({props}) => {
    const size = useSize((store) => store.size)
    const {name, btnText, videoM, videoD, poster, url} = props;
    return (
        <Link to={url} target="_blank"
              className="main__card flex end relative hover__card"
              style={{gridArea: name ? name : ""}}
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
                        <span className="fs-20 white">{btnText.toUpperCase()}</span>
                    </div>
                    <Button color={true}/>
                </div>
            </div>
        </Link>
    )
}
export default VideoCard