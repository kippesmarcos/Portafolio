
export type LinksType = {
    name: 'github' | 'figma' | 'browser',
    url: string
}

export interface Project {
    title: string;
    description: string;
    src: string;
    technologies: string[];
    state: boolean;
    linksType: LinksType[]
}