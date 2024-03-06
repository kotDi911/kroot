import { useEffect, useRef, useState } from 'react';
import { useProjects } from '../store/store';
import Card from '../cards/Card'
import { Loader } from '../Loader';
import { Errors } from '../Errors';

const CardList = () => {
    const { projects, error, fetchList, selectedProjects, addPage } = useProjects((state) => ({
        projects: state.projects,
        error: state.error,
        fetchList: state.fetchList,
        selectedProjects: state.selectedProjects,
        addPage: state.addPage,
        currentPage: state.currentPage,
    }));
    const [isLoading, setIsLoading] = useState(false);
    const [range, setRange] = useState([0, 15]);
    const myScrollRef = useRef(null);

    useEffect(() => {
        if (projects.length < 15) {
            setIsLoading(true);
            fetchList()
                .then(() => {
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
    }, [fetchList, projects.length]);

    useEffect(() => {
        const handleScroll = (e) => {
            const el = myScrollRef.current;

            range[0] < 0 && setRange((prevRange) => [0, prevRange[1] - prevRange[0]]);
            projects.length < range[1] && setRange([projects.length - 15, projects.length]);

            if (el.scrollTop + el.clientHeight +1 >= el.scrollHeight) {

                if (!error && projects.length < range[1] + 5) {
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
                    projects.length - 15 > range[0] && setRange((prevRange) => [prevRange[0] + 5, prevRange[1] + 5]);
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
    }, [range, projects, addPage, fetchList]);

    const filter = (recipe) => {
        let selected = false;
        selectedProjects.find((item) => item.id === recipe.id ? selected = true : selected = false)
        return selected;
    }

    return (
        <div className='cards__grid' ref={myScrollRef}>
            {isLoading && <Loader />}
            {
                error != null && error !== 'no data' ?
                    (< Errors error={error} />)
                    :
                    projects.slice(range[0], range[1]).map((recipe) => (<Card key={recipe.id} {...recipe} selected={filter(recipe)} />))
            }
        </div>
    )
}

export { CardList };