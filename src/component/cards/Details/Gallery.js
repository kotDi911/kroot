import {useEffect, useState} from "react";
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";

const Pagination = ({currentPage, previousPage, handleSetPage, nextPage, images}) => {

    const prevImg = () => {
        return currentPage === 0 ? images.length - 1 : currentPage - 1;
    }
    const nextImg = () => {
        return currentPage === images.length - 1 ? 0 : currentPage + 1;
    }
    const dots = () => {
        let ul = [];
        let li;
        for (let i = 0; i <= images.length - 1; i++) {
            li = <div key={i}
                      className={`${currentPage === i ? "dot-active" : ""} carousel__dot`}
                      onClick={() => handleSetPage(i)}
            ></div>
            ul = [...ul, li]
        }
        return ul
    }


    return (
        <div className="carousel relative">
            <div className="carousel__list relative">
                {/*<div onClick={previousPage} className="carousel__item" data-pos="-1">*/}
                {/*    {images.map((item, i) => i === prevImg() &&*/}
                {/*        <img key={i} className="img" src={item.before} alt="prev arrow"/>)}*/}
                {/*</div>*/}
                <div className="carousel__item relative" data-pos="0">
                    {images.map((item, i) => i === currentPage &&
                        <ReactCompareSlider
                            key={i}
                            className="gallery__card slide"
                            boundsPadding={0}
                            itemOne={<ReactCompareSliderImage alt="before" src={item.before}/>}
                            itemTwo={<ReactCompareSliderImage alt="after" src={item.after}/>}
                            keyboardIncrement="5%"
                            position={50}
                            changePositionOnHover={true}
                            handle={<></>}
                            style={{
                                width: '100%'
                            }}
                        />
                    )}
                </div>
                {/*<div onClick={nextPage} className="carousel__item" data-pos="1">*/}
                {/*    {images.map((item, i) => i === nextImg() &&*/}
                {/*        <img key={i} className="img" src={item.before} alt=""/>)}*/}
                {/*</div>*/}
            </div>
            <div className="carousel__dots flex absolute w-100">
                {dots()}
            </div>
        </div>
    );
};


const Gallery = ({images}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pause, setPause] = useState(true);
    const [count, setCount] = useState(0);
    const play = () => setTimeout(() => {
        setCurrentPage((prevCurrentPage) => {
            if (prevCurrentPage >= images.length - 1) {
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
            setCurrentPage(images.length - 1);
        }
    };

    const nextPage = () => {
        if (currentPage >= images.length - 1) {
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
                >
                    <Pagination
                        nextPage={nextPage}
                        previousPage={previousPage}
                        handleSetPage={handleSetPage}
                        images={images}
                        currentPage={currentPage}
                    />
                </div>
            }
        </div>
    )
}

export default Gallery