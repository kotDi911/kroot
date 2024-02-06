import {Link} from "react-router-dom";

const ServicesOptions = ({props}) => {
    const {text, url} = props;
  return(
      <div className="flex space-b mt-16">
          <div className="flex">
              <div className="mark"/>
              <p className="regular gray">{text}</p>
          </div>
          {url && <Link className="services__link regular gray" to={url} target="_blank">watch reel</Link>}
      </div>
  )
}
export default ServicesOptions