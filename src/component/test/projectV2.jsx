import {create} from 'zustand';

export const useRecipe = create((set, get) => ({
    recipes: [],
    selectedRecipes: [],
    currentPage: 1,
    url: '',
    addPage: () => {
        set((state) => ({ currentPage: state.currentPage + 1 }));
    },
    addSelectedRecipes: (recipe) => {
        const { selectedRecipes } = get();
        set({ selectedRecipes: [...selectedRecipes, recipe] });
    },
    delSelectedRecipes: (id) => {
        const { selectedRecipes } = get();
        set({ selectedRecipes: selectedRecipes.filter((item) => item.id !== id) });
    },
    fetchList: async () => {
        try {
            const { currentPage } = get();
            const { recipes } = get();
            const res = await fetch(`https://qdz.guk.temporary.site/wp-json/acf/v3/project/?per_page=12?page=${currentPage}`);

            if (!res.ok) throw new Error('Field...')
            const data = await res.json();
            console.log(currentPage)
            const dataProjects = data.map(res => res.acf)
            if (dataProjects === null || dataProjects.length === 0) throw new Error('no data')

            set({ recipes: [...recipes, ...dataProjects], error: null })
        } catch (error) {
            set({ error: error.message })
        }
    },
    error: null
}));