import {useMemo} from "react";

const FilterBtn = ({item, setFilter, filter, setIsToggle}) => {
    let name = item;
    if (!item) name = "ALL";
    const handleToggle = () => {
        setIsToggle && setIsToggle(false)
        setFilter(name)
    }
    const button = useMemo(()=>{
        return(
            <div className={`filter__btn gray ${name === filter && !setIsToggle ? "filter__btn-active" : ""}`}
                 onClick={handleToggle}
            >
                <span className="filter__bg btn-bg"></span>
                <div className="filter__text">{name}</div>
            </div>
        )
    }, [filter])
    return (
        <>
            {button}
        </>
    )
}
export default FilterBtn