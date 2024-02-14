import {useCards} from "../store/projects";
import ProjectsCard from "../cards/ProjectsCard";
import {useEffect, useState} from "react";
import button from "../Button";

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

const FilterBtn = ({item, setFilter, filter}) => {
    console.log(item, setFilter, filter)
    let name = item;
    if(!item) name = "all";
  return(
      <div className={`filter__btn gray ${name === filter ? "filter__btn-active" : ""}`}>
          <span className="filter__bg btn-bg"></span>
          <div className="filter__text" onClick={() => setFilter(name)}>{name}</div>
      </div>
  )
}

const Projects = () => {
    const projects = useCards((store) => store.projects)
    const [filter, setFilter] = useState("all");
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(9);
    const [isActive, setIsActive] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

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
        <section className="section projects">
            <div className="container-80">
                <h1 className="h1">Projects</h1>
                {/*{width <= 767 && <FilterBtn props={{item: filter, filter, setFilter}}/>}*/}
                <div className="filter__grid mt-16">
                    {filters.map((item, i) =>
                        <FilterBtn key={i} item={item.name} filter={filter}  setFilter={setFilter}/>
                    )}
                </div>
                <div className="projects__grid mt-16">
                    {
                        postsToShow.map((item) => <ProjectsCard key={item.id} props={item}/>)
                    }
                </div>
                {isActive &&
                    <div className="filter__btn gray mt-16" onClick={handleShowMorePosts}>
                        <span className="filter__bg btn-bg"></span>
                        MORE
                    </div>
                }
            </div>
        </section>
    )
}
export default Projects