import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import {useMemo} from "react";

const CarouselCard = ({props}) => {
    const {photoName, text, name, imgAuth} = props;
    console.log(props)

    return (
        <div className="flex carousel__card">
            <div className="carousel__card-image">
                <img src="" alt="" className="img"/>
            </div>
            <div className="carousel__card-text flex col">
                <p className="regular black">{text}</p>
                <p className="name regular black">{name}</p>
                <div className="carousel__card-image">
                    <img src="" alt="" className="img"/>
                </div>
            </div>
        </div>
    );
};
export default CarouselCard