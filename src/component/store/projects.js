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
        }
    ],

}));