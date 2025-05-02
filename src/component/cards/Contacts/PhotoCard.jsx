const PhotoCard = ({props}) => {
    return (
        props.map((item, i) =>
            <div key={i} className="contacts__photo">
                <img className="img contacts__photo-img" src={item.img} alt="profile"/>
            </div>
        )
    )
}
export default PhotoCard