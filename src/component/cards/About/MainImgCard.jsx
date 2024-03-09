import mtv from "../../../assets/mtv.jpg";

const MainImgCard = () => {
    return(
        <div className="about__main-img relative">
            <div className="about__text-cont flex col white space-b">
                <h3 className="h3">MTV Award Winning</h3>
                <p className="regular text-center">
                    The Kroot is Visual Effects and Animation studios. We based in Los Angeles
                    An important aspect of our job - is to show creativity, using the latest technology and
                    radical ideas that the world hasn’t seen before. Our motto is “You are Rad!“
                </p>
                <h3 className="h3 text-end">Best Visual Effect</h3>
            </div>
            <img className="about__img img" src={mtv} style={{borderRadius: "25px"}} alt="Mtv Award wining"/>
        </div>
    )
}
export default MainImgCard