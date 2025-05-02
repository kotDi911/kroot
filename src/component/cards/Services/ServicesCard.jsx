import ServicesOptions from "./ServicesOptions";

const ServicesCard = ({props}) => {
    const {ico, title, desc, options} = props;
    return (
        <div className="services__card flex col mt-16">
            <div className="services-row flex col">
                <h3 className="h3">{title}</h3>
            </div>
            <p className="regular black mt-16 mb-8">
                {desc}
            </p>
            <div className="services__grid">
                {options.map(item => <ServicesOptions key={item.id} props={item}/>)}
            </div>
        </div>
    )
}
export default ServicesCard