export interface IService {
    title: string,
    about: string,
    Icon: any
}

export interface ISkill {
    name: string,
    level: string,
    Icon: any
}
export interface IProject {
    id: number,
    name:string,
    description: string,
    image_url: string,
    deploy_url: string,
    github_url: string,
    category: any,
    key_techs: string[]
}

export type Category = 'react'| 'next' | 'strapi' | 'nest'

export {}