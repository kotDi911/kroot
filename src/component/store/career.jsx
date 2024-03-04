import {create} from 'zustand'
import blender from "../../assets/ico/apps/blender.png"
import ae from "../../assets/ico/apps/ae.png"
import max from "../../assets/ico/apps/max.png"
import pf from "../../assets/ico/apps/pf.png"
import red from "../../assets/ico/apps/red.png"
import cinema from "../../assets/ico/apps/cinema.png"
import unreal from "../../assets/ico/apps/unreal.png"

export const useCareer = create(() => ({
    us:[
        {
            title: "2D animator",
            desc: "Do you know how to work in traditional animation methods using all 12 principles.Great!!! Send please your portfolio immediately.",
        }
    ],
    ua:[
        {
            title: "After Effects",
            desc: "Composiitng Begginers APPLY NOW Composiitng Intermediat Advanced UP&UP",
        },
        {
            title: "Matchmove artist",
            desc: "We hiring people who know match move process. We want to see your best projects and match move reel.If you don’t have experience. Let us know about it and we will worry about you.",
        },
        {
            title: "Compositing artist",
            desc: "Please show us your demoreel (important: before and after). Compositing artist is a challenge. You can try!",
        },
        {
            title: "3D animator",
            desc: "Animation is a greatest job in the world! We want to work with great artists who on same page with us.Can’t wait to see your demo reel.",
        },
        {
            title: "2D animator",
            desc: "Do you know how to work in traditional animation methods using all 12 principles.Great!!! Send please your portfolio immediately.",
        }
    ],
    eu:[
        {
            title: "Matchmove artist",
            desc: "We hiring people who know match move process. We want to see your best projects and match move reel.If you don’t have experience. Let us know about it and we will worry about you.",
        },
        {
            title: "Compositing artist",
            desc: "Please show us your demoreel (important: before and after). Compositing artist is a challenge. You can try!",
        },
    ],
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