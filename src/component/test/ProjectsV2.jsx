import {useEffect, useMemo, useRef, useState} from 'react';
import { Loader } from '../Loader';
import ProjectsCard from "../cards/ProjectsCard";
import ErrorPage from "../Pages/ErrorPage";
import {useRecipe} from "./projectV2";
import FilterBtn from "../cards/Projects/FilterBtn";

const ProjectsV2 = () => {
    const { recipes, error, fetchList, selectedRecipes, addPage } = useRecipe((state) => ({
        recipes: state.recipes,
        error: state.error,
        fetchList: state.fetchList,
        selectedRecipes: state.selectedRecipes,
        addPage: state.addPage,
        currentPage: state.currentPage,
    }));
    const [isLoading, setIsLoading] = useState(false);
    const [range, setRange] = useState([0, 15]);
    const myScrollRef = useRef(null);

    useEffect(() => {
        if (recipes.length < 15) {
            setIsLoading(true);
            fetchList()
                .then(() => {
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
    }, [fetchList, recipes.length]);

    useEffect(() => {
        const handleScroll = (e) => {
            const el = myScrollRef.current;

            range[0] < 0 && setRange((prevRange) => [0, prevRange[1] - prevRange[0]]);
            recipes.length < range[1] && setRange([recipes.length - 15, recipes.length]);

            if (el.scrollTop + el.clientHeight +1 >= el.scrollHeight) {

                if (!error && recipes.length < range[1] + 5) {
                    addPage();
                    setIsLoading(true);
                    fetchList()
                        .then(() => {
                            setIsLoading(false);
                            setRange((prevRange) => [prevRange[0] + 5, prevRange[1] + 5]);
                        })
                        .catch(() => {
                            setIsLoading(false);
                        });
                } else {
                    recipes.length - 15 > range[0] && setRange((prevRange) => [prevRange[0] + 5, prevRange[1] + 5]);
                }
            } else if (el.scrollTop < 10) {
                if (range[0] >= 5) {
                    el.scrollTop = 10
                    setRange((prevRange) => [prevRange[0] - 5, prevRange[1] - 5]);
                } else {
                    setRange((prevRange) => [0, prevRange[1] - prevRange[0]]);
                }
            }
        };
        const element = myScrollRef.current;
        element.addEventListener("scroll", handleScroll);

        return () => {
            element.removeEventListener("scroll", handleScroll);
        }
    }, [range, recipes, addPage, fetchList]);

    const filter = (recipe) => {
        let selected = false;
        selectedRecipes.find((item) => item.id === recipe.id ? selected = true : selected = false)
        return selected;
    }
    const card = useMemo(() => {
        return (
            recipes.slice(range[0], range[1]).map((item,i) =>
                // console.log(recipes)
                <ProjectsCard key={i} props={item} error={error}/>
            )
        )
    }, [recipes])
    console.log(recipes)
    // const filterButtonsDesktop = useMemo(() => {
    //     return (
    //         filters.map((item, i) =>
    //             <FilterBtn
    //                 key={i}
    //                 item={item.name}
    //                 filter={filter}
    //                 setFilter={setFilter}
    //             />
    //         )
    //     )
    // }, [filter])

    return (
    <article className="article projects">
        <section className="container-80 relative p_top">
            <h1 className="h1">Projects</h1>
            {/*{filterButtonsDesktop}*/}
        </section>
        <section className="container-80">
            <div className="projects__grid mt-32" ref={myScrollRef} style={{overflowY: "scroll", height: "400px"}}>
                {isLoading ? <Loader/> : <></>}
                {error != null && error !== 'no data' ?
                < ErrorPage error={error} />
                :
                card}
            </div>
        </section>
    </article>
    )
}

export { ProjectsV2 };