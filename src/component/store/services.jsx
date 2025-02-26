import {create} from 'zustand'
import cgi from "../../assets/ico/services/cgi.svg";
import beauty from "../../assets/ico/services/beauty.svg";
import vfx from "../../assets/ico/services/vfx.svg";
import unreal from "../../assets/ico/services/unreal.svg";

export const useServiceCard = create(() => ({
    services: [
        {
            ico: cgi,
            title:"CGI",
            desc:"You can compare it to magic! Georges Mélíés also wantedto create illusions. \n" +
                "He was able to succeed! You’re Rad!",
            options: [
                {
                    id:1,
                    text:"3D modeling",
                    url:"",
                },
                {
                    id:5,
                    text:"Animation",
                    url:"",
                },
                {
                    id:6,
                    text:"Particular simulation",
                    url:"",
                },
                {
                    id:7,
                    text:"Rendering",
                    url:"",
                },
            ]
        },
        {
            ico: beauty,
            title:"Beauty",
            desc:"This is the first thing a project starts with. \n" +
                "Let's go. You’re Rad!",
            options: [
                {
                    id:1,
                    text:"Clean up",
                    url: "",
                },
                {
                    id:2,
                    text:"Retouch face",
                    url:"",
                },
                {
                    id:3,
                    text:"Change shape of the body",
                    url:"",
                },
                {
                    id:4,
                    text:"From old to young",
                    url:"",
                },
            ]
        },
        {
            ico: vfx,
            title:"VFX",
            desc:"Bouncing ball, Anticipation, Squash and Scratch .\n" +
                "Do we need to list all of the 12 principles for you ?  You’re Rad!",
            options: [
                {
                    id:1,
                    text:"Rotoscoping",
                    url:"https://www.youtube.com/watch?v=6e5FLdlb_-k&ab_channel=TheKROOT",
                },
                {
                    id:2,
                    text:"Matchmove",
                    url:"https://www.youtube.com/watch?v=PjRnq9_Emhs&ab_channel=TheKROOT",
                },
                {
                    id:3,
                    text:"Clean up",
                    url:"https://www.youtube.com/watch?v=cedH5onBiWA&ab_channel=TheKROOT",
                },
                {
                    id:4,
                    text:"Compositing",
                    url:"",
                },
            ]
        },
        {
            ico: unreal,
            title:"Unreal Engine",
            desc:"Everything in Hollywood that is covered in gloom is a secret!\n" +
                "It also consists of a beauty-retouch. You’re Rad!",
            options: [
                {
                    id:1,
                    text:"Enviroment",
                    url:"",
                },
                {
                    id:2,
                    text:"Virtual production",
                    url:"",
                },
                {
                    id:3,
                    text:"Animation",
                    url:"",
                },
                {
                    id:4,
                    text:"Cinematics",
                    url:"",
                },
            ]
        }
    ]
}));