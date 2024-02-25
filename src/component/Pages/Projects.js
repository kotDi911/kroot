import {useCards} from "../store/projects";
import {lazy, Suspense, useEffect, useState} from "react";
import filterArrow from "../../assets/ico/filterArrow.svg"

const ProjectsCard = lazy(() => import("../cards/ProjectsCard"))

const filters = [
    {name: "all"},
    {name: "commercial"},
    {name: "music video"},
    {name: "beauty"},
    {name: "animation"},
    {name: "artwork"},
    {name: "tv show"},
]
const postsPerPage = 9;
let arrayForHoldingPosts = [];
let filteredProjects = [];

const FilterBtn = ({item, setFilter, filter, setIsToggle}) => {
    let name = item;
    if (!item) name = "ALL";
    const handleToggle = () => {
        setIsToggle && setIsToggle(false)
        setFilter(name)
    }
    return (
        <div className={`filter__btn gray ${name === filter && !setIsToggle ? "filter__btn-active" : ""}`}
             onClick={handleToggle}
        >
            <span className="filter__bg btn-bg"></span>
            <div className="filter__text">{name}</div>
        </div>
    )
}
const ToggleFilterBtn = ({filter, setFilter}) => {
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


const Projects = () => {
    const projects = useCards((store) => store.projects)
    const [filter, setFilter] = useState("all");
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(9);
    const [isActive, setIsActive] = useState(false);
    const [isShow] = useState(window.innerWidth > 767);

    const loopWithSlice = (start, end) => {
        const slicedPosts = filteredProjects.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
    };

    useEffect(() => {
        setNext(9);
        arrayForHoldingPosts = [];
        filteredProjects = projects.filter(project => project.filter === filter || filter === "all");
        loopWithSlice(0, postsPerPage);
        next + 1 <= filteredProjects.length ? setIsActive(true) : setIsActive(false)
    }, [filter])

    useEffect(() => {
        next + 1 <= filteredProjects.length ? setIsActive(true) : setIsActive(false)
    }, [next])

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
        next + postsPerPage <= filteredProjects.length ? setIsActive(true) : setIsActive(false)
    };

    return (
        <article className="article projects">
            <section className="container-80 relative">
                <h1 className="h1">Projects</h1>
                {
                    isShow ?
                        <div className="filter__grid mt-16">
                            {filters.map((item, i) =>
                                <FilterBtn
                                    key={i}
                                    item={item.name}
                                    filter={filter}
                                    setFilter={setFilter}
                                />
                            )}
                        </div>
                        :
                        <ToggleFilterBtn filter={filter} setFilter={setFilter}/>
                }
            </section>
            <section className="container-80">
                <div className="projects__grid mt-32">
                    <Suspense fallback={<div>Loading...</div>}>
                        {
                            postsToShow.map((item) => <ProjectsCard key={item.id} props={item}/>)
                        }
                    </Suspense>
                </div>
                {isActive &&
                    <div className="filter__btn gray mt-16" onClick={handleShowMorePosts}>
                        <span className="filter__bg btn-bg"></span>
                        MORE
                    </div>
                }
            </section>
        </article>
    )
}
export default Projects