import {useCards} from "../store/projects";

const Projects = () => {
    const projects = useCards((store) => store.projects)
    return (
        <section className="section projects">
            {projects.map(item => <img key={item.id} src={item.img} alt=""/>)}
        </section>
    )
}
export default Projects