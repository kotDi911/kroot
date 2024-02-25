import videoPreview from "../../../assets/video/g-kroot.mp4";

const PreviewSection = () => {
    return (
        <section className="container-80">
            <h1 className="h1 black">
                Generation
                <span className="gray">Kroot</span>
            </h1>
            <video className="mt-32 mb-32" width="100%" muted autoPlay loop>
                <source src={videoPreview}/>
            </video>
            <h1 className="h1 black">
                Experience from the<br/>best Supervisors
            </h1>
        </section>
    )
}
export default PreviewSection