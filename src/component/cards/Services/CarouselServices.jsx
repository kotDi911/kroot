import {useEffect, useState} from "react";
import CarouselPagination from "./CarouselPagination";

const CarouselServices = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pause, setPause] = useState(true);

    // useEffect(() => {
    //     if (pause){
    //         const timeout = setTimeout(() => {
    //             setCurrentPage((prevCurrentPage) =>
    //                 prevCurrentPage >= images - 1 ? 0 : prevCurrentPage + 1
    //             );
    //         }, 2000); // Задержка 2 секунды
    //         return () => clearTimeout(timeout); // Очистка таймера при каждом рендере
    //     }
    // }, [pause, currentPage, images]);


    // const previousPage = () => {
    //     setCurrentPage((prev) => (prev > 0 ? prev - 1 : images - 1));
    // };
    //
    // const nextPage = () => {
    //     setCurrentPage((prev) => (prev >= images - 1 ? 0 : prev + 1));
    // };
    //
    // const handleSetPage = (page) => {
    //     setCurrentPage(page)
    // }

    return (
        <div className="gallery__cont mt-32">
                <div className="relative"
                     onClick={() => setPause(false)}
                     onMouseEnter={() => setPause(false)}
                     onMouseLeave={() => setPause(true)}
                     onTouchStart={()=> setPause(false)}
                >
                    <CarouselPagination
                        // nextPage={nextPage}
                        // previousPage={previousPage}
                        // handleSetPage={handleSetPage}
                        // images={images}
                        // currentPage={currentPage}
                        // path={path}
                    />
                </div>
        </div>
    )
}

export default CarouselServices