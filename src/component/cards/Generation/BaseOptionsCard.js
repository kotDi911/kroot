import CardOptions from "../CardOptions";

const BaseOptionsCard = ({props}) => {
    const {symbol, title, options} = props;
    return (
        <div className={`${!symbol && "work__card"} flex col`}>
            <h3 className="h3 black w-100">{title}</h3>
            <CardOptions props={options}/>
        </div>
    )
}
export default BaseOptionsCard