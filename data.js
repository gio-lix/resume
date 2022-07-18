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
        about: 'Css, Sass/Scss , TailwindCSS, Styled-Components, Bootstrap',
        Icon: RiComputerLine
    },
    {
        title: 'backend developer',
        about: 'Node.JS, Nest.JS',
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
        level: '70%',
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
        name: 'Nest.JS',
        level: '30%',
        Icon: BsCircle
    },
    {
        name: 'CSS',
        level: '80%',
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
        name: 'Heroku',
        level: '80%',
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

export const GamesData = [

    {
        id: 6,
        name: "chess",
        description: "chess game",
        image_url: "/images/chess.png",
        deploy_url: "https://game-chess1.vercel.app/",
        github_url: "https://github.com/gio-lix/game_chess1.git",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 1,
        name: "paddle",
        description: "paddle game",
        image_url: "/images/paddle.png",
        deploy_url: "https://game-gio-lix.vercel.app/",
        github_url: "https://github.com/gio-lix/game_paddle.git",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 2,
        name: "drag drop",
        description: "drag drop game",
        image_url: "/images/drag-drop.png",
        deploy_url: "https://game-drag-drop.vercel.app/",
        github_url: "https://github.com/gio-lix/game-drag_drop.git",
        key_techs: ["react.js"],
        category: ["react.js"]
    },
    {
        id: 3,
        name: "choice",
        description: "choice game",
        image_url: "/images/choice.png",
        deploy_url: "https://game-choice.vercel.app/",
        github_url: "https://github.com/gio-lix/game-choice.git",
        key_techs: ["javascript.js"],
        category: ["javascript.js"]
    },
    {
        id: 4,
        name: "paddle2",
        description: "paddle2 game",
        image_url: "/images/paddle_2.png",
        deploy_url: "https://game-padding.vercel.app/",
        github_url: "https://github.com/gio-lix/game-padding.git",
        key_techs: ["javascript.js"],
        category: ["javascript.js"]
    },
    {
        id: 5,
        name: "snake",
        description: "paddle2 game",
        image_url: "/images/snake.png",
        deploy_url: "https://game-nake-catch-fruit.vercel.app/",
        github_url: "https://github.com/gio-lix/game-nake_catch_fruit.git",
        key_techs: ["javascript.js"],
        category: ["javascript.js"]
    },

]

export const Projects = [
      {
        id: 1,
        name: 'blogs',
        description: 'posts',
        image_url: "/images/posts.webp",
        deploy_url: 'https://blog-front-delta.vercel.app/',
        github_url: 'https://github.com/gio-lix/blog-front.git',
        key_techs: ['node', 'express', 'scss', "typescript"],
        category: ['node', 'express', 'scss'],
    },

    {
        id: 2,
        name: 'commercial-typescrip',
        description: 'This content ',
        image_url: "/images/comm.jpg",
        deploy_url: 'https://commercial-app-typescript.vercel.app',
        github_url: 'https://github.com/gio-lix/commercial-app-typescript.git',
        key_techs: ['redux', 'redux-saga', 'next.js', 'tailwind'],
        category: ['next', "Redux", "Redux-Saga"]
    },
    {
        id: 3,
        name: 'Filter-State',
        description: 'filter function ',
        image_url: "/images/state.webp",
        deploy_url: 'https://filter-data.vercel.app',
        github_url: 'https://github.com/gio-lix/filterData',
        key_techs: ['next.js', 'tailwind'],
        category: ['react']
    },
    {
        id: 4,
        name: 'hotel',
        description: 'hotel',
        image_url: "/images/hotels.jpg",
        deploy_url: 'https://hotel-frontend-94d1dmk94-gio-lix.vercel.app',
        github_url: 'https://github.com/gio-lix/hotel-frontend.git',
        key_techs: ['node.js', 'express', "scss", "typescript"],
        category: ['react']
    },
      {
        id: 5,
        name: 'likes-blogs',
        description: 'likes-blogs',
        image_url: "/images/hearts.png",
        deploy_url: 'https://blogs-posts.vercel.app/',
        github_url: 'https://github.com/gio-lix/blogs-posts.git',
        key_techs: ['React.js', 'tailwind'],
        category: ['react']
    },
   
          {
        id: 6,
        name: 'shop_B',
        description: 'shoppin with graphql',
        image_url: "/images/store-g27e66c331_1920.jpg",
        deploy_url: 'https://scandi-web.vercel.app/all',
        github_url: 'https://github.com/gio-lix/scandi-web.git',
        key_techs: ['react', 'graphql', 'tailwind'],
        category: ['react', "graphql"]
    },
      {
        id: 7,
        name: 'geo-Journal-typescript',
        description: 'This content ',
        image_url: "/images/geo.jpg",
        deploy_url: 'https://geo-journal-typescript.vercel.app',
        github_url: 'https://github.com/gio-lix/geo-journal-typescript',
        key_techs: ['next.js', 'tailwind'],
        category: ['react', "nest"]
    },
    {
        id: 8,
        name: 'web3-typescript',
        description: 'This content ',
        image_url: "/images/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png",
        deploy_url: 'https://sanity-9riub5idz-gio-lix.vercel.app',
        github_url: 'https://github.com/gio-lix/sanityNFT.git',
        key_techs: ['react.js', 'tailwind'],
        category: ['react', "sanity"]
    },
     {
        id: 9,
        name: 'gothic shop',
        description: 'this project ',
        image_url: "/images/goth.jpg",
        deploy_url: 'https://gothicshop123.vercel.app',
        github_url: 'https://github.com/gio-lix/gothicshop123.git',
        key_techs: ['Strapi', 'next.js', 'tailwind'],
        category: ['react', "strapi"]
    }
   
]

export const Categories = "Next"|"React"|"Strapi"|"Node"
