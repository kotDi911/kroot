import {create} from 'zustand'
const cgi = "/assets/icon/services/cgi_icon.png";
const beauty = "/assets/icon/services/beauty_icon.png";
const vfx = "/assets/icon/services/vfx_icon.png";
const unreal = "/assets/icon/services/ue_icon.png";

export const useServiceCard = create(() => ({
    services: [
        {
            ico: cgi,
            title:"CGI",
            desc:"Hollywood-grade CGI at your fingertips.",
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
            desc:"Flawless beauty retouching for any project.",
            options: [
                // {
                //     id:1,
                //     text:"Clean up",
                //     url: "",
                // },
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
            desc:"Seamless VFX integration – from rotoscoping to compositing.",
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
            desc:"Unreal Engine-powered environments and cinematics.",
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