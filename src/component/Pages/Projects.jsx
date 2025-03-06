import {useCards} from "../store/projects";
import {useEffect, useMemo, useState} from "react";
import ProjectsCard from "../cards/ProjectsCard";
import FilterBtn from "../cards/Projects/FilterBtn";
import {Loader} from "../Loader";
import ToggleFilterBtn from "../cards/Projects/ToggleFilterBtn";
import {Helmet} from "react-helmet-async";
import {useUrl} from "../store/Urls";

let postsPerPage = 9;
let arrayForHoldingPosts = [];
let filteredProjects = [];
if (window.innerWidth <= 991) postsPerPage = 8;
if (window.innerWidth <= 660) postsPerPage = 9;

const Projects = () => {
    const {URL, URL_PRIORITY} =
        useUrl((store) => ({
            URL: store.API_PROJECTS, URL_PRIORITY: store.API_PRIORITY_PROJECTS
        }));
    const filters = useCards((store) => store.filters);
    const sortFunction = useCards((store) => store.sortFunction);
    const setProjectsData = useCards((store) => store.setProjectsData);
    const [filter, setFilter] = useState("all");
    const [postsToShow, setPostsToShow] = useState([]);
    const [projects, setProjects] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [scrollPage, setScrollPage] = useState(1)
    const [next, setNext] = useState(postsPerPage);
    const [isLoading, setIsLoading] = useState(false);
    const [isShow] = useState(window.innerWidth > 767);
    const [error, setError] = useState(false)

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
                <ProjectsCard key={i} props={item}/>
            )
        )
    }, [postsToShow])

    const fetchData = async () => {
        await fetch(URL + currentPage)
            .then(res => {
                return res.json();
            })
            .then(res => {
                const dataProjects = res.map(data => data.acf)
                setProjects([...projects, ...dataProjects])
                setIsLoading(false)
                setCurrentPage(currentPage + 1)
                setScrollPage(scrollPage + 1)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err)
            })
    }

    useEffect(() => {

        const loopWithSlice = (start, end) => {
            const slicedPosts = filteredProjects.slice(start, end);
            arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
            setPostsToShow(arrayForHoldingPosts);
            setProjectsData(arrayForHoldingPosts);
            localStorage.setItem("projects", JSON.stringify(arrayForHoldingPosts))
        };

        const handleFilter = (filter) => {
            arrayForHoldingPosts = [];
            filteredProjects = projects.filter(project => project.filter === filter || filter === "all");
            loopWithSlice(0, window.innerHeight > 1200 ? 9 + next : next)
        }
        handleFilter(filter)
    }, [filter, projects.length, next])

    useEffect(() => {
        setScrollPage(1)
        setNext(postsPerPage)
        // setError(false)
    }, [filter])

    useEffect(() => {
        const handleScroll = async (e) => {
            const documentHeight = e.target.documentElement.scrollHeight;
            const documentScrollTop = e.target.documentElement.scrollTop;

            if (documentHeight - (documentScrollTop + window.innerHeight) <= 1 && projects.length >= 9) {
                if (scrollPage === currentPage && !error) {
                    setIsLoading(true)
                    await fetchData()
                }
                setNext(next + postsPerPage)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [projects.length, next, error]);

    useEffect(() => {
        const fetchPriorityList = async () => {
            try {
                let arr = [];
                const resPriority = await fetch(URL_PRIORITY);
                if (!resPriority.ok) throw new Response('Field...', {status: 404})
                const res = await fetch(URL + currentPage);
                const data = await resPriority.json();
                const data1 = await res.json();
                if (data === null || data.length === 0) throw new Response('Field...', {status: 404})
                const dataProjects = data.map(res => res.acf)
                const data1Projects = data1.map(res => res.acf)
                const sortProjects = dataProjects.sort(sortFunction)
                arr = [...sortProjects, ...data1Projects]
                setProjects(arr);
                setCurrentPage(currentPage + 1)
                setScrollPage(scrollPage + 1)
            } catch (error) {
                console.error(error)
            }
        }
        if (projects.length <= 0) {
            setIsLoading(true);
            fetchPriorityList()
                .then(() => {
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }

    }, []);

    useEffect(() => {
        const fetchFilter = async () => {
            await fetchData()
        }

        if (postsToShow.length < 9 && !error && filter !== "all") {
            fetchFilter()
                .then(() => {
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
    }, [filter, postsToShow])


    return (
        <article className="article projects">
            <Helmet>
                <title>Our projects - The kroot</title>
                <meta content="Our projects" property="og:title"/>
                <meta content="Our projects" property="twitter:title"/>
                <meta name="description" content="Project list The Kroot company"/>
                <meta
                    name="description"
                    content="Explore the diverse range of projects by The Kroot, a company specializing in Unreal Engine, Animation, VFX, and more. Discover our latest work in TV shows, music videos, and commercials."
                />
                <meta
                    name="keywords"
                    content="Unreal Engine, VFX, Animation, Projects, The Kroot, TV shows, Commercials, Music videos"
                />
                <meta property="og:description" content="Explore the diverse range of projects by The Kroot, including work for TV shows, music videos, and commercials." />
                <meta property="og:image" content="https://www.thekroot.com/logo512.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.thekroot.com/projects/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
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
                <div className="projects__grid mt-32">
                    {card}
                </div>
                {isLoading ? <Loader/> : <></>}
            </section>
        </article>
    )
}
export default Projects