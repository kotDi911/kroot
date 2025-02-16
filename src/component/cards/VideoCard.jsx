import {useSize} from "../store/size";
import {Link} from "react-router-dom";
import Button from "../Button";
import no_video_d from "../../assets/video/no_video_desktop.mp4"
import no_video_m from "../../assets/video/no_video_mobile.mp4"
import {useEffect, useState} from "react";

const VideoCard = ({props}) => {
    const size = useSize((store) => store.size);
    const {name, btnText, video, videoM, videoD, poster, url} = props;
    const [mVideo, setMVideo] = useState("");
    const [dVideo, setDVideo] = useState("");
    useEffect(() => {
        if (video) {
            setDVideo(video + "/" + name + "_desktop.mp4")
            setMVideo(video + "/" + name + "_mobile.mp4")
        } else {
            if (videoM && videoD) {
                setDVideo(videoD)
                setMVideo(videoM)
            } else {
                !url && setDVideo(no_video_d)
                !url && setMVideo(no_video_m)
            }
        }
    }, [])
    // console.log(url)
    // console.log(dVideo)
    console.log(mVideo)
    console.log(video, "video")


    return (
        <Link to={url === "" ? "/error" : url} target="_blank"
              className={`${url === "" ? "disabled-link" : ""} main__card flex end relative hover__card`}
              style={{gridArea: name ? name : ""}}
        >
            <div className="video-cont">
                <video
                    className="video"
                    poster={poster}
                    src={size <= 550 ? mVideo : dVideo}
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