import {useLocation} from "react-router-dom";
import HomeCard from "../cards/HomeCard";
import VideoCard from "../cards/VideoCard";
import Gallery from "../cards/Details/Gallery";
import Title from "../cards/Details/Title";
import Images from "../cards/Details/Images";
import Options from "../cards/Details/Options";

const Details = () => {
    const {state} = useLocation()
    const {
        folderUrl,
        project_name,
        description,
        main_imgs,
        gallery_imgs,
        buttons_url,
        options,
    } = state;
    const getBtnVideo = () => {
        return Object.entries(buttons_url).map((a) => (
                {
                    name: a[0],
                    url: a[1].url,
                    btnText: a[1].btn_text,
                    videoM: folderUrl + "/video/" + a[0] + "_mobile.mp4",
                    videoD: folderUrl + "/video/" + a[0] + "_desktop.mp4",
                    poster: folderUrl + "/video/poster.mp4",
                }
            )
        )
    }

    const getMainImages = () => {
        let urls = []
        let url = {}
        for (let i = 0; i < main_imgs; i++) {
            const img = folderUrl + "/images/main" + (i + 1) + ".jpg";
            const poster = folderUrl + "/images/main" + (i + 1) + "poster.jpg"
            const alt = project_name + " image" + (i + 1)
            url = {img, poster, alt}
            urls = [...urls, url]
        }
        return urls
    }

    const getDataArr = () => {
        return Object.entries(options).map((a) => (
            {
                title: a[0],
                desc: a[1]
            })
        )
    }

    return (
        <article className="article details">
            <section className="container-80 p_top">
                <Title title={project_name}/>
                <p className="regular gray mt-16">{description}</p>
                <Images getImages={getMainImages} name={project_name}/>
                <Gallery images={gallery_imgs} path={folderUrl}/>
                <Options data={getDataArr}/>
            </section>
            <section className="container-80">
                <div className="details__grid mt-112">
                    <HomeCard props={{name: "projects", url: "projects", title: "Projects", btnText: "all projects"}}/>
                    {getBtnVideo().map((card, i) => <VideoCard key={i} props={card}/>)}
                </div>
            </section>
        </article>
    )
}
export default Details