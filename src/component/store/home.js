import {create} from 'zustand'
import comer from "../../assets/showreel/comer.gif";
import music from "../../assets/showreel/music.gif";
import beauty from "../../assets/showreel/beauty.gif";
import insta from "../../assets/ico/insta.svg";
import fb from "../../assets/ico/fb.svg";
import linkedin from "../../assets/ico/linkedin.svg";

export const useHomeCard = create(() => ({
    data: [
        {
            id: 1,
            url: "https://www.youtube.com/",
            size: 4,
            title: null,
            ico: null,
            img: comer,
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
            ico: null,
            img: null,
            text: null,
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
            social:[
                {
                    id: 1,
                    name: "instagramm",
                    img: insta,
                    url: "https://www.instagram.com/"
                },
                {
                    id: 2,
                    name: "facebook",
                    img: fb,
                    url: "https://www.facebook.com/"
                },
                {
                    id: 3,
                    name: "linkedin",
                    img: linkedin,
                    url: "https://www.linkedin.com/"
                },
            ]
        },
    ]
}));