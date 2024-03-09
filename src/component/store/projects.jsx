import {create} from "zustand"

export const useCards = create((set, get) => ({
        url: "https://qdz.guk.temporary.site/wp-api/wp-json/acf/v3/project?per_page=100",
        filters: [
            {name: "all"},
            {name: "commercial"},
            {name: "music video"},
            {name: "beauty"},
            {name: "animation"},
            {name: "artwork"},
            {name: "tv show"},
        ],
        projects: [],
        currentPage: 1,
        sortFunction: (a, b) => {
            if (a.id <= 18) {
                return a.id - b.id
            } else {
                return b.id - a.id
            }
        },
        setCurrentPage: ()=>{
            const {currentPage} = get();
            set({currentPage: currentPage+1})
        },
        fetchList: async () => {
            try {
                const {sortFunction} = get();
                const {projects} = get();
                const {currentPage} = get();
                const {url} = get();
                const res = await fetch(url);

                if (!res.ok) throw new Response('Field...', {status: 404})
                const data = await res.json();
                if (data === null || data.length === 0) throw new Response('Field...', {status: 404})
                const dataProjects = data.map(res => res.acf)
                const sortProjects = dataProjects.sort(sortFunction)
                set({projects: [...projects, ...sortProjects], error: null})
            } catch (error) {
                set({error: error.message})
            }
        },
        error: null,
        cards: [
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "commercial",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "music video",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "music video",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "music video",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "beauty",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "beauty",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
            {
                filter: "tv show",
                id: "6",
                project_name: "ATHENA & SMLE - ETERNAL",
                path: "athena_smile",
                main_imgs: "2",
                description: "",
                gallery_imgs: "3",
                options: {
                    director: "",
                    production: ""
                },
                buttons_url: [
                    {vfx_brakedown_url: "",},
                    {oficial_video_url: ""},
                ]
            },
        ]
    }))
;