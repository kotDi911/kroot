import {useLocation} from "react-router-dom";
import {ReactCompareSlider, ReactCompareSliderImage} from 'react-compare-slider';
import before0 from "../../assets/befor.png";
import after0 from "../../assets/after.png";
import before1 from "../../assets/before1.jpg";
import after1 from "../../assets/after1.jpg";
import before2 from "../../assets/before2.jpg";
import after2 from "../../assets/after2.jpg";
import {useEffect, useState} from "react";

const images =[
    {before: before0, after: after0},
    {before: before1, after: after1},
    {before: before2, after: after2},
]
const Popup = ({props}) => {
    const {next, prev, before, after, active} = props
    const [position, setPosition] = useState(50);

    return (
        <div className="popup flex space-b" style={{alignItems: "center"}}>
          <span className="close"
                onClick={active}
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    padding: "15px 18px",
                    background: "radial-gradient(transparent 35%, gray)",
                    borderRadius: "50%",
                    cursor: "pointer"
                }}>X</span>
            <div className="prev" onClick={()=> {prev(); setPosition(50) }}>
                <div className="__pn-handle-arrow"></div>
            </div>
            <div>
                <ReactCompareSlider
                    className="gallery__card"
                    boundsPadding={0}
                    itemOne={<ReactCompareSliderImage alt="before" src={before}/>}
                    itemTwo={<ReactCompareSliderImage alt="after" src={after}/>}
                    keyboardIncrement="5%"
                    position={50}
                    style={{
                        // width: '100%',
                        height: "80vh"
                    }}
                />
            </div>
            <div className="next" onClick={()=> {next(); setPosition(50) }} style={{transform: "rotate(180deg)"}}>
                <div className="__pn-handle-arrow"></div>
            </div>
        </div>
    )
}
const InfoBlock = ({img, description, options}) => {
    return (
        <>
            <img className="img mt-16" src={img} alt="img"/>
            <p className="regular gray mt-16">{description}</p>
        </>
    )
}
const Details = () => {
    const {state} = useLocation()
    const {details, galleryTitle, galleryDescription, galleryImg} = state;
    const [isActive, setIsActive] = useState(false);
    const [before, setBefore] = useState(before0);
    const [after, setAfter] = useState(after0);

    const active = () => {
        setIsActive(false)
    }
    const prev = () => {
        switch (before) {
            case before0:
                setBefore(before2)
                break;
            case before1:
                setBefore(before0)
                break;
            case before2:
                setBefore(before1)
                break;
            default:
                break;

        }
        switch (after) {
            case after0:
                setAfter(after2)
                break;
            case after1:
                setAfter(after0)
                break;
            case after2:
                setAfter(after1)
                break;
            default:
                break;
        }
    }
    const next = () => {
        switch (before) {
            case before0:
                setBefore(before1)
                break;
            case before1:
                setBefore(before2)
                break;
            case before2:
                setBefore(before0)
                break;
            default:
                break;

        }
        switch (after) {
            case after0:
                setAfter(after1)
                break;
            case after1:
                setAfter(after2)
                break;
            case after2:
                setAfter(after0)
                break;
            default:
                break;
        }
    }
    return (
        <section className="section details">
            <div className="details__cont">
                {details.map((item, i) => <InfoBlock key={i} {...item}/>)}
                <div className="flex mt-16">
                    <p className="regular black"><span className="gray" style={{fontSize: "14px"}}>Director:</span> Oliver Tree</p>
                </div>
                <div className="flex mt-16">
                    <p className="regular black"><span className="gray" style={{fontSize: "14px"}}>Production:</span> Dreambear</p>
                </div>
                <div className="gallery__cont mt-16" style={{background: "white", padding: "2.5rem"}}>
                    <h2 className="h2" style={{marginBottom: "2.5rem", textAlign: "center"}}>Gallery</h2>
                    <div className="gallery__grid">
                        {
                            images.map((item, i)=> (
                                <div key={i}>
                                    <ReactCompareSlider
                                        className="gallery__card"
                                        boundsPadding={0}
                                        itemOne={<ReactCompareSliderImage alt="before" src={item.before}/>}
                                        itemTwo={<ReactCompareSliderImage alt="after" src={item.after}/>}
                                        keyboardIncrement="5%"
                                        position={50}
                                        style={{
                                            width: '100%'
                                        }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <h2 className="h2" style={{margin: "2.5rem 0", textAlign: "center"}}>Gallery</h2>
                    <div className="gallery__grid mt-16">
                        {
                            images.map((item, i)=> (
                                <div key={i}>
                                    <img className="gallery__card img" src={item.before} alt="" onClick={() => setIsActive(true)}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {isActive && <Popup props={{next, prev, before, after, active}}/>}
        </section>
    )
}
export default Details