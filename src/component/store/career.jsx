import {create} from 'zustand'
import blender from "../../assets/ico/apps/blender.png"
import ae from "../../assets/ico/apps/ae.png"
import max from "../../assets/ico/apps/max.png"
import pf from "../../assets/ico/apps/pf.png"
import red from "../../assets/ico/apps/red.png"
import cinema from "../../assets/ico/apps/cinema.png"
import unreal from "../../assets/ico/apps/unreal.png"

export const useCareer = create((set, get) => ({
    vacancy: [],
    fetchVacancy: async () =>{
      try{
          const resVacancy = await fetch("https://qdz.guk.temporary.site/wp-api/wp-json/acf/v3/career");

          if (!resVacancy.ok) throw new Response('Field...', {status: 404})
          const data = await resVacancy.json();
          const vac = data.map(res => res.acf)
          set({vacancy: [vac]})
          set({us: vac.filter(item => item.nav === "US" && item)})
          set({ua: vac.filter(item => item.nav === "UA" && item)})
          set({eu: vac.filter(item => item.nav === "EU" && item)})
      }catch (err){

      }
    },
    us: [],
    ua: [],
    eu: [],
    apps:[
        {
            name: "blender",
            img: blender,
        },
        {
            name: "Maya 3D max",
            img: max,
        },
        {
            name: "Cinema 4D",
            img: cinema,
        },
        {
            name: "Redshift",
            img: red,
        },
        {
            name: "PF Track",
            img: pf,
        },
        {
            name: "After Effect",
            img: ae,
        },
        {
            name: "Unreal Engine",
            img: unreal,
        },
    ]
}));