import {useEffect, useMemo, useState} from "react";
import Pagination from "../../Pagination";

const Gallery = ({images, path}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pause, setPause] = useState(true);
    const [count, setCount] = useState(0);

    const play = () => setTimeout(() => {
        setCurrentPage((prevCurrentPage) => {
            if (prevCurrentPage >= images - 1) {
                return 0;
            } else {
                return prevCurrentPage + 1;
            }
        });
    }, 0);

    useEffect(() => {
        const timeout = setInterval(() => {
            setCount((prevCount) => prevCount +1);
        }, 2000);

        return () => clearInterval(timeout)
    }, []);

    useEffect(() => {
        pause && play()
        return () => clearTimeout(play)
    }, [count]);

    const previousPage = () => {
        if (currentPage >= 1) {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(images - 1);
        }
    };

    const nextPage = () => {
        if (currentPage >= images - 1) {
            setCurrentPage(0)
        } else {
            setCurrentPage(currentPage + 1);
        }
    };
    const handleSetPage = (page) => {
        setCurrentPage(page)
    }

    return (
        <div className="gallery__cont mt-32">
            {images &&
                <div className="relative"
                     onClick={() => setPause(false)}
                     onMouseEnter={() => setPause(false)}
                     onMouseLeave={() => setPause(true)}
                     onTouchStart={()=> setPause(false)}
                >
                    <Pagination
                        nextPage={nextPage}
                        previousPage={previousPage}
                        handleSetPage={handleSetPage}
                        images={images}
                        currentPage={currentPage}
                        path={path}
                    />
                </div>
            }
        </div>
    )
}

export default Gallery