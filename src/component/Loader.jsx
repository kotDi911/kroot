export const Loader = () => {
    return (
        <div className="loader__cont flex mt-32">
            <div className="spiner__cont relative">
                <div className="spiner__wrap w0">
                    <div className="spiner"></div>
                </div>
                <div className="spiner__wrap w1 absolute">
                    <div className="spiner"></div>
                </div>
                <div className="spiner__wrap w2 absolute">
                    <div className="spiner"></div>
                </div>
            </div>
            <span className='spiner__text'>Loading...</span>
        </div>
    )
}