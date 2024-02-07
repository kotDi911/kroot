import {useLocation} from "react-router-dom";

const InfoBlock = ({img, description, options}) => {
  return(
      <>
          <img className="mt-16" src={img} alt="img"/>
          <p className="regular gray mt-16">{description}</p>
          <ul className="mt-16">
              {options.map((item, i) => <li key={i} className="regular gray">{item.name}</li>)}
          </ul>
      </>
  )
}
const Details = () => {
    const {state} = useLocation()
    const {details, galleryTitle, galleryDescription, galleryImg} = state;

    return (
        <section className="section details">
            <div className="details__cont">
                {details.map((item, i) => <InfoBlock key={i} {...item}/>)}
            </div>
        </section>
    )
}
export default Details