import {create} from 'zustand'

const blender = process.env.PUBLIC_URL + "/assets/icon/apps/blender.png"
const ae = process.env.PUBLIC_URL + "/assets/icon/apps/ae.png"
const max = process.env.PUBLIC_URL + "/assets/icon/apps/max.png"
const pf = process.env.PUBLIC_URL + "/assets/icon/apps/pf.png"
const red = process.env.PUBLIC_URL + "/assets/icon/apps/red.png"
const cinema = process.env.PUBLIC_URL + "/assets/icon/apps/cinema.png"
const unreal = process.env.PUBLIC_URL + "/assets/icon/apps/unreal.png"

export const useCareer = create((set, get) => ({
    vacancy: [],
    fetchVacancy: async () =>{
      try{
          const resVacancy = await fetch( "https://api.thekroot.com/wp-json/acf/v3/career");

          if (!resVacancy.ok) throw new Response('Field...', {status: 404})
          const data = await resVacancy.json();
          const vac = data.map(res => res.acf)
          set({
              vacancy: vac,
              us: vac.filter((item) => item.nav === "US"),
              ua: vac.filter((item) => item.nav === "UA"),
              eu: vac.filter((item) => item.nav === "EU"),
          });
      }catch (err){
          console.error('Error fetching vacancies:', err);
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