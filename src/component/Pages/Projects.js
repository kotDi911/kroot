import {useCards} from "../store/projects";
import ProjectsCard from "../cards/ProjectsCard";
import {useState} from "react";

const filters = [
    {name: "all"},
    {name: "commercial"},
    {name: "music video"},
    {name: "beauty"},
    {name: "animation"},
    {name: "artwork"},
    {name: "tv show"},
]
const Projects = () => {
    const projects = useCards((store) => store.projects)
    const [filter, setFilter] = useState("all");

    return (
        <section className="section projects">
            <div className="container-80">
                <div className="filter__grid">
                    {filters.map((item, i) => (
                        <div key={i} className="filter__btn" style={{borderRadius: "25px !important"}}>
                            <span className="filter__bg btn-bg"></span>
                            <div className="filter__text" style={{width:"100%"}} onClick={() => setFilter(item.name)}>{item.name}</div>
                        </div>
                    ))}
                </div>
                <div className="projects__grid">
                    {
                        projects.filter(project => project.filter === filter || filter === "all")
                            .map(item => <ProjectsCard key={item.id} props={item}/>)
                    }
                </div>
            </div>
        </section>
    )
}
export default Projects