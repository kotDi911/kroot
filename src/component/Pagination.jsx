import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";

const Pagination = ({currentPage, handleSetPage, images, path}) => {
    const dots = () => {
        let ul = [];
        let li;
        for (let i = 0; i <= images - 1; i++) {
            li = <div className="carousel__dot-cont" onClick={() => handleSetPage(i)} key={i}>
                <div className={`${currentPage === i ? "dot-active" : ""} carousel__dot`}></div>
            </div>

            ul = [...ul, li]
        }
        return ul
    }

    const getGalleryImages = () => {
        let urls = []
        let url = {}
        for (let i = 0; i < images; i++) {
            const before = path + "/images/gallery/before" + (i + 1) + ".jpg";
            const beforePoster = path + "/images/gallery/before_poster" + (i + 1) + ".jpg"
            const altBefore = "Before image" + (i + 1)
            const after = path + "/images/gallery/after" + (i + 1) + ".jpg"
            const afterPoster = path + "/images/gallery/after_poster" + (i + 1) + ".jpg"
            const altAfter ="After image" + (i + 1)
            url = {before, beforePoster, altBefore, after, afterPoster, altAfter}
            urls = [...urls, url]
        }
        return urls
    }

    return (
        <div className="carousel relative">
            <div className="carousel__list relative">
                <div className="carousel__item relative">
                    {getGalleryImages().map((item, i) => i === currentPage &&
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
                    )}
                </div>
            </div>
            <div className="carousel__dots flex absolute w-100">
                {dots()}
            </div>
        </div>
    );
};
export default Pagination