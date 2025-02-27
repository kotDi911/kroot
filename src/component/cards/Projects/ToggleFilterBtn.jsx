import {useState} from "react";
import FilterBtn from "./FilterBtn";
import {useCards} from "../../store/projects";

const filterArrow = process.env.PUBLIC_URL + "/assets/icon/filterArrow.svg";

const ToggleFilterBtn = ({filter, setFilter}) => {
    const filters = useCards((store) => store.filters)
    const [isToggle, setIsToggle] = useState(false)
    const handleToggle = () => {
        setIsToggle(!isToggle)
    }

    return (
        <div className="relative">
            <div className="filter__btn filter__btn-toggle filter__btn-active gray" onClick={handleToggle}>
                <span className="filter__bg btn-bg"></span>
                <div className="filter__text">{filter}</div>
                <img src={filterArrow} alt="filter arrow" className={`${isToggle ? "rotate" : ""} filter__img`}/>
            </div>
            {
                isToggle &&
                <div className="filter__flex col absolute">
                    {filters.map((item, i) =>
                        <FilterBtn
                            key={i}
                            item={item.name}
                            filter={filter}
                            setFilter={setFilter}
                            setIsToggle={setIsToggle}
                        />
                    )}
                </div>
            }
        </div>
    )
}
export default ToggleFilterBtn