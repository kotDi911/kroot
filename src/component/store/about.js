import {create} from 'zustand'

export const useAbout = create(() => ({
    nominations: [
        {
            title: "MTV AWARDS WINNER BEST LATIN",
            name: "– Billie Eilish, ROSALÍA - Lo Vas A Olvidar (2021)"
        },
        {
            title: "MTV AWARDS WINNER BEST VISUAL EFFECT",
            name: "– Coldplay - Up&Up(2016)"
        },
        {
            title: "MTV AWARDS WINNER BEST VISUAL EFFECT",
            name: "– Justine Bieber - Where Are U Now (2015)"
        }
    ],
    numbers: [
        {
            black: "15",
            gray: "+",
            desc: "YEARS OF EXPERIENCE"
        },
        {
            black: "70",
            gray: "+",
            desc: "projects done"
        },
        {
            black: "35",
            gray: null,
            desc: "artist"
        },
        {
            black: "3",
            gray: null,
            desc: "won nomination"
        }
    ],
    options: [
        {name: "3D"},
        {name: "Compositing"},
        {name: "Clean up"},
        {name: "Rotoscoping"},
        {name: "Matchmoving"},
    ],
    cards: [
        {
            url: "projects",
            title: "See our",
            gray: "last work",
            btnText: "all projects",
        },
        {
            url: "generation_kroot",
            title: "Generation",
            gray: "Kroot",
            btnText: "generation kroot",
        },
    ]
}));