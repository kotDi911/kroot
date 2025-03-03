import {Outlet} from "react-router";
import CareerNav from "../cards/Career/CareerNav";
import LongButton from "../LongButton";
import AppsCard from "../cards/Career/AppsCard";
import {Helmet} from "react-helmet";

const Career = () => {
    return (
        <article className="article career">
            <Helmet>
                <title>Career - The Kroot</title>
                <meta name="description" content="Career opportunities at The Kroot" />
                <meta
                    name="keywords"
                    content="VFX, Animation, Visual Effects, 3D Animation, Motion Graphics, The Kroot, Career at The Kroot"
                />
                <meta property="og:description" content="Career opportunities at The Kroot"/>
                <meta property="og:image" content="https://www.thekroot.com/logo512.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.thekroot.com/career/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="container-64">
                <h1 className="h1 black">CAREERS</h1>
                <CareerNav/>
                <Outlet/>
                {/*<LongButton text="START YOUR PROJECT" url="get_in_touch"/>*/}
                <AppsCard/>
            </section>
        </article>
    )
}
export default Career