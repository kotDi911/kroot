import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
const Pagination = ({currentPage, handleSetPage, images}) => {
    const dots = () => {
        let ul = [];
        let li;
        for (let i = 0; i <= images.length - 1; i++) {
            li = <div className="carousel__dot-cont"
                      onClick={() => handleSetPage(i)}>
                <div key={i}
                     className={`${currentPage === i ? "dot-active" : ""} carousel__dot`}
                ></div>
            </div>

            ul = [...ul, li]
        }
        return ul
    }

    return (
        <div className="carousel relative">
            <div className="carousel__list relative">
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
                                width: "100%",
                            }}
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