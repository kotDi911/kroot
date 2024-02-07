import {create} from 'zustand'

const URL = "https://github.com/kotDi911/kroot/blob/main/public/images/projects"
const open = "preview.gif?raw=true"

export const useCards = create(() => ({
    projects: [
        {
            id: 1,
            name: "Muni Long - Made For Me",
            img: `${URL}/muni_long/${open}`,
            details: [
                {
                    img: "",
                    title: "Title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                        "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                        "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                        " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                        " vitae voluptas voluptatum! Ab, consequuntur.",
                    options: [
                        {name: "1"},
                        {name: "2"}
                    ]
                },
                {
                    img: "",
                    title: "Title",
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
            img: `${URL}/6IX9INE/${open}`,
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
            img: `${URL}/tatras/${open}`,
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
            img: `${URL}/janet_jackson/${open}`,
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
            img: `${URL}/oliver_tree/${open}`,
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
            img: `${URL}/sofia_carson/${open}`,
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