import {useMemo} from "react";
import CarouselCard from "./CarouselCard";
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "                    Accusantium alias blanditiis consequatur corporis dolores\n" +
    "                    esse eum excepturi facere, in iusto labore, laborum molestiae\n" +
    "                    nihil optio placeat porro ratione, saepe voluptate. Aperiam,\n" +
    "                    consequatur deleniti dolorum error ex excepturi expedita harum\n" +
    "                    illum in iste laudantium maxime modi mollitia odio possimus ratione\n" +
    "                    reiciendis similique sunt tempora vitae voluptas voluptatem voluptates!\n" +
    "                    Assumenda autem corporis delectus dicta doloremque doloribus est, excepturi\n" +
    "                    mollitia nostrum quibusdam quidem, ratione reprehenderit similique velit voluptate?"
const CarouselPagination = ({currentPage, handleSetPage, images, path}) => {
    // const dots = () => {
    //     return Array.from({length: images}).map((_, i) => (
    //         <div className="carousel__dot-cont" onClick={() => handleSetPage(i)} key={i}>
    //             <div className={`${currentPage === i ? "dot-active" : ""} carousel__dot`}/>
    //         </div>
    //     ));
    // };

    return (
        <div className="carousel relative">
            <div className="carousel__list relative">
                <div className="carousel__item relative">
                   <CarouselCard props={{photoName: "JK", text: text, name: "Joseph Kahn", imgAuth: "path"}}/>
                </div>
            </div>
            <div className="carousel__dots flex absolute w-100">
                {/*{dots()}*/}
            </div>
        </div>
    );
};
export default CarouselPagination