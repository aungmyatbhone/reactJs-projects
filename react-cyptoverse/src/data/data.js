import {faTelegram,faReddit,faTwitter,faGithub,faFacebook,faDiscord, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import {faLink, faGlobe} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Home , BookOpen, DollarSign} from "react-feather"

export default [
    {
        name: 'Home',
        icon: <Home />,
        url: '/'
    },
    {
        name: 'Cryptocurrencies',
        icon: <DollarSign />,
        url: '/cryptocurrencies'
    },

    {
        name: 'News',
        icon: <BookOpen />,
        url: '/news'
    },
]

export const linksArray = [
    {
        name:'telegram',
        icon: <FontAwesomeIcon icon={faTelegram} />,
    },
    {
        name:'reddit',
        icon: <FontAwesomeIcon icon={faReddit} />,
    },
    {
        name:'twitter',
        icon: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
        name:'website',
        icon: <FontAwesomeIcon icon={faGlobe} />,
    },
    {
        name:'github',
        icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
        name: 'facebook',
        icon: <FontAwesomeIcon icon={faFacebook} />,
    },
    {
        name:'discord',
        icon: <FontAwesomeIcon icon={faDiscord} />,
    },
    {
        name: 'youtube',
        icon: <FontAwesomeIcon icon={faYoutube} />,
    },
    {
        name: 'linkedin',
        icon: <FontAwesomeIcon icon={faLinkedin} />,
    }
]
