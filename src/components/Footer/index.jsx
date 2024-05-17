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
import pacbutton from '../../assets/images/pacman.png'
import pacgraybut from '../../assets/images/pacgraybut.png'
import { useState } from 'react';
import { useEffect } from 'react';

const Footer = () => {
    const descs=["begins each level moving at the same speed as all of the other ghosts, but after you've eaten a certain number of dots, he begins to speed up.","seems to have a tendency to go around blocks in an anticlockwise direction unlike Blinky and Clyde who seem to prefer going clockwise.","is dangerous because he's unpredictable. Given the same choices, he will often take different turns at different times.","is either short-sighted or stupid. He will often turn off rather than approach you. His heart doesn't seem to be in it at all.","is the titular protagonist of the Pac-Man series. Residing in Pac-Land, he regularly favors eating various types of Pac-Dots.",", also known as Pepper, is Pac-Man's wife and sidekick and is the mother of Jr. Pac-Man and Baby Pac-Man.","is the first-born son of Pac-Man and Ms. Pac-Man. During his adventures, he fell in love with Yum-Yum, Blinky's daughter.","is the second-born, infant child of Pac-Man and Ms. Pac-Man, and the younger sibling to Jr. Pac-Man."];
    const names=["Blinky","Pinky","Inky","Clyde"];
    const [setnum, setsetnum] = useState(true);
    const [xy,setxy] = useState([-680,-350]);
    const [reveal, setReveal] = useState(false);
    const [dir, setdir] = useState([0,0]);
    

    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState([]);
    const [delta, setDelta] = useState(100);
    const [idx, setIdx] = useState(0);
    const descStr = "As Pac-Nav captures the essence of the elements from the 80's arcade game, here are some interesting trivia for its super fans"
    const descStr2 = "Pac-Man has become a legendary video game icon and is one of the most recognizable fictional characters in the world"
    const txt = [[...descStr],[...descStr2]];
    const titleStr = "PAC-MAN";
    const titleArr= [[...titleStr],['T','R','I','V','I','A']]

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    useEffect(() => {
        const interval = setInterval(() => {
          move();
        }, 100); 
        return () => clearInterval(interval);
      }, [xy]);

    const move = () => {
        setxy(prev => {
            let [x, y] = prev;
            const [dx, dy] = dir;
            let newX = x + dx * 10;
            let newY = y + dy * 10;
            if (newX < -720) newX = -720;
            if (newX > 700) newX = 700;
            if (newY < -1430) newY = -1430;
            if (newY > 100) newY = 100;
            checkEasterEgg([newX, newY]);
            return [newX, newY];
        });
    }

    const tick = () => {
        let curText = isDeleting ? txt[idx].slice(0, text.length - 1) : txt[idx].slice(0, text.length + 1);
        setText(curText);
        if (!isDeleting && curText.length === txt[idx].length) {
            setIsDeleting(true);
            setDelta(20);
        } else if (isDeleting && curText.length === 0) {
            setIsDeleting(false);
            setIdx((1 + idx) % 2);
            setDelta(100);
        }
    }

     const checkEasterEgg = (newLocn) => {
        if (newLocn[0] === 620 && newLocn[1] === -1380) {
            setReveal(true);
        }
    }

    const keyPress = (e) => {
        switch (e.which) {
            case 37: {
                // left
                setdir([-1,0]);
                // e.preventDefault();
                break;
            }
            case 38: {
                // up
                setdir([0,-1]);
                // e.preventDefault();
                break;
            }
            case 39: {
                // right
                setdir([1,0]);
                // e.preventDefault();
                break;
            }
            case 40: {
                // down
                setdir([0,1]);
                // e.preventDefault();
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
                <img className='pacbut2' src={setnum ? pacgraybut : pacbutton} alt="" onClick={() => setsetnum(true)} />
                {setnum?
                <>
                <Coin backimg={pinky} name={names[1]} desc={descs[1]} clr="#FFABE7"/>
                <Coin backimg={clyde} name={names[3]} desc={descs[3]} clr="#FE9700"/>
                <Coin backimg={inky} name={names[2]} desc={descs[2]} clr="#00EBFC"/>
                <Coin backimg={blinky} name={names[0]} desc={descs[0]} clr="#FD0100"/>
                </>
                :
                <>
                <Coin backimg={pacmancoin} name={"Pac-Man"} desc={descs[4]} clr="#F7DE36"/>
                <Coin backimg={mspacman} name={"Ms. Pac-Man"} desc={descs[5]} clr="#F7DE36"/>
                <Coin backimg={pacjr} name={"Pac-Man Jr."} desc={descs[6]} clr="#F7DE36"/>
                <Coin backimg={babypac} name={"Baby Pac-Man"} desc={descs[7]} clr="#F7DE36"/> 
                </>}
                <img className='pacbut1' src={setnum ? pacbutton : pacgraybut} alt="" onClick={()=> setsetnum(false)}/>
                </div>
            </div>
            <input type="text" value="" className='movable' style={{transform: `translateX(${xy[0]}px) translateY(${xy[1]}px)`,}} onKeyDown={keyPress}/>
            {/* <div className="movable" style={{transform: `translateX(${xy[0]}px) translateY(${xy[1]}px)`,}}> */}
                {/* <div className="speech">Use the arrow keys to move and get the hidden pellet for a special surprise!</div> */}
            {/* </div> */}
            {reveal ?
            <button onClick={()=> {window.open("https://www.google.com/logos/2010/pacman10-i.html","_blank"); setxy([-600,-1350]); setReveal(false);}}>click me!</button>
            :
            <div className="hiddenpellet"></div>}
            <img src={footerpic} alt="" />
        </div>
    )
}

export default Footer;