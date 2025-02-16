import {Outlet, useLoaderData} from "react-router";
import CareerNav from "../cards/Career/CareerNav";
import {useCareer} from "../store/career";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import LongButton from "../LongButton";
import AppsCard from "../cards/Career/AppsCard";
import {Helmet} from "react-helmet";

const Career = () => {

    return (
        <article className="article career">
            <Helmet>
                <title>Career </title>
                <meta name="description" content="Carer in The Kroot company" />
            </Helmet>
            <section className="container-64">
                <h1 className="h1 black">Career</h1>
                <CareerNav/>
                <Outlet/>
                <LongButton text="Get in touch" url="get_in_touch"/>
                <AppsCard/>
            </section>
        </article>
    )
}
export default Career