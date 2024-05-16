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
import { useState } from 'react';
import { useEffect } from 'react';

const Footer = () => {
    const descs=["begins each level moving at the same speed as all of the other ghosts, but after you've eaten a certain number of dots, he begins to speed up.","seems to have a tendency to go around blocks in an anticlockwise direction unlike Blinky and Clyde who seem to prefer going clockwise.","is dangerous because he's unpredictable. Given the same choices, he will often take different turns at different times.","is either short-sighted or stupid. He will often turn off rather than approach you. His heart doesn't seem to be in it at all.","is the titular protagonist of the Pac-Man series. Residing in Pac-Land, he regularly favors eating various types of Pac-Dots.",", also known as Pepper, is Pac-Man's wife and sidekick and is the mother of Jr. Pac-Man and Baby Pac-Man.","is the first-born son of Pac-Man and Ms. Pac-Man. During his adventures, he fell in love with Yum-Yum, Blinky's daughter.","is the second-born, infant child of Pac-Man and Ms. Pac-Man, and the younger sibling to Jr. Pac-Man."];
    const names=["Blinky","Pinky","Inky","Clyde"];
    const [locn, setLocn] = useState([0,0])
    const [easter, setEaster] = useState(false)

    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState([]);
    const [delta, setDelta] = useState(100);
    const [idx, setIdx] = useState(0);
    const descStr = "As Pac-Nav captures the essence of the elements from the 80's arcade game, here are some interesting trivia for its super fans "
    const txt = [[...descStr]];
    const titleStr = "PAC-MAN";
    const titleArr= [[...titleStr],['T','R','I','V','I','A']]

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let curText = isDeleting ? txt[idx].slice(0, text.length - 1) : txt[idx].slice(0, text.length + 1);
        setText(curText);
        if (!isDeleting && curText.length === txt[idx].length) {
            setIsDeleting(true);
            setDelta(20);
        } else if (isDeleting && curText.length === 0) {
            setIsDeleting(false);
            setIdx((1 + idx) % 1);
            setDelta(100);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
          return ()=> {
            document.removeEventListener('keydown', keyPress);
          }
     }, []);
        
     const checkEasterEgg = (newLocn) => {
        if (newLocn[0] === 620 && newLocn[1] === -1880) {
            console.log("hahahaha");
            setEaster(true);
        }
    }

    const keyPress = (e) => {
        switch (e.which) {
            case 37: {
                // left
                setLocn(prev => {
                    const newLocn = [prev[0] - 10, prev[1]];
                    checkEasterEgg(newLocn);
                    return newLocn;
                });
                e.preventDefault();
                break;
            }
            case 38: {
                // up
                setLocn(prev => {
                    const newLocn = [prev[0], prev[1] - 10];
                    checkEasterEgg(newLocn);
                    return newLocn;
                });
                e.preventDefault();
                break;
            }
            case 39: {
                // right
                setLocn(prev => {
                    const newLocn = [prev[0] + 10, prev[1]];
                    checkEasterEgg(newLocn);
                    return newLocn;
                });
                e.preventDefault();
                break;
            }
            case 40: {
                // down
                setLocn(prev => {
                    const newLocn = [prev[0], prev[1] + 10];
                    checkEasterEgg(newLocn);
                    return newLocn;
                });
                e.preventDefault();
                break;
            }
            default:
        }
    };

    return(
        <div className="footer">
            <div className="scrollpac"></div>
            <div className="meet">
                <div className="meetfam">
                    <div className='meetfirst'>
                    {titleArr[0].map((letter, index) => (<span key={index}>{letter}</span>))}
                    </div>
                    <div className='meetsec'>
                    {titleArr[1].map((letter, index) => (<span key={index}>{letter}</span>))}
                    </div>
                </div>
                <div className="meetdesc">
                    <span>{text}</span><span className='blinker'>&#95;</span>
                    {isDeleting && <div className="eater"></div>}
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
            <div className="movable" style={{transform: `translateX(${locn[0]}px) translateY(${locn[1]}px)`,}}></div>
            {!easter && <div className="hiddenpellet"></div>}
            {easter && <button onClick={()=> window.open("https://www.google.com/logos/2010/pacman10-i.html","_blank")}>click me!</button>}
            <img src={footerpic} alt="" />
        </div>
    )
}

export default Footer;