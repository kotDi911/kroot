import {create} from 'zustand'
import comer from "../../assets/showreel/comer.jpg";
import music from "../../assets/showreel/music.jpg";

const URL = "https://github.com/kotDi911/kroot/blob/main/public/images/projects"
const URL2 = "https://github.com/kotDi911/kroot/blob/main/public/images/reels"
const open = "?raw=true"
const placeholder = `placeholder.jpg${open}`
const preview = `preview.gif${open}`

export const useCards = create(() => ({
    projects: [
        {
            id: 1,
            name: "Muni Long - Made For Me",
            img: `${URL}/muni_long/${preview}`,
            placeholder: `${URL}/muni_long/${placeholder}`,
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
            id: 2,
            name: "6IX9INE - COMEBACK 2022",
            img: `${URL}/6IX9INE/${preview}`,
            placeholder: `${URL}/6IX9INE/${placeholder}`,
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
            img: `${URL}/tatras/${preview}`,
            placeholder: `${URL}/tatras/${placeholder}`,
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
            img: `${URL}/janet_jackson/${preview}`,
            placeholder: `${URL}/janet_jackson/${placeholder}`,
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
            img: `${URL}/oliver_tree/${preview}`,
            placeholder: `${URL}/oliver_tree/${placeholder}`,
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
            img: `${URL}/sofia_carson/${preview}`,
            placeholder: `${URL}/sofia_carson/${placeholder}`,
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
            img: `${URL}/muni_long/${preview}`,
            placeholder: `${URL}/muni_long/${placeholder}`,
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
            img: `${URL}/6IX9INE/${preview}`,
            placeholder: `${URL}/6IX9INE/${placeholder}`,
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
            img: `${URL}/tatras/${preview}`,
            placeholder: `${URL}/tatras/${placeholder}`,
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
            img: `${URL}/janet_jackson/${preview}`,
            placeholder: `${URL}/janet_jackson/${placeholder}`,
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
            img: `${URL}/oliver_tree/${preview}`,
            placeholder: `${URL}/oliver_tree/${placeholder}`,
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
            img: `${URL}/sofia_carson/${preview}`,
            placeholder: `${URL}/sofia_carson/${placeholder}`,
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
            img: `${URL}/muni_long/${preview}`,
            placeholder: `${URL}/muni_long/${placeholder}`,
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
            img: `${URL}/6IX9INE/${preview}`,
            placeholder: `${URL}/6IX9INE/${placeholder}`,
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
            img: `${URL}/tatras/${preview}`,
            placeholder: `${URL}/tatras/${placeholder}`,
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
            img: `${URL}/janet_jackson/${preview}`,
            placeholder: `${URL}/janet_jackson/${placeholder}`,
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
            img: `${URL}/oliver_tree/${preview}`,
            placeholder: `${URL}/oliver_tree/${placeholder}`,
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
            img: `${URL}/sofia_carson/${preview}`,
            placeholder: `${URL}/sofia_carson/${placeholder}`,
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
    cards: [
        {
            url: "projects",
            name: "projects",
            title: "Projects",
            btnText: "all projects",
        },
        {
            url: "https://www.youtube.com",
            name: "comercial",
            btnText: "Vfx breakdown",
            img: music,
            imgHover: `${URL2}/music.gif${open}`,
        },
        {
            url: "https://www.youtube.com",
            btnText: "official video",
            name: "music",
            img: comer,
            imgHover: `${URL2}/music.gif${open}`,
        },
    ]
}));