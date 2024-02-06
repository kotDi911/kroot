import {create} from 'zustand'

const URL = "https://github.com/kotDi911/kroot/blob/main/public/images/projects"
const open = "?raw=true"

export const useCards = create(() => ({
    projects: [
        {
            id: 1,
            name: "",
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
            name: "",
            img: `${URL}2.gif${open}`,
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
            name: "",
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
            name: "",
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
            name: "",
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
            name: "",
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