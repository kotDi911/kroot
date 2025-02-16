import {create} from "zustand"

export const useCards = create((set, get) => ({
        urlPriority: "https://qdz.guk.temporary.site/wp-api/wp-json/acf/v3/priority_project",
        url: "https://qdz.guk.temporary.site/wp-api/wp-json/acf/v3/project?per_page=5&page=",
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
        setProjectsData: (data) => {
            set((state) => ({projects: [...state.projects, ...data]}));
        },
        sortFunction: (a, b) => {
            if (a.id <= 18) {
                return a.id - b.id
            } else {
                return b.id - a.id
            }
        },
        addPage: () => {
            set((state) => ({currentPage: state.currentPage + 1}));
        },
        // fetchPriorityList: async () => {
        //     try {
        //         const {projects} = get();
        //         const {urlPriority} = get();
        //         const resPriority = await fetch(urlPriority);
        //
        //         if (!resPriority.ok) throw new Response('Field...', {status: 404})
        //         const data = await resPriority.json();
        //         if (data === null || data.length === 0) throw new Response('Field...', {status: 404})
        //         const dataProjects = data.map(res => res.acf)
        //         set({projects: [...projects, ...dataProjects], error: null})
        //     } catch (error) {
        //         set({error: error.message})
        //     }
        // },
        // fetchList: async () => {
        //     try {
        //         const {projects} = get();
        //         const {currentPage} = get();
        //         const {url} = get();
        //         const res = await fetch(url + currentPage);
        //
        //         if (!res.ok) throw new Error('No data list')
        //         const data = await res.json();
        //         if (data === null || data.length === 0) throw new Error('No data list')
        //         const dataProjects = data.map(res => res.acf)
        //         // const sortProjects = dataProjects.sort(sortFunction)
        //         set({projects: [...projects, ...dataProjects], error: null})
        //     } catch (error) {
        //         set({error: error.message})
        //     }
        // },
        error: null,
    }))
;