import './index.scss'
import '../../assets/fonts/CrackMan.ttf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <h3>PAC-NAV</h3>
            <div className="headeranim">
                <div className="ghosts"></div>
                <div className="eat">
                    <div className="pacman"></div>
                    <div className="pellets"></div>
                </div>
            </div>
            <div className="homeabout">
                <span>HOME</span>
                <span><a href="#demo">PRODUCT</a></span>
                <span>ENGLISH <FontAwesomeIcon icon={faCaretDown}/></span>
            </div>
            <button className='signin'>SIGN IN</button>
        </div>
    )
}

export default Header;