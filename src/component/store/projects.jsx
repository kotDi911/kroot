import {create} from 'zustand'
// import videoM from "../../assets/video/projects/320x240.mp4";
// import videoD from "../../assets/video/projects/480X320.mp4";
import poster from "../../assets/poster.png"
const videoM = "https://qdz.guk.temporary.site/projects/muni_long/video/320x180.mp4";
const videoD = "https://qdz.guk.temporary.site/projects/muni_long/video/480X320.mp4";

// import videoM from "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
// import videoD from "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
// import videoD from "../../assets/video/projects/480x240.mp4";


const URL = "https://github.com/kotDi911/kroot/blob/main/public/images/projects"
// const URL2 = "https://github.com/kotDi911/kroot/blob/main/public/images/reels"
const open = "?raw=true"

export const useCards = create(() => ({
    videos: [
        {
            sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
            sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        },
        {
            sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        },
        {
            sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        },
        {
            sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        },
        {
            sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        },
        {
            sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        },
    ],
    projects: [
        {
            id: 1,
            name: "Muni Long - Made For Me",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ],
            buttons: [
                {
                    url: "https://www.youtube.com",
                    name: "comercial",
                    btnText: "Vfx breakdown",
                    videoM: videoM,
                    videoD: videoD,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoD,
                    poster: poster,
                },
            ],
        },
        {
            id: 2,
            name: "6IX9INE - COMEBACK 2022",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 3,
            name: "TATRAS 2022",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 4,
            name: "JANET JACKSON",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
            poster: poster,
            filter: "beauty",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 5,
            name: "OLIVER TREE - FREAKS & GEEKS",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
            poster: poster,
            filter: "animation",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 6,
            name: "SOFIA CARSON - LOUD",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
            poster: poster,
            filter: "artwork",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 7,
            name: "Muni Long - Made For Me",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 8,
            name: "6IX9INE - COMEBACK 2022",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 9,
            name: "TATRAS 2022",
            videoM: videoM,
            videoD: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 10,
            name: "JANET JACKSON",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "beauty",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 11,
            name: "OLIVER TREE - FREAKS & GEEKS",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "animation",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 12,
            name: "SOFIA CARSON - LOUD",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "artwork",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 13,
            name: "Muni Long - Made For Me",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 14,
            name: "6IX9INE - COMEBACK 2022",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 15,
            name: "TATRAS 2022",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "commercial",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 16,
            name: "JANET JACKSON",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "beauty",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 17,
            name: "OLIVER TREE - FREAKS & GEEKS",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "animation",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
        {
            id: 18,
            name: "SOFIA CARSON - LOUD",
            videoM: videoM,
            videoD: videoD,
            poster: poster,
            filter: "music video",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus explicabo " +
                "fugiat obcaecati praesentium quidem temporibus. Blanditiis commodi consequatur consequuntur " +
                "dignissimos doloremque ducimus eum expedita, facere facilis, inventore ipsam ipsum iste maiores" +
                " modi nemo neque nihil nulla optio quis, recusandae reprehenderit repudiandae sequi totam veritatis" +
                " vitae voluptas voluptatum! Ab, consequuntur.",
            descriptionImg: [
                {
                    img: `${URL}/muni_long/main1.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`
                }
            ],
            options: [
                {
                    title: "Director:",
                    desc: "Oliver Tree"
                },
                {
                    title: "Production:",
                    desc: "Dreambear"
                }
            ],
            galleryImg: [
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/4.jpg${open}`,
                    after: `${URL}/muni_long/gallery/5.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/6.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/1.jpg${open}`,
                    after: `${URL}/muni_long/gallery/3.jpg${open}`,
                },
                {
                    before: `${URL}/muni_long/gallery/5.jpg${open}`,
                    after: `${URL}/muni_long/gallery/2.jpg${open}`,
                }
            ]
        },
    ],
    // cards: [
    //     {
    //         name: "html",
    //         video: html,
    //     },
    //     {
    //         name: "480x320 cbr6",
    //         video: s480x320,
    //     },
    //     {
    //         name: "640x480 4x3 cbr4",
    //         video: a640x480,
    //     },
    //     {
    //         name: "640x480 4x3 cbr6",
    //         video: b640x480,
    //     },
    //     {
    //         name: "640x480 4x3 cbr10",
    //         video: c640x480,
    //     },
    //     {
    //         name: "720x540 4x3 cbr6",
    //         video: a720x540,
    //     },
    //     {
    //         name: "960x540 cbr6",
    //         video: a960x540,
    //     },
    //     {
    //         name: "960x540 cbr10",
    //         video: b960x540,
    //     },
    //     {
    //         name: "1280x720 cbr4",
    //         video: a1280x720,
    //     },
    //     {
    //         name: "1280x720 cbr6",
    //         video: b1280x720,
    //     },
    //     {
    //         name: "1280x720 cbr10",
    //         video: c1280x720,
    //     },
    //     {
    //         name: "1920x1080 cbr4",
    //         video: a1920x1080,
    //     },
    //     {
    //         name: "1920x1080 cbr6",
    //         video: b1920x1080,
    //     },
    //     {
    //         name: "1920x1080 cbr10",
    //         video: c1920x1080,
    //     },
    // ]
}));





