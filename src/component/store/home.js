import {create} from 'zustand'
import comer from "../../assets/showreel/comer.jpg";
import music from "../../assets/showreel/music.jpg";
import beauty from "../../assets/showreel/beauty.jpg";
import beautyM from "../../assets/showreel/beauty.mp4";
import about from "../../assets/ico/about.svg";

const URL = "https://github.com/kotDi911/kroot/blob/main/public/images/reels";
const open = "?raw=true";

export const useHomeCard = create(() => ({
    data: [
        {
            id: 1,
            name: "comercial",
            url: "https://www.youtube.com/",
            title: null,
            ico: null,
            img: comer,
            imgHover: `${URL}/comer.gif${open}`,
            text: null,
            btnText: "comercial showreel",
            social: null
        },
        {
            id: 2,
            name: "music",
            url: "https://www.youtube.com/",
            title: null,
            ico: null,
            img: music,
            imgHover: `${URL}/music.gif${open}`,
            text: null,
            btnText: "music video showreel",
            social: null
        },
        {
            id: 3,
            name: "service",
            url: "services",
            title: "Services We",
            gray: "offer",
            ico: null,
            img: null,
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
            img: null,
            text: null,
            btnText: "all projects",
            social: null
        },
        {
            id: 5,
            name: "about",
            url: "about",
            title: null,
            ico: about,
            img: null,
            text: "We are dreamers and creative team who love any arts and animaiton.",
            btnText: "About us",
            social: null
        },
        {
            id: 6,
            name: "beauty",
            url: "https://www.youtube.com/",
            title: null,
            ico: null,
            img: beauty,
            // imgHover: `${URL}/beauty.gif${open}`,
            imgHover: `${URL}/beauty.gif${open}`,
            text: null,
            btnText: "beauty vfx",
            social: null
        },
        {
            id: 7,
            name: "contacts",
            url: "contacts",
            title: "Contacts",
            ico: null,
            img: null,
            text: null,
            btnText: null,
            social: true,
        },
    ]
}));