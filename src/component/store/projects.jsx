import {create} from 'zustand'

import poster from "../../assets/poster.png"
const videoM = "https://qdz.guk.temporary.site/projects/muni_long/video/320x180.mp4";
const videoD = "https://qdz.guk.temporary.site/projects/muni_long/video/480x320.mp4";
const videoB = "https://qdz.guk.temporary.site/projects/muni_long/video/480x240.mp4";


const URL = "https://github.com/kotDi911/kroot/blob/main/public/images/projects"
const open = "?raw=true"

export const useCards = create(() => ({
    projects: [
        {
            id: 1,
            name: "Muni Long - Made For Me",
            videoM: videoM,
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
                    poster: `${URL}/muni_long/main1poster.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`,
                    poster: `${URL}/muni_long/main2poster.jpg${open}`,
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
                    videoD: videoB,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
            ],
        },
        {
            id: 2,
            name: "6IX9INE - COMEBACK 2022",
            videoM: videoM,
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
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
                    poster: `${URL}/muni_long/main1poster.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`,
                    poster: `${URL}/muni_long/main2poster.jpg${open}`,
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
                },

            ],
            buttons: [
                {
                    url: "https://www.youtube.com",
                    name: "comercial",
                    btnText: "Vfx breakdown",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
            ]
        },
        {
            id: 3,
            name: "TATRAS 2022",
            videoM: videoM,
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
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
                    poster: `${URL}/muni_long/main1poster.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`,
                    poster: `${URL}/muni_long/main2poster.jpg${open}`,
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
                    videoD: videoB,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
            ]
        },
        {
            id: 4,
            name: "JANET JACKSON",
            videoM: videoM,
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
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
                    poster: `${URL}/muni_long/main1poster.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`,
                    poster: `${URL}/muni_long/main2poster.jpg${open}`,
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
                    videoD: videoB,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
            ]
        },
        {
            id: 5,
            name: "OLIVER TREE - FREAKS & GEEKS",
            videoM: videoM,
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
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
                    poster: `${URL}/muni_long/main1poster.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`,
                    poster: `${URL}/muni_long/main2poster.jpg${open}`,
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
                    videoD: videoB,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
            ]
        },
        {
            id: 6,
            name: "SOFIA CARSON - LOUD",
            videoM: videoM,
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
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
                    poster: `${URL}/muni_long/main1poster.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`,
                    poster: `${URL}/muni_long/main2poster.jpg${open}`,
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
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
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
                    poster: `${URL}/muni_long/main1poster.jpg${open}`,
                },
                {
                    img: `${URL}/muni_long/main2.jpg${open}`,
                    poster: `${URL}/muni_long/main2poster.jpg${open}`,
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
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
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
            videoD: videoD,
            // videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
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
        {
            id: 19,
            name: "TATRAS 2022",
            videoM: videoM,
            videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
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
                    videoD: videoB,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
            ]
        },
        {
            id: 20,
            name: "JANET JACKSON",
            videoM: videoM,
            videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
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
            ],
            buttons: [
                {
                    url: "https://www.youtube.com",
                    name: "comercial",
                    btnText: "Vfx breakdown",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
            ]
        },
        {
            id: 21,
            name: "OLIVER TREE - FREAKS & GEEKS",
            videoM: videoM,
            videoD: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
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
            ],
            buttons: [
                {
                    url: "https://www.youtube.com",
                    name: "comercial",
                    btnText: "Vfx breakdown",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
                {
                    url: "https://www.youtube.com",
                    name: "music",
                    btnText: "official video",
                    videoM: videoM,
                    videoD: videoB,
                    poster: poster,
                },
            ]
        },
    ],
}));





