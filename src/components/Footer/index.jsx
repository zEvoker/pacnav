import './index.scss'
import footerpic from '../../assets/images/footerpic.png'
import Coin from '../Coin';
import blinky from '../../assets/images/blinky.png'
import pinky from '../../assets/images/pinky.png'
import inky from '../../assets/images/inky.png'
import clyde from '../../assets/images/clyde.png'
import mspacman from '../../assets/images/mspacman.png'
import pacjr from '../../assets/images/pacjr.png'
import babypac from '../../assets/images/babypac.png'
import pacmancoin from '../../assets/images/pacmancoin.png'

const Footer = () => {
    const descs=["begins each level moving at the same speed as all of the other ghosts, but after you've eaten a certain number of dots, he begins to speed up.","seems to have a tendency to go around blocks in an anticlockwise direction unlike Blinky and Clyde who seem to prefer going clockwise.","is dangerous because he's unpredictable. Given the same choices, he will often take different turns at different times.","is either short-sighted or stupid. He will often turn off rather than approach you. His heart doesn't seem to be in it at all.","is the titular protagonist of the Pac-Man series. Residing in Pac-Land, he regularly favors eating various types of Pac-Dots.",", also known as Pepper, is Pac-Man's wife and sidekick and is the mother of Jr. Pac-Man and Baby Pac-Man.","is the first-born son of Pac-Man and Ms. Pac-Man. During his adventures, he fell in love with Yum-Yum, Blinky's daughter.","is the second-born, infant child of Pac-Man and Ms. Pac-Man, and the younger sibling to Jr. Pac-Man."];
    const names=["Blinky","Pinky","Inky","Clyde"];

    return(
        <div className="footer">
            <div className="meet">
                <div className="meetfam">
                    <span>PAC-MAN</span><span>TRIVIA</span>
                </div>
                <div className="meetdesc">
                    <span>As Pac-Nav captures the essence of the elements from the 80’s arcade game, here are some interesting trivia for its super fans.</span>
                </div>
                <div className="row">
                <Coin backimg={pinky} name={names[1]} desc={descs[1]} clr="#FFABE7"/>
                <Coin backimg={clyde} name={names[3]} desc={descs[3]} clr="#FE9700"/>
                <Coin backimg={inky} name={names[2]} desc={descs[2]} clr="#00EBFC"/>
                <Coin backimg={blinky} name={names[0]} desc={descs[0]} clr="#FD0100"/>
                </div>
                <div className="row">
                <Coin backimg={pacmancoin} name={"Pac-Man"} desc={descs[4]} clr="#F7DE36"/>
                <Coin backimg={mspacman} name={"Ms. Pac-Man"} desc={descs[5]} clr="#F7DE36"/>
                <Coin backimg={pacjr} name={"Pac-Man Jr."} desc={descs[6]} clr="#F7DE36"/>
                <Coin backimg={babypac} name={"Baby Pac-Man"} desc={descs[7]} clr="#F7DE36"/>                
                </div>
            </div>
            <img src={footerpic} alt="" />
        </div>
    )
}

export default Footer;