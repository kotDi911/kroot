import {create} from 'zustand'
import videoM from "../../assets/video/projects/320x240.mp4";
import videoD from "../../assets/video/projects/480x240.mp4";
import poster from "../../assets/poster.png"
import about from "../../assets/ico/about.svg";

export const useHomeCard = create(() => ({
    data: [
        {
            id: 1,
            name: "comercial",
            url: "https://www.youtube.com/",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            btnText: "comercial showreel",
        },
        {
            id: 2,
            name: "music",
            url: "https://www.youtube.com/",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            btnText: "music video showreel",
        },
        {
            id: 3,
            name: "service",
            url: "services",
            title: "Services We",
            gray: "offer",
            ico: null,
            text: null,
            btnText: "Our services",
            social: null
        },
        {
            id: 4,
            name: "projects",
            url: "projects",
            title: "Our",
            gray: "projects",
            ico: null,
            text: null,
            btnText: "all projects",
            social: null
        },
        {
            id: 5,
            name: "about",
            url: "about",
            title: null,
            gray: null,
            ico: about,
            text: "We are dreamers and creative team who love any arts and animaiton.",
            btnText: "About us",
            social: null
        },
        {
            id: 6,
            name: "beauty",
            url: "https://www.youtube.com/",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            btnText: "beauty vfx",
        },
        {
            id: 7,
            name: "contacts",
            url: "contacts",
            title: "Contacts",
            gray: null,
            ico: null,
            text: null,
            btnText: null,
            social: true,
        },
    ]
}));