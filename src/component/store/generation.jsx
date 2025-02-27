import {create} from 'zustand'
const coldplay = "/assets/g_kroot/links/Coldplay.png";
const justin = "/assets/g_kroot/links/Justin_Bieber.png";
const post = "/assets/g_kroot/links/Post_Malone.png";
const billie = "/assets/g_kroot/links/Billie_Eilish.png";
const khalid = "/assets/g_kroot/links/Khalid.png";
const french = "/assets/g_kroot/links/French_Montana.png";
const russ = "/assets/g_kroot/links/RUSS.png";
const travis = "/assets/g_kroot/links/Travis_Scott.png";
const tomash = "/assets/images/team/Tomash_Kuzmytskyi.png"
const julia = "/assets/images/team/Julia_Lusenko.png"
const dmytro = "/assets/images/team/Dimas_Nekrasov.png"
const oksana = "/assets/images/team/Oksana_Gryanka.png"
const sergiy = "/assets/images/team/Sergii_Kravchenko.png"

const URL = "https://forms.gle/";
export const useGeneration = create(() => ({
    krootText: [
        {
            text: "Genration Kroot is an online vfx school.\n" +
                "We provide our experience from Music Video and Commercial Industry.\n" +
                "We have program for Courses, Workshops and also Masterclasses to help\n" +
                "understand vision in this VFX industry. Our lessons are designed to target\n" +
                "the most importiang areas what we VFX supervisers go through on a daily basis.\n" +
                "Our supervisers will check your skill level to offer you the best classes for you.\n" +
                "\"Generation Kroot\" team will support you as feedback or notes during the education"
        },
        {
            text: "Tomash Kuzmytskyi is a Visual Effects society member and MTV VMA winning The Best\n" +
                "                Visual Effects for the videos: Justin Bieber- Where are you know ( 2015 )Coldplay\n" +
                "                Up&Up ( 2016 )His modern creative brings a streamlined approach to any projects what\n" +
                "                he works.Tomash has working in Music Videos, Commercial industry for 15 years."
        },
        {
            text: " Tomash Kuzmytskyi is a VFX Producer, Creative Director, Animator, VFX supervisor and\n" +
                "                wildlife artist.Recent credits:Music Videos - Colplay, Justin Bieber, Post Malone,\n" +
                "                Travis ScottBillie Eilish, Rosali , Khalid, French Montana, Russ and moreTV ShowAmerican Gods,\n" +
                "                Disney Promo TV Show: Descendants 3,American Aid, The Little Prince(ss)"
        }
    ],
    masterclassText: [
        {
            text: " We have created a master class on the Coldplay Up&Up project in different\n" +
                "                languages( English, Ukranian, Rus )Our analysis of the project so subtly\n" +
                "                shows the detailsYou will understand the basics of thinking and visual\n" +
                "                perception on the part of the director and learn how to look.This master\n" +
                "                class is a hybrid model. You can watch the master class when you have time.\n" +
                "                And we are conducting an online lesson to answer your questions about this\n" +
                "                project.For a small training, we suggest you do your homework for which we will\n" +
                "                give you feedback. This is a valuable consolidation and enlightenment of the\n" +
                "                master class.Pricing and dates you will find on registration page.Click ro REGISTRATION !Le'ts go!"
        }
    ],
    linksCards: [
        {
            id: 1,
            name: "Coldplay",
            img: coldplay,
            url: ""
        },
        {
            id: 2,
            name: "Justin Bieber",
            img: justin,
            url: ""
        },
        {
            id: 3,
            name: "Post Malone",
            img: post,
            url: ""
        },
        {
            id: 4,
            name: "Billie Eilish",
            img: billie,
            url: ""
        },
        {
            id: 5,
            name: "Khalid",
            img: khalid,
            url: ""
        },
        {
            id: 6,
            name: "French Montana",
            img: french,
            url: ""
        },
        {
            id: 7,
            name: "RUSS",
            img: russ,
            url: ""
        },
        {
            id: 8,
            name: "Travis Scott",
            img: travis,
            url: ""
        },
    ],
    supervisorsCards: [
        {
            id: 1,
            img: tomash,
            name: "Tomash Kuzmytskyi",
            title: "Producer / Mentor"
        },
        {
            id: 2,
            img: julia,
            name: "Julia Lyba",
            title: "Coordinator / Producer"
        },
        {
            id: 3,
            img: dmytro,
            name: "Dmytro Nekrasov",
            title: "VFX Coordinator"
        },
        {
            id: 4,
            img: oksana,
            name: "Oksana Gryanka",
            title: "3D Animation Supervisor"
        },
        {
            id: 5,
            img: sergiy,
            name: "Sergii Kravchenko",
            title: "Senior Compositor"
        },
    ],
    masterclassCards: [
        {
            symbol: "?",
            title: "What expect from masterclass",
            options: [
                {name: "Unique photos"},
                {name: "References"},
                {name: "Ideas from A to C"},
                {name: "Masterpiece of technique"},
                {name: "Fast compositing method"},
                {name: "Tips and Tricks"},
            ]
        },
        {
            symbol: "!",
            title: "What you will hawe after masterclass",
            options: [
                {name: "Inspiration for new goals"},
                {name: "Confidence creative vision."},
                {name: "Improving compositing skills."},
                {name: "Knowledge to create your own VFX showreel"},
            ]
        }
    ],
    workshopCards: [
        {
            title: "After Effects For VFX",
            options: [
                {
                    name: "Composting \"Beginner Level\"",
                    url: `${URL}BfX3crrUn83YHEa8A`,
                },
                {
                    name: "Compositing \"UP level\"",
                    url: `${URL}BfX3crrUn83YHEa8A`,
                },
                {
                    name: "Compositing \"Up'n'Up Level\"",
                    url: `${URL}BfX3crrUn83YHEa8A`,
                },
            ]
        },
        {
            title: "Blender For VFX",
            options: [
                {
                    name: "Animation \"Beginner to Intermediate Level\"",
                    url: `${URL}`,
                },
                {
                    name: "Animation \"Body Mechanics\"",
                    url: `${URL}`,
                },
                {
                    name: "Production For VFX \"Advanced Level\"",
                    url: `${URL}`,
                },
            ]
        },
        {
            title: "Cinema 4D For & VFX",
            options: [
                {
                    name: "Beginner Level",
                    url: `${URL}`,
                },
                {
                    name: "Best in Cinema 4D \"Intermediate Level\"",
                    url: `${URL}`,
                },
                {
                    name: "Production For VFX \"Advanced Level\"",
                    url: `${URL}`,
                },
            ]
        },
        {
            title: "Motion Tracking",
            options: [
                {
                    name: "Motion Tracking \"Beginer Level\"",
                    url: `${URL}`,
                },
                {
                    name: "More Tracking not Enough\n" +
                        " \"Intermediate to Advanced Level\"",
                    url: `${URL}`,
                },
            ]
        },
        {
            title: "Beauty Retouch",
            options: [
                {
                    name: "Fundamentals for \"Beginner Level\"",
                    url: `${URL}`,
                },
                {
                    name: "Intermediate \"Level\"",
                    url: `${URL}`,
                },
                {
                    name: "Advanced Level",
                    url: `${URL}`,
                },
            ]
        },
        {
            title: "Concept ART",
            options: [
                {
                    name: "Beginers",
                    url: `${URL}`,
                },
                {
                    name: "Concept art for VFX Production",
                    url: `${URL}`,
                },
            ]
        },
    ],
}))