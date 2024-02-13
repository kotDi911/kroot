const NumbersCard = ({black, gray, desc}) => {
    return (
        <div className="flex col numbers-content">
            <div className="flex">
                <h2 className="h2">
                    {black.toUpperCase()}
                    <span className="gray">{gray}</span>
                </h2>
            </div>
            <div className="fs-14 gray">{desc.toUpperCase()}</div>
        </div>
    )
}
export default NumbersCard