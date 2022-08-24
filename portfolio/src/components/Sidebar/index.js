import {Link,NavLink} from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/g-logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHome,faUser,faLiinkedIn,faGithub,faSkype } from '@fortawesome/free-solid-svg-icons'





const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to ="/">

            <img src={Logo} alt="logo"/>
            

            </Link>
            <nav>
                 <NavLink exact="true" activeclassname ="active" to="/">
                    <FontAwesomeIcon icon ={faHome} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname ="active"  className="about-link"to="/about">
                    <FontAwesomeIcon icon ={faUser} color="#4d4d4e"/>
                    </NavLink>
                     <NavLink exact="true" activeclassname ="active"className="contact-link"to="/contact" >
                    <FontAwesomeIcon icon ={faEnvelope} color="#4d4d4e"/>
                    </NavLink>
             
            </nav>
            <ul>
                {/* <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/gayan-jayawardena-b72514198/"
                        >
                            <FontAwesomeIcon icon={faLiinkedIn} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Gayan21"
                        >
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="live:.cid.bb22b07e19eb83f5"
                        >
                            <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
                    </a>
                </li> */}
            </ul>
            </div>
)

export default Sidebar