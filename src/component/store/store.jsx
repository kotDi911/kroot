import {create} from 'zustand';

export const useProjects = create((set, get) => ({
    projects: [],
    selectedProjects: [],
    currentPage: 1,
    url: '',
    addPage: () => {
        set((state) => ({ currentPage: state.currentPage + 1 }));
    },
    fetchList: async () => {
        try {
            const { currentPage } = get();
            const { projects } = get();
            const res = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);

            if (!res.ok) throw new Error('Field...')
            const data = await res.json();
            if (data === null || data.length === 0) throw new Error('no data')

            set({ projects: [...projects, ...data], error: null })
        } catch (error) {
            set({ error: error.message })
        }
    },
    error: null
}));