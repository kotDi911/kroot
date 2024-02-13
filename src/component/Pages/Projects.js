import {useCards} from "../store/projects";
import ProjectsCard from "../cards/ProjectsCard";
import {useEffect, useState} from "react";

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

const Projects = () => {
    const projects = useCards((store) => store.projects)
    const [filter, setFilter] = useState("all");
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(9);
    const [isActive, setIsActive] = useState(false);

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
                <div className="filter__grid mt-16">
                    {filters.map((item, i) => (
                        <div key={i} className={`filter__btn gray ${item.name === filter ? "filter__btn-active" : ""}`}>
                            <span className="filter__bg btn-bg"></span>
                            <div className="filter__text" onClick={() => setFilter(item.name)}>{item.name}</div>
                        </div>
                    ))}
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