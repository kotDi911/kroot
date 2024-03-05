import {useCards} from "../store/projects";
import {lazy, useEffect, useState, useRef} from "react";
import filterArrow from "../../assets/ico/filterArrow.svg"

import {LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component"
import ProjectsCard from "../cards/ProjectsCard";

// import poster from "../../assets/poster.png"
// import video from "../../assets/video/projects/480p 1000b.mp4"
// import Button from "../Button";
// import {Link} from "react-router-dom";


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


const MyPage = () => {
    const ref = useRef();

    const handleScroll = () => {
        const scroll = Math.abs(ref.current.getBoundingClientRect().top - ref.current.offsetTop);
        console.log({x: 0, y: scroll});
        return {x: 0, y: scroll}
    };
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <button >Scroll</button>
            <div style={{ maxHeight: "300px", overflow: "scroll" }}>
                <div style={{ height: 1000, overflow: "hidden" }} ref={ref}>
                    <h4>Hello</h4>
                </div>
            </div>
        </>
    );
};

const Card = lazy(() => import("../cards/ProjectsCard"))

const Projects = () => {
    const projects = useCards((store) => store.projects)
    const [filter, setFilter] = useState("all");
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(9);
    const [isActive, setIsActive] = useState(false);
    const [isShow] = useState(window.innerWidth > 767);
    const [scrollP, setScrollP] = useState({})
    const ref = useRef()

    // const [ref, setRef] = useState({})

    const loopWithSlice = (start, end) => {
        const slicedPosts = filteredProjects.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
    };
    const handleScroll = () => {
        const scroll = Math.abs(ref.current.getBoundingClientRect().top - ref.current.offsetTop);
        // console.log(ref.current.getBoundingClientRect().top - ref.current.offsetTop);
        return {x: 0, y: scroll}
    };
    useEffect(() => {
        // handleScroll();
        // setScrollP(handleScroll)
        // console.log(ref)
        // console.log(handleScroll())
        setScrollP(handleScroll)
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
            <section className="container-80 relative p_top">
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
                <div className="projects__grid mt-32" ref={ref}>
                    <MyPage/>
                    {/*<ProjectsCard  setRef={()=>setRef} scrollPosition={scrollP}/>*/}
                        {
                            filteredProjects.map((item) =>
                                    // <div style={{height: "300px"}}>hjhfffg</div>
                                    <ProjectsCard key={item.id} props={item} scrollPosition={scrollP}/>
                                // <Suspense fallback={<div>Loading...</div>}>
                                //     <Card key={item.id} props={item}/>
                                // </Suspense>
                            )
                        }
                </div>
                {/*{isActive &&*/}
                {/*    <div className="filter__btn gray mt-16 more-btn" onClick={handleShowMorePosts}>*/}
                {/*        <span className="filter__bg btn-bg"></span>*/}
                {/*        MORE*/}
                {/*    </div>*/}
                {/*}*/}
            </section>
        </article>
    )
}
export default Projects