import {RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiOutlineAntDesign} from "react-icons/ai"
import {BsCircle} from "react-icons/bs";



export const Services = [
    {
        title: 'frontend developer',
        about: 'Javascript, React.js, Next.JS, Redux, Redux-Saga, Redux-Toolkit,Typescript, Graphql, Git, Github, JWT, SEO, axios, Heroku, Firebase, Vercel ',
        Icon: RiComputerLine
    },
    {
        title: 'frontend Styles',
        about: 'Css, Sass/Scss , TailwindCSS, Styled-Components',
        Icon: RiComputerLine
    },
    {
        title: 'backend developer',
        about: 'Node.JS, Express.JS',
        Icon: FaServer
    },
    {
        title: 'UI/UX Developer',
        about: 'Figma UX',
        Icon: AiOutlineAntDesign
    },
]

export const Languages = [
    {
        name: 'Javascript.JS',
        level: '60%',
        Icon: BsCircle
    },
    {
        name: 'react.JS',
        level: '85%',
        Icon: BsCircle
    },
     {
        name: 'next.JS',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'Typescript',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'Html',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'Node.JS',
        level: '30%',
        Icon: BsCircle
    },
     {
        name: 'Express.JS',
        level: '60%',
        Icon: BsCircle
    },
    {
        name: 'CSS',
        level: '90%',
        Icon: BsCircle
    },
    {
        name: 'Sass/Scss',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'tailwind',
        level: '80%',
        Icon: BsCircle
    },

]

export const Tools = [
    {
        name: 'SEO',
        level: '80%',
        Icon: BsCircle
    },
      {
        name: 'graphql',
        level: '60%',
        Icon: BsCircle
    },
    {
        name: 'JWT',
        level: '80%',
        Icon: BsCircle
    },
    {
        name: 'Fetch/Axios',
        level: '95%',
        Icon: BsCircle
    },
      {
        name: 'Apollo-client',
        level: '80%',
        Icon: BsCircle
    },
     {
        name: 'React-Hook-Form',
        level: '95%',
        Icon: BsCircle
    },
    {
        name: 'UI/UX, Figma',
        level: '95%',
        Icon: BsCircle
    },
    {
        name: 'Firebase',
        level: '70%',
        Icon: BsCircle
    },
    {
        name: 'Git/Github',
        level: '80%',
        Icon: BsCircle
    },
]



export const Projects = [
    {
        id: 1,
        name: 'chat',
        description: 'chat with socket.io-client',
        image_url: "/images/img_30.png",
        deploy_url: 'https://user-chat-app-frontend.onrender.com/',
        github_url: 'https://github.com/gio-lix/user-chat-app-front',
        key_techs: ['react.js',"redux-toolkit", 'typescript.js', "socket.io-client" ,'scss'],
        category: ['react']
    },
    {
        id: 5,
        name: 'drag-drop',
        description: 'drag drop blogs',
        image_url: "/images/drag.png",
        deploy_url: 'https://board-blog.vercel.app/',
        github_url: 'https://github.com/gio-lix/board-blog',
        key_techs: ['react.js',"redux-toolkit", 'typescript.js' ,'scss'],
        category: ['react']
    },
    {
        id: 10,
        name: 'blog-2',
        description: 'blog-2',
        image_url: "/images/num_7.png",
        deploy_url: 'https://aaaapppp12-app.onrender.com/',
        github_url: 'https://github.com/gio-lix/chat-2',
        key_techs: ['react.js',"redux", 'typescript.js' ,'scss'],
        category: ['react']
    },
    {
        id: 20,
        name: 'note',
        description: 'note',
        image_url: "/images/num_8.png",
        deploy_url: 'https://note-ikw02kzlh-gio-lix.vercel.app/',
        github_url: 'https://github.com/gio-lix/note-app',
        key_techs: ['react.js', "scss", "redux-toolkit", "typescript"],
        category: ['react']
    },
    {
        id: 21,
        name: 'refine',
        description: 'refine app',
        image_url: "/images/refine.png",
        deploy_url: 'https://react-refine-app-front-page-au92d7qsy-gio-lix.vercel.app/',
        github_url: 'https://github.com/gio-lix/react-refine-app-front-page',
        key_techs: ['react.js', "scss",  "typescript"],
        category: ['react']
    },
    {
        id: 29,
        name: "player",
        description: "player",
        image_url: "/images/player.png",
        deploy_url: "https://preeminent-lamington-9a165a.netlify.app/",
        github_url: "https://github.com/gio-lix/react-app-small-projects/tree/radio-player",
        key_techs: ["react.js", "scss", "typescript.js"],
        category: ["react"]
    },

    {
        id: 39,
        name: 'Front Page',
        description: 'front page',
        image_url: "/images/img_33.png",
        deploy_url: 'https://react-app-small-projects-hcw4-8jlik0sfr-gio-lix.vercel.app/',
        github_url: 'https://github.com/gio-lix/react-app-small-projects/tree/front-page',
        key_techs: ['react.js', "scss",'typeScript', "responsive"],
        category: ['react']
    },

    {
        id: 40,
        name: 'scroll-animation',
        description: 'scroll-animation',
        image_url: "/images/num_6.png",
        deploy_url: 'https://scroll-front-app-navigation.vercel.app/',
        github_url: 'https://github.com/gio-lix/scroll-front-app-navigation',
        key_techs: ['react.js', "css", "responsive"],
        category: ['react']
    },
    {
        id: 50,
        name: 'likes-blogs',
        description: 'likes-blogs',
        image_url: "/images/num_9.png",
        deploy_url: 'https://blogs-posts.vercel.app/',
        github_url: 'https://github.com/gio-lix/blogs-posts.git',
        key_techs: ['React.js', "redux-toolkit", 'css'],
        category: ['react']
    },

    {
        id: 60,
        name: "player",
        description: "player",
        image_url: "/images/num_16.png",
        deploy_url: "https://music-player-smoky-sigma.vercel.app/",
        github_url: "https://github.com/gio-lix/music-player",
        key_techs: ["react.js", "typescript.js"],
        category: ["react"]
    },
    {
        id: 70,
        name: 'web3-typescript',
        description: 'This content ',
        image_url: "/images/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png",
        deploy_url: 'https://sanity-9riub5idz-gio-lix.vercel.app',
        github_url: 'https://github.com/gio-lix/sanityNFT',
        key_techs: ['next.js', 'tailwind'],
        category: ['next']
    },
    {
        id: 71,
        name: 'register',
        description: 'register form',
        image_url: "/images/num_5.png",
        deploy_url: 'https://register-formik-next-cotimrmlo-gio-lix.vercel.app',
        github_url: 'https://github.com/gio-lix/register-formik-next.js',
        key_techs: ['next.js', 'typescript.js' ,'formik', "tailwindcss"],
        category: ['next']
    },
    {
        id: 80,
        name: "player",
        description: "player",
        image_url: "/images/num_15.png",
        deploy_url: "https://music-payier-2.vercel.app/",
        github_url: "https://github.com/gio-lix/music-payier-2",
        key_techs: ["react.js", "typescript.js"],
        category: ["react"]
    },
    {
        id: 85,
        name: "Products Details",
        description: "player",
        image_url: "/images/img_31.png",
        deploy_url: "https://react-app-small-projects.vercel.app/",
        github_url: "https://github.com/gio-lix/react-app-small-projects/tree/details-of-products",
        key_techs: ["react.js", "typescript.js", "css", "Responsive"],
        category: ["react"]
    },
    {
        id: 90,
        name: "slider",
        description: "slider",
        image_url: "/images/num_14.png",
        deploy_url: "https://silide-app.vercel.app/",
        github_url: "https://github.com/gio-lix/silide-app",
        key_techs: ["react.js", "typescript.js"],
        category: ["react"]
    },
    {
        id: 100,
        name: 'hotel',
        description: 'hotel',
        image_url: "/images/num_10.png",
        deploy_url: 'https://hotel-frontend-ten.vercel.app/',
        github_url: 'https://github.com/gio-lix/hotel-frontend',
        key_techs: ['react.js', "scss", "typescript"],
        category: ['react']
    },
    {
        id: 110,
        name: "register progress bar",
        description: "register_progress_bar",
        image_url: "/images/num_13.png",
        deploy_url: "https://register-app-rho.vercel.app/#",
        github_url: "https://github.com/gio-lix/register-app",
        key_techs: ["react.js", "typescript.js"],
        category: ["react"]
    },
    {
        id: 120,
        name: "chess",
        description: "chess game",
        image_url: "/images/chess.png",
        deploy_url: "https://game-chess1.vercel.app/",
        github_url: "https://github.com/gio-lix/game_chess1",
        key_techs: ["react.js", "typescript.js"],
        category: ["react"]
    },
    {
        id: 130,
        name: "infinity scroll",
        description: "infinity scroll",
        image_url: "/images/num_17.png",
        deploy_url: "https://infinity-images-scoll.vercel.app/",
        github_url: "https://github.com/gio-lix/infinity_images_scoll",
        key_techs: ["react.js", "typescript.js"],
        category: ["react"]
    },
    {
        id: 140,
        name: "scroll",
        description: "scroll",
        image_url: "/images/num_18.png",
        deploy_url: "https://scroll-site-gamma.vercel.app/",
        github_url: "https://github.com/gio-lix/scroll_site",
        key_techs: ["react.js", "typescript.js"],
        category: ["react"]
    },
    {
        id: 150,
        name: "estate",
        description: "estate",
        image_url: "/images/num_12.png",
        deploy_url: "https://estate-navy.vercel.app/",
        github_url: "https://github.com/gio-lix/Estate",
        key_techs: ["react.js"],
        category: ["react"]
    },
    {
        id: 160,
        name: "progress bar",
        description: "progress bar",
        image_url: "/images/num_19.png",
        deploy_url: "https://progress-bar-phi.vercel.app/",
        github_url: "https://github.com/gio-lix/progress_bar",
        key_techs: ["react.js"],
        category: ["react"]
    },
    {
        id: 170,
        name: "pagination hooks",
        description: "pagination_hooks",
        image_url: "/images/num_11.png",
        deploy_url: "https://pagiantion-react-todos.vercel.app/",
        github_url: "https://github.com/gio-lix/pagiantion-react-todos",
        key_techs: ["react.js"],
        category: ["react"]
    },
    {
        id: 180,
        name: "chess",
        description: "chess game",
        image_url: "/images/num_20.png",
        deploy_url: "https://sidebar-menu-0.vercel.app/",
        github_url: "https://github.com/gio-lix/sidebar_menu",
        key_techs: ["react.js"],
        category: ["react"]
    },
    {
        id: 190,
        name: "paddle",
        description: "paddle game",
        image_url: "/images/paddle.png",
        deploy_url: "https://game-gio-lix.vercel.app/",
        github_url: "https://github.com/gio-lix/game_paddle.git",
        key_techs: ["react.js"],
        category: ["react"]
    },
    {
        id: 200,
        name: "drag drop",
        description: "drag drop game",
        image_url: "/images/drag-drop.png",
        deploy_url: "https://game-drag-drop.vercel.app/",
        github_url: "https://github.com/gio-lix/game-drag_drop.git",
        key_techs: ["react.js"],
        category: ["react"]
    },
    {
        id: 210,
        name: "choice",
        description: "choice game",
        image_url: "/images/choice.png",
        deploy_url: "https://game-choice.vercel.app/",
        github_url: "https://github.com/gio-lix/game-choice.git",
        key_techs: ["javascript.js"],
        category: ["javascript"]
    },
    {
        id: 220,
        name: "paddle2",
        description: "paddle2 game",
        image_url: "/images/paddle_2.png",
        deploy_url: "https://game-padding.vercel.app/",
        github_url: "https://github.com/gio-lix/game-padding.git",
        key_techs: ["javascript.js"],
        category: ["javascript"]
    },
    {
        id: 230,
        name: "snake",
        description: "paddle2 game",
        image_url: "/images/snake.png",
        deploy_url: "https://game-nake-catch-fruit.vercel.app/",
        github_url: "https://github.com/gio-lix/game-nake_catch_fruit.git",
        key_techs: ["javascript.js"],
        category: ["javascript"]
    },
    {
        id: 231,
        name: "Circle Navigation ",
        description: "Circle Navigation",
        image_url: "/images/num_46.png",
        deploy_url: "https://teal-syrniki-bef7ea.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/menu-bar-04",
        key_techs: ["html", "css", "JavaScript"],
        category: ["html"]
    },
    {
        id: 232,
        name: "Checkbox ",
        description: "custom checkbox",
        image_url: "/images/num_47.png",
        deploy_url: "https://63af07a3d159de0076d1822e--gleaming-unicorn-1aecd5.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/custom-checkbox",
        key_techs: ["html", "css", "JavaScript"],
        category: ["html"]
    },
    {
        id: 233,
        name: "Navigation",
        description: "Navigation Menu",
        image_url: "/images/img_43.png",
        deploy_url: "https://63ae93684ebb5c3167586924--papaya-platypus-3daa5d.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/menu-bar-03",
        key_techs: ["html", "css", "JavaScript"],
        category: ["html"]
    },
    {
        id: 234,
        name: "Hover bar 02",
        description: "Hover bar menu",
        image_url: "/images/img_40.png",
        deploy_url: "https://63ad46636b1d066d3950046a--sage-fenglisu-8603ae.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/menu-bar",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 235,
        name: "Hover bar",
        description: "Hover bar menu",
        image_url: "/images/img_39.png",
        deploy_url: "https://63ad8f806dad8026fd550b1c--mellow-concha-6ab54a.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/profile-02",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 236,
        name: "Side Bar",
        description: "Side Bar menu",
        image_url: "/images/menu_38.png",
        deploy_url: "https://heroic-piroshki-9cd656.netlify.app/#",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/side-menu",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 237,
        name: "users list",
        description: "users list",
        image_url: "/images/img_37.png",
        deploy_url: "https://63adcd7917115e0e628cf0e2--calm-phoenix-9d858a.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/users-list",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 238,
        name: "navigation",
        description: "navigation menu",
        image_url: "/images/img_36.png",
        deploy_url: "https://63ad63ef6f72c105a995e42c--glowing-douhua-8d8c90.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/menu-bar-02",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 239,
        name: "profile",
        description: "open profile card",
        image_url: "/images/img_35.png",
        deploy_url: "https://63ad7ef50caebf14e41b4b74--dynamic-raindrop-af5bf1.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/profile-01",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 240,
        name: "card 01",
        description: "card",
        image_url: "/images/img_25.png",
        deploy_url: "https://63a2ac42eb2cf3332d37018a--sensational-pastelito-3da243.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/blob/card01/README.md",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 249,
        name: "Searching Input",
        description: "Searching Input",
        image_url: "/images/img_45.png",
        deploy_url: "https://63aeca0359bca70074490bfb--beamish-blancmange-fe8307.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/search-bar",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 250,
        name: "card 02",
        description: "card",
        image_url: "/images/img_23.png",
        deploy_url: "https://63a2ad8e738b443c4a5c92d3--inquisitive-quokka-af17ce.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/blob/card01/README.md",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 255,
        name: "card 03",
        description: "card",
        image_url: "/images/img_32.png",
        deploy_url: "https://63a9ff7335a1fb64bf9f8006--exquisite-beijinho-611ae5.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/card-06",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 259,
        name: "Side Bar",
        description: "side bar menu",
        image_url: "/images/img_44.png",
        deploy_url: "https://63aeb9179266ef4755fa5375--clever-heliotrope-d61b55.netlify.app/#",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/side-menu-02",
        key_techs: ["html", "css", "javascript"],
        category: ["html"]
    },
    {
        id: 260,
        name: "card 04",
        description: "card",
        image_url: "/images/img_24.png",
        deploy_url: "https://javascript-html-css-zdcg.vercel.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/cards-03",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 270,
        name: "card 05",
        description: "card",
        image_url: "/images/img_21.png",
        deploy_url: "https://639dcb1a89c20f1a85a4ce3c--papaya-lolly-2d1f20.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/cards-04",
        key_techs: ["html", "css"],
        category: ["html"]
    },
    {
        id: 280,
        name: "card 06",
        description: "card",
        image_url: "/images/img_22.png",
        deploy_url: "https://639e211de97dd35ea198a286--calm-belekoy-5e945b.netlify.app/",
        github_url: "https://github.com/gio-lix/javascript-html-css/tree/cards-05",
        key_techs: ["html", "css"],
        category: ["html"]
    },
]

