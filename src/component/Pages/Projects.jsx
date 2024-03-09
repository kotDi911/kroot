import {useCards} from "../store/projects";
import {useEffect, useMemo, useRef, useState} from "react";
import ProjectsCard from "../cards/ProjectsCard";
import FilterBtn from "../cards/Projects/FilterBtn";
import {Loader} from "../Loader";
import ToggleFilterBtn from "../cards/Projects/ToggleFilterBtn";

let postsPerPage = 9;
let arrayForHoldingPosts = [];
let filteredProjects = [];
if (window.innerWidth <= 991) postsPerPage = 8;
if (window.innerWidth <= 660) postsPerPage = 9;

const Projects = () => {
    const {projects, fetchList, error, filters, setCurrentPage} = useCards((state) => ({
        projects: state.projects,
        error: state.error,
        filters: state.filters,
        fetchList: state.fetchList,
        setCurrentPage: state.setCurrentPage,
    }));

    const [filter, setFilter] = useState("all");
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(9);
    const [scroll, setScroll] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isShow] = useState(window.innerWidth > 767);
    const ref = useRef(null)

    const filterButtonsDesktop = useMemo(() => {
        return (
            filters.map((item, i) =>
                <FilterBtn
                    key={i}
                    item={item.name}
                    filter={filter}
                    setFilter={setFilter}
                />
            )
        )
    }, [filter])

    const card = useMemo(() => {
        return (
            postsToShow.map((item, i) =>
                <ProjectsCard key={i} props={item} error={error}/>
            )
        )
    }, [postsToShow])
    const handleFilter = (filter) => {
        setNext(9);
        arrayForHoldingPosts = [];
        filteredProjects = projects.filter(project => project.filter === filter || filter === "all");
        loopWithSlice(0, window.innerHeight > 1200 ? 12 : postsPerPage)
    }
    const loopWithSlice = (start, end) => {
        const slicedPosts = filteredProjects.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
    };

    useEffect(() => {
        handleFilter(filter)
        const oToBeRead = document.getElementById("root");
        setScroll(oToBeRead)
    }, [])

    useEffect(() => {
        handleFilter(filter)
    }, [filter])

    useEffect(() => {
        const handleScroll = (e) => {
            const el = ref.current
            const documentHeight = e.target.documentElement.scrollHeight;
            const documentScrollTop = e.target.documentElement.scrollTop;
            if (projects.length >= next && (documentScrollTop + window.innerHeight +1) > documentHeight) {
                setNext(next + postsPerPage)
                loopWithSlice(next, next + postsPerPage)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [next, projects, fetchList]);

    useEffect(() => {
        if (projects.length <= 0) {
            setIsLoading(true);
            fetchList()
                .then(() => {
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        } else {
            handleFilter(filter)
        }
    }, [fetchList, projects.length]);

    return (
        <article className="article projects">
            <section className="container-80 relative p_top">
                <h1 className="h1">Projects</h1>
                {
                    isShow ?
                        <div className="filter__grid mt-16">
                            {filterButtonsDesktop}
                        </div>
                        :
                        <ToggleFilterBtn filter={filter} setFilter={setFilter}/>
                }
            </section>
            <section className="container-80">
                <div className="projects__grid mt-32" ref={ref}>
                    {/*{!isLoading ? <Loader/> : <></>}*/}
                    {card}
                </div>
            </section>
        </article>
    )
}
export default Projects