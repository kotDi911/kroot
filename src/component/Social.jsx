import {ReactComponent as In} from "../svg/social/insta.svg";
import {ReactComponent as Fb} from "../svg/social/fb.svg";
import {ReactComponent as Yo} from "../svg/social/youtube.svg";
import {Link} from "react-router-dom";

const social = [
    {
        id: 1,
        name: "instagramm",
        url: "https://www.instagram.com/thekroot.vfx/"
    },
    {
        id: 2,
        name: "facebook",
        url: "https://www.facebook.com/thekroot/"
    },
    {
        id: 3,
        name: "youtube",
        url: "https://www.youtube.com/@thekroot"
    },
]
const Social =({props})=>{
    const renderIcon = (item) => {
      switch (item){
          case "instagramm":
              return <In className="social__img"/>
          case "facebook":
              return <Fb className="social__img"/>
          case "youtube":
              return <Yo className="social__img"/>
          default:
              break;
      }
    }
    return(
        <>
            {social.map((item) =>
                <Link className="social__cont" key={item.name} to={item.url} target="_blank">
                    <span className={`social__bg ${props}`}/>
                    {renderIcon(item.name)}
                </Link>
            )}
        </>
    )
}
export default Social