import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import {useMemo} from "react";

const Pagination = ({currentPage, handleSetPage, images, path}) => {

    const dots = () => {
        return Array.from({ length: images }).map((_, i) => (
            <div className="carousel__dot-cont" onClick={() => handleSetPage(i)} key={i}>
                <div className={`${currentPage === i ? "dot-active" : ""} carousel__dot`} />
            </div>
        ));
    };
    const galleryImages = useMemo(() => {
        return Array.from({ length: images }).map((_, i) => {
            const before = `${path}/images/gallery/before${i + 1}.jpg`;
            const beforePoster = `${path}/images/gallery/before_poster${i + 1}.jpg`;
            const altBefore = `Before image ${i + 1}`;
            const after = `${path}/images/gallery/after${i + 1}.jpg`;
            const afterPoster = `${path}/images/gallery/after_poster${i + 1}.jpg`;
            const altAfter = `After image ${i + 1}`;
            return { before, beforePoster, altBefore, after, afterPoster, altAfter };
        });
    }, [images, path]);

    return (
        <div className="carousel relative">
            <div className="carousel__list relative">
                <div className="carousel__item relative">
                    {galleryImages.map((item, i) => i === currentPage
                        &&
                        // ?
                        <ReactCompareSlider
                            key={i}
                            className="gallery__card slide"
                            boundsPadding={0}
                            itemOne={<ReactCompareSliderImage loading="lazy" alt="before" src={item.before}/>}
                            itemTwo={<ReactCompareSliderImage loading="lazy" alt="after" src={item.after}/>}
                            keyboardIncrement="5%"
                            position={50}
                            changePositionOnHover={true}
                            handle={<></>}
                            style={{width: "100%"}}
                        />
                    )
                    // : null
                    }
                </div>
            </div>
            <div className="carousel__dots flex absolute w-100">
                {dots()}
            </div>
        </div>
    );
};
export default Pagination