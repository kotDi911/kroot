import ServicesOptions from "./ServicesOptions";

const ServicesCard = ({props}) => {
    const {ico, title, desc, options} = props;
  return(
      <div className="services__card flex col">
          <div className="ico">
              <img className="ico-img" src={ico} alt="icon"/>
          </div>
          <h3 className="h3 mt-16">{title}</h3>
          <p className="regular gray mt-16 mb-8">
              {desc}
          </p>
          <div className="flex col">
              {options.map(item => <ServicesOptions key={item.id} props={item}/>)}
          </div>
      </div>
  )
}
export default ServicesCard