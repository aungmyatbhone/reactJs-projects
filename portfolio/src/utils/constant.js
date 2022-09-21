import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

//skills
import reactSvg from '../assets/react.svg'
import reduxSvg from '../assets/redux.svg'
import sassSvg from '../assets/sass.svg'
import muiSvg from '../assets/mui.svg'
import tailwindSvg from '../assets/tailwind.svg'
import cssSvg from '../assets/css.svg'
import jsSvg from '../assets/js.png'
import githubSvg from '../assets/github.svg'
import htmlSvg from '../assets/html.svg'
import figmaSvg from '../assets/figma.svg'
import bootstrapPng from '../assets/bootstrap.png'
import aiPng from '../assets/aiPng.png'

//offers
import userinterface from '../assets/userinterface.svg'
import webdesign from '../assets/webdesign.svg'
import frontend from '../assets/frontend.svg'

//projects
import jutube from '../assets/jutube.png'
import jutubeIcon from '../assets/jutubeIcon.svg'
import jcryptoverse from '../assets/jcryptoverse.png'
import jcryptoverseIcon from '../assets/jcryptoverseIcon.png'

const constant =  [
    {
        name: 'Home',
        url: "#home"
    },
    {
        name: 'About',
        url: "#about"
    },
    {
        name: 'Skills',
        url: "#skills"
    },
    {
        name: 'Projects',
        url: "#projects"
    },
]

const contacts = [
    {
        icon: <FontAwesomeIcon icon={faEnvelope}/>,
        url: 'nauthang381@gmail.com',
        delay: 0
    },
    {
        icon: <FontAwesomeIcon icon={faGithub}/>,
        url: 'https://github.com/aungmyatbhone',
        delay: 200
    },
    {
        icon: <FontAwesomeIcon icon={faLinkedin}/>,
        url: 'https://www.linkedin.com/in/aung-myat-bhone-086751233/',
        delay: 300
    },
    {
        icon: <FontAwesomeIcon icon={faFacebook}/>,
        url: 'https://www.facebook.com/khaithang381/',
        delay: 400
    },
]

const skills = [
    { icon: htmlSvg, name: 'HTML5'  },
    { icon: cssSvg, name:'CSS3' },
    { icon: jsSvg,  name: 'JavaScript ES6'},
    { icon: sassSvg, name: 'SASS'},
    { icon : bootstrapPng, name: 'Bootstrap'},
    { icon: tailwindSvg, name: 'TailwindCss' },
    { icon: reactSvg,  name:'ReactJs'},
    { icon: reduxSvg,  name:'Redux/ReduxToolkit'},
    { icon: muiSvg,  name:'Material UI'},
    { icon: githubSvg,  name:'Github'},
    { icon: figmaSvg,  name:'Figma'},
    { icon : aiPng, name: 'Adobe Illustrator'},

]

const  offers = [ 
    {name: 'Frontend', icon: frontend,para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam harum et, maxime omnis qui tempora maiores dolor reiciendis voluptas, non sit delectus minima alias dolorum illum aut accusantium consequatur!'},
    {name: 'Web Design', icon: webdesign,para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam harum et, maxime omnis qui tempora maiores dolor reiciendis voluptas, non sit delectus minima alias dolorum illum aut accusantium consequatur!'},
    {name: 'User Interface', icon: userinterface,para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam harum et, maxime omnis qui tempora maiores dolor reiciendis voluptas, non sit delectus minima alias dolorum illum aut accusantium consequatur!'},

]

const projectsList = [
    {
        id: 11,
        name: 'J Utube',
        url: 'https://jutube.netlify.app/',
        image: jutube,
        icon: jutubeIcon,
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique veniam ullam nulla placeat magnam vitae quo quam delectus eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique veniam ullam nulla placeat magnam vitae quo quam delectus eaque..',
        skills: ['React', 'TailwindCss' , 'Axios', 'Redux', 'JavaScript'],
        seeMore: false,
    },
    {
        id: 22,
        name: 'JCryptoverse',
        url: 'https://jcryptoverse.netlify.app/',
        image: jcryptoverse,
        icon: jcryptoverseIcon,
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique veniam ullam nulla placeat magnam vitae quo quam delectus eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique veniam ullam nulla placeat magnam vitae quo quam delectus eaque..',
        skills: ['React', 'TailwindCss' , 'Axios', 'Redux', 'JavaScript'],
        seeMore: false,
    },
]
export {constant, contacts, skills, offers,projectsList}