import {create} from "zustand"

export const useUrl = create(() => ({
    mainUrl: "https://qdz.guk.temporary.site/",
    projectsUrl: "https://qdz.guk.temporary.site/projects/",
    showReelUrl: "https://qdz.guk.temporary.site/showreel/",
}))