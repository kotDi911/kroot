import {Link} from "react-router-dom";
const round = "/assets/icon/round.svg"

const ServicesOptions = ({props}) => {
    const {text, url} = props;
  return(
      <div className="flex space-b mt-16">
          <div className="flex center">
              <img className="mark" alt="mark" src={round}/>
              <p className="regular dark-gray">{text}</p>
          </div>
          {url && <Link className="services__link regular dark-gray-bg white" to={url} target="_blank"> &#9654; watch reel</Link>}
      </div>
  )
}
export default ServicesOptions