import {useCards} from "../store/projects";
import ProjectsCard from "../cards/ProjectsCard";

const Projects = () => {
    const projects = useCards((store) => store.projects)
    return (
        <section className="section projects">
            <div className="projects__grid">
                {projects.map(item => <ProjectsCard key={item.id} props={item}/>)}
            </div>
        </section>
    )
}
export default Projects