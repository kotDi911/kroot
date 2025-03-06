import { create } from 'zustand';

const about = process.env.PUBLIC_URL + "/assets/icon/about.svg";
const URL = process.env.PUBLIC_URL + "/assets/video/showreel/";
const mobile = "_mobile.mp4";
const desktop = "_desktop.mp4";
const poster = "_poster.jpg";

const generateMediaURL = (name) => ({
    videoM: `${URL}${name}${mobile}`,
    videoD: `${URL}${name}${desktop}`,
    poster: `${URL}${name}${poster}`,
});

export const useHomeCard = create(() => ({
    data: [
        {
            id: 1,
            name: "commercial",
            url: "https://www.youtube.com/watch?v=m9zhPKXm1lc&ab_channel=TheKROOT",
            ...generateMediaURL("commercial"),
            btnText: "commercial showreel",
        },
        {
            id: 2,
            name: "music",
            url: "https://www.youtube.com/watch?v=5gbNqMXN_DU&t=4s&ab_channel=TheKROOT",
            ...generateMediaURL("music"),
            btnText: "music video showreel",
        },
        {
            id: 3,
            name: "services",
            url: "services",
            title: "Services We",
            gray: "Offer",
            ico: null,
            text: null,
            btnText: "Our services",
            social: null,
        },
        {
            id: 4,
            name: "projects",
            url: "projects",
            title: "Our",
            gray: "Projects",
            ico: null,
            text: null,
            btnText: "portfolio",
            social: null,
        },
        {
            id: 5,
            name: "about",
            url: "about",
            title: null,
            gray: null,
            ico: about,
            text: "We are dreamers and creative team who love any arts and animation.",
            btnText: "About us",
            social: null,
        },
        {
            id: 6,
            name: "beauty",
            url: "https://www.youtube.com/watch?v=GXskclwDBCA&ab_channel=TheKROOT",
            ...generateMediaURL("beauty"),
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
