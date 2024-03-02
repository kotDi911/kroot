import videoPreview from "../../../assets/video/g-kroot.mp4";

const video = "https://qdz.guk.temporary.site/wp-json/wp/v2/posts"
const PreviewSection = () => {
    fetch(video)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                result.map(title => console.log(title.title))
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
               console.log(error)
            }
        )

    return (
        <section className="container-80">
            <h1 className="h1 black">
                Generation
                <span className="gray">Kroot</span>
            </h1>
            <video className="mt-32 mb-32" width="100%" muted autoPlay loop>
                <source src={video}/>
            </video>
            <h1 className="h1 black">
                Experience from the<br/>best Supervisors
            </h1>
        </section>
    )
}
export default PreviewSection