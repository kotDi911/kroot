const CardOptions = ({props}) => {
    return (
        <div className="options flex col">
            {props.map((item, i) =>
                <div key={i} className="flex base mt-16">
                    <div className="round"></div>
                    <p className={`regular w-100 ${item.gray ? "black" : "gray"}`}>
                        {item.name + " "}
                        {item.gray && <span className="gray">{item.gray}</span>}
                    </p>
                </div>
            )}
        </div>
    )
}
export default CardOptions