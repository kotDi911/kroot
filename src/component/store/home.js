import {create} from 'zustand'
import comer from "../../assets/showreel/comer.jpg";
import music from "../../assets/showreel/music.jpg";
import beauty from "../../assets/showreel/beauty.jpg";
import about from "../../assets/ico/about.svg";

const URL = "https://github.com/kotDi911/kroot/blob/main/public/images/showreel"
const open = "?raw=true"

export const useHomeCard = create(() => ({
    data: [
        {
            id: 1,
            url: "https://www.youtube.com/",
            size: 4,
            title: null,
            ico: null,
            img: comer,
            imgHover: `${URL}/comer${open}`,
            text: null,
            btnText: "comercial vfx showreel",
            social: null
        },
        {
            id: 2,
            url: "https://www.youtube.com/",
            size: 4,
            title: null,
            ico: null,
            img: music,
            imgHover: `${URL}/music${open}`,
            text: null,
            btnText: "music video vfx showreel",
            social: null
        },
        {
            id: 3,
            url: "services",
            size: 3,
            title: "Services We offer",
            ico: null,
            img: null,
            text: null,
            btnText: "Our services",
            social: null
        },
        {
            id: 4,
            url: "projects",
            size: 3,
            title: "Our projects",
            ico: null,
            img: null,
            text: null,
            btnText: "all projects",
            social: null
        },
        {
            id: 5,
            url: "about",
            size: 2,
            title: null,
            ico: about,
            img: null,
            text: "We are dreamers and creative team who love any arts and animaiton.",
            btnText: "About us",
            social: null
        },
        {
            id: 6,
            url: "https://www.youtube.com/",
            size: 4,
            title: null,
            ico: null,
            img: beauty,
            imgHover: `${URL}/beauty${open}`,
            text: null,
            btnText: "beauty vfx showreel",
            social: null
        },
        {
            id: 7,
            url: "contacts",
            size: 4,
            title: "Contacts",
            ico: null,
            img: null,
            text: null,
            btnText: null,
            social: true,
        },
    ]
}));