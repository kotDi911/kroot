import {create} from 'zustand'
import coldplay from "../../assets/g_kroot/links/Coldplay.png";
import justin from "../../assets/g_kroot/links/Justin_Bieber.png";
import post from "../../assets/g_kroot/links/Post_Malone.png";
import billie from "../../assets/g_kroot/links/Billie_Eilish.png";
import khalid from "../../assets/g_kroot/links/Khalid.png";
import french from "../../assets/g_kroot/links/French_Montana.png";
import russ from "../../assets/g_kroot/links/RUSS.png";
import travis from "../../assets/g_kroot/links/Travis_Scott.png";
import tomash from "../../assets/Tomash_Kuzmytskyi.png"
import julia from "../../assets/Julia_Lusenko.png"
import dmytro from "../../assets/Dimas_Nekrasov.png"
import oksana from "../../assets/Oksana_Gryanka.png"
import sergiy from "../../assets/Sergii_Kravchenko.png"

export const useGeneration = create(() => ({
    links: [
        {
            id: 1,
            name: "Coldplay",
            img: coldplay,
            url: ""
        },
        {
            id: 2,
            name: "Justin Bieber",
            img: justin,
            url: ""
        },
        {
            id: 3,
            name: "Post Malone",
            img: post,
            url: ""
        },
        {
            id: 4,
            name: "Billie Eilish",
            img: billie,
            url: ""
        },
        {
            id: 5,
            name: "Khalid",
            img: khalid,
            url: ""
        },
        {
            id: 6,
            name: "French Montana",
            img: french,
            url: ""
        },
        {
            id: 7,
            name: "RUSS",
            img: russ,
            url: ""
        },
        {
            id: 8,
            name: "Travis Scott",
            img: travis,
            url: ""
        },
    ],
    supervisors: [
        {
            id: 1,
            img: tomash,
            name: "Tomash Kuzmytskyi",
            title: "Producer / Mentor"
        },
        {
            id: 2,
            img: julia,
            name: "Julia Lyba",
            title: "Coordinator / Producer"
        },
        {
            id: 3,
            img: dmytro,
            name: "Dmytro Nekrasov",
            title: "VFX Coordinator"
        },
        {
            id: 4,
            img: oksana,
            name: "Oksana Gryanka",
            title: "3D Animation Supervisor"
        },
        {
            id: 5,
            img: sergiy,
            name: "Sergii Kravchenko",
            title: "Senior Compositor"
        },
    ]
}))