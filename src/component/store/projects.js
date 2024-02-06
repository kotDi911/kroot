import {create} from 'zustand'

const URL = "https://github.com/kotDi911/kroot/blob/main/public/images/projects"
const open = "?raw=true"

export const useCards = create(() => ({
    projects: [
        {
            id: 1,
            name: "Muni Long - Made For Me",
            img: `${URL}/1.gif${open}`,
            details: [
                {
                    img: "",
                    title: "",
                    description: "",
                    options: []
                }
            ],
            galleryTitle: "Gallery",
            galleryDescription: "Gallery",
            galleryImg: [
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
            ]
        },
        {
            id: 2,
            name: "6IX9INE - COMEBACK 2022",
            img: `${URL}/2.gif${open}`,
            details: [
                {
                    img: "",
                    title: "",
                    description: "",
                    options: []
                }
            ],
            galleryTitle: "Gallery",
            galleryDescription: "Gallery",
            galleryImg: [
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
            ]
        },
        {
            id: 3,
            name: "TATRAS 2022",
            img: `${URL}/3.gif${open}`,
            details: [
                {
                    img: "",
                    title: "",
                    description: "",
                    options: []
                }
            ],
            galleryTitle: "Gallery",
            galleryDescription: "Gallery",
            galleryImg: [
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
            ]
        },
        {
            id: 4,
            name: "JANET JACKSON",
            img: `${URL}/4.gif${open}`,
            details: [
                {
                    img: "",
                    title: "",
                    description: "",
                    options: []
                }
            ],
            galleryTitle: "Gallery",
            galleryDescription: "Gallery",
            galleryImg: [
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
            ]
        },
        {
            id: 5,
            name: "OLIVER TREE - FREAKS & GEEKS",
            img: `${URL}/5.gif${open}`,
            details: [
                {
                    img: "",
                    title: "",
                    description: "",
                    options: []
                }
            ],
            galleryTitle: "Gallery",
            galleryDescription: "Gallery",
            galleryImg: [
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
            ]
        },
        {
            id: 6,
            name: "SOFIA CARSON - LOUD",
            img: `${URL}/6.gif${open}`,
            details: [
                {
                    img: "",
                    title: "",
                    description: "",
                    options: []
                }
            ],
            galleryTitle: "Gallery",
            galleryDescription: "Gallery",
            galleryImg: [
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
                {img: ""},
            ]
        },
    ],

}));