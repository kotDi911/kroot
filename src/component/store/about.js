import {create} from 'zustand'

export const useAbout = create(() => ({
    nominations: [
        {
            name: "MTV AWARDS WINNER BEST LATIN",
            gray: "– Billie Eilish, ROSALÍA - Lo Vas A Olvidar (2021)"
        },
        {
            name: "MTV AWARDS WINNER BEST VISUAL EFFECT",
            gray: "– Coldplay - Up&Up(2016)"
        },
        {
            name: "MTV AWARDS WINNER BEST VISUAL EFFECT",
            gray: "– Justine Bieber - Where Are U Now (2015)"
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