const PhotoCard = ({props}) => {
    return (
        props.map((item, i)=>
            <div key={i} className="contacts__photo" style={{gridArea: item.area}}>
                <div className="round__text-cont">
                    <div className="contacts__logo">
                        <img className="img" src={item.img} alt="profile"/>
                    </div>
                    <div className="round__text gray regular">
                        {item.text.split("").map((char, j)=>
                            <span key={j} className="round__span" style={{transform: `rotate(${j*5.8}deg)`}}>{char}</span>
                        )}
                    </div>
                </div>
            </div>
        )
    )
}
export default PhotoCard