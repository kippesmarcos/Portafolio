import { 
    AspNetSVG, 
    CsharpSVG, 
    CssSVG, 
    DockerSVG, 
    FigmaSVG, 
    GitSVG, 
    HtmlSVG, 
    JavascriptSVG, 
    MySqlSVG, 
    NextSVG, 
    NodejsSVG, 
    PrismaSVG, 
    ReactSVG, 
    TailwindSVG, 
    TypescriptSVG 
} from '@/components'

export const config = {
    skills: {
        main: [
            {
                name: "HTML",
                logo: <HtmlSVG size="44px" />
            },
            {
                name: "CSS",
                logo: <CssSVG size="44px" />
            },
            {
                name: "Javascript",
                logo: <JavascriptSVG size="44px" />
            },
            
        ],
        secondary: [
            {
                name: "React",
                logo: <ReactSVG size="44px" />
            },
            {
                name: "NodeJS",
                logo: <NodejsSVG size="44px" />
            },
            {
                name: "Git",
                logo: <GitSVG size="44px" />
            },
            {
                name: "MySQL",
                logo: <MySqlSVG size="44px"/>
            },
        ]
    },
    socialMedia: {
        linkedin: "https://www.linkedin.com/in/kippesmarcos/",
        github: "https://github.com/kippesmarcos",
        frontentmentor: "https://www.frontendmentor.io/profile/kippesmarcos"
    },
    contact: ""
}