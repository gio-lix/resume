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
        level: '80%',
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
        level: '50%',
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
        level: '70%',
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
        level: '95%',
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
        name: 'drag-drop',
        description: 'drag drop blogs',
        image_url: "/images/drag.png",
        deploy_url: 'https://board-blog.vercel.app/',
        github_url: 'https://github.com/gio-lix/board-blog',
        key_techs: ['react.js',"redux-toolkit", 'typescript.js' ,'scss'],
        category: ['react']
    },
    {
        id: 2,
        name: 'blog-2',
        description: 'blog-2',
        image_url: "/images/num_7.png",
        deploy_url: 'https://aaaapppp12-app.onrender.com/',
        github_url: 'https://github.com/gio-lix/chat-2',
        key_techs: ['react.js',"redux", 'typescript.js' ,'scss'],
        category: ['react']
    },
    {
        id: 3,
        name: 'register',
        description: 'register form',
        image_url: "/images/num_5.png",
        deploy_url: 'https://register-formik-next-cotimrmlo-gio-lix.vercel.app',
        github_url: 'https://github.com/gio-lix/register-formik-next.js',
        key_techs: ['next.js', 'typescript.js' ,'formik', "tailwindcss"],
        category: ['next']
    },

    {
        id: 5,
        name: 'note',
        description: 'note',
        image_url: "/images/num_8.png",
        deploy_url: 'https://note-ikw02kzlh-gio-lix.vercel.app/',
        github_url: 'https://github.com/gio-lix/note-app',
        key_techs: ['react.js', "scss", "redux-toolkit", "typescript"],
        category: ['react']
    },
    {
        id: 6,
        name: 'scroll-animation',
        description: 'scroll-animation',
        image_url: "/images/num_6.png",
        deploy_url: 'https://scroll-front-app-navigation.vercel.app/',
        github_url: 'https://github.com/gio-lix/scroll-front-app-navigation',
        key_techs: ['react.js', "css", "responsive"],
        category: ['react']
    },
    {
        id: 7,
        name: 'likes-blogs',
        description: 'likes-blogs',
        image_url: "/images/num_9.png",
        deploy_url: 'https://blogs-posts.vercel.app/',
        github_url: 'https://github.com/gio-lix/blogs-posts.git',
        key_techs: ['React.js', "redux-toolkit", 'css'],
        category: ['react']
    },
    {
        id: 8,
        name: "player",
        description: "player",
        image_url: "/images/num_16.png",
        deploy_url: "https://music-player-smoky-sigma.vercel.app/",
        github_url: "https://github.com/gio-lix/music-player",
        key_techs: ["react.js", "typescript.js"],
        category: ["react.js"]
    },
    {
        id: 9,
        name: 'web3-typescript',
        description: 'This content ',
        image_url: "/images/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png",
        deploy_url: 'https://sanity-9riub5idz-gio-lix.vercel.app',
        github_url: 'https://github.com/gio-lix/sanityNFT',
        key_techs: ['next.js', 'tailwind'],
        category: ['next']
    },
    {
        id: 11,
        name: "player",
        description: "player",
        image_url: "/images/num_15.png",
        deploy_url: "https://music-payier-2.vercel.app/",
        github_url: "https://github.com/gio-lix/music-payier-2",
        key_techs: ["react.js", "typescript.js"],
        category: ["react.js"]
    },
    {
        id: 13,
        name: "slider",
        description: "slider",
        image_url: "/images/num_14.png",
        deploy_url: "https://silide-app.vercel.app/",
        github_url: "https://github.com/gio-lix/silide-app",
        key_techs: ["react.js", "typescript.js"],
        category: ["react.js"]
    },
    {
        id: 14,
        name: 'hotel',
        description: 'hotel',
        image_url: "/images/num_10.png",
        deploy_url: 'https://hotel-frontend-ten.vercel.app/',
        github_url: 'https://github.com/gio-lix/hotel-frontend',
        key_techs: ['react.js', "scss", "typescript"],
        category: ['react']
    },
    {
        id: 15,
        name: "register progress bar",
        description: "register_progress_bar",
        image_url: "/images/num_13.png",
        deploy_url: "https://register-app-rho.vercel.app/#",
        github_url: "https://github.com/gio-lix/register-app",
        key_techs: ["react.js", "typescript.js"],
        category: ["react.js"]
    },
    {
        id: 17,
        name: "chess",
        description: "chess game",
        image_url: "/images/chess.png",
        deploy_url: "https://game-chess1.vercel.app/",
        github_url: "https://github.com/gio-lix/game_chess1",
        key_techs: ["react.js", "typescript.js"],
        category: ["react.js"]
    },
    {
        id: 19,
        name: "infinity scroll",
        description: "infinity scroll",
        image_url: "/images/num_17.png",
        deploy_url: "https://infinity-images-scoll.vercel.app/",
        github_url: "https://github.com/gio-lix/infinity_images_scoll",
        key_techs: ["react.js", "typescript.js"],
        category: ["react.js"]
    },
    {
        id: 21,
        name: "scroll",
        description: "scroll",
        image_url: "/images/num_18.png",
        deploy_url: "https://scroll-site-gamma.vercel.app/",
        github_url: "https://github.com/gio-lix/scroll_site",
        key_techs: ["react.js", "typescript.js"],
        category: ["react.js"]
    },
    {
        id: 23,
        name: "estate",
        description: "estate",
        image_url: "/images/num_12.png",
        deploy_url: "https://estate-navy.vercel.app/",
        github_url: "https://github.com/gio-lix/Estate",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 25,
        name: "progress bar",
        description: "progress bar",
        image_url: "/images/num_19.png",
        deploy_url: "https://progress-bar-phi.vercel.app/",
        github_url: "https://github.com/gio-lix/progress_bar",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 27,
        name: "pagination hooks",
        description: "pagination_hooks",
        image_url: "/images/num_11.png",
        deploy_url: "https://pagiantion-react-todos.vercel.app/",
        github_url: "https://github.com/gio-lix/pagiantion-react-todos",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 29,
        name: "chess",
        description: "chess game",
        image_url: "/images/num_20.png",
        deploy_url: "https://sidebar-menu-0.vercel.app/",
        github_url: "https://github.com/gio-lix/sidebar_menu",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 31,
        name: "paddle",
        description: "paddle game",
        image_url: "/images/paddle.png",
        deploy_url: "https://game-gio-lix.vercel.app/",
        github_url: "https://github.com/gio-lix/game_paddle.git",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 33,
        name: "drag drop",
        description: "drag drop game",
        image_url: "/images/drag-drop.png",
        deploy_url: "https://game-drag-drop.vercel.app/",
        github_url: "https://github.com/gio-lix/game-drag_drop.git",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 35,
        name: "choice",
        description: "choice game",
        image_url: "/images/choice.png",
        deploy_url: "https://game-choice.vercel.app/",
        github_url: "https://github.com/gio-lix/game-choice.git",
        key_techs: ["javascript.js"],
        category: ["javascript.js"]
    },
    {
        id: 37,
        name: "paddle2",
        description: "paddle2 game",
        image_url: "/images/paddle_2.png",
        deploy_url: "https://game-padding.vercel.app/",
        github_url: "https://github.com/gio-lix/game-padding.git",
        key_techs: ["javascript.js"],
        category: ["javascript.js"]
    },
    {
        id: 39,
        name: "snake",
        description: "paddle2 game",
        image_url: "/images/snake.png",
        deploy_url: "https://game-nake-catch-fruit.vercel.app/",
        github_url: "https://github.com/gio-lix/game-nake_catch_fruit.git",
        key_techs: ["javascript.js"],
        category: ["javascript.js"]
    },
]

