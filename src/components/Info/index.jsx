import Pachomp from '../Pachomp'
import info1 from '../../assets/images/info1.png'
import info2 from '../../assets/images/info2.png'
import info3 from '../../assets/images/info3.png'
import info4 from '../../assets/images/info4.png'
import infodesc1 from '../../assets/images/infodesc1.png'
import infodesc2 from '../../assets/images/infodesc2.png'
import infodesc3 from '../../assets/images/infodesc3.png'
import infodesc4 from '../../assets/images/infodesc4.png'
import apple from '../../assets/images/apple.png'
import cherry from '../../assets/images/cherry.png'
import straw from '../../assets/images/straw.png'
import orange from '../../assets/images/orange.png'
import infopac from '../../assets/images/infopac.png'
import vangogh from '../../assets/images/vangogh.png'
import './index.scss'
import { useState,useEffect } from 'react'

const Info = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hackerval, sethackerval] = useState("");
    const images = [info1, info2, info3, info4];
    const infodescs = [infodesc1,infodesc2,infodesc3,infodesc4];
    const descs = ["ASK","HAIL A","","PICK"];
    const highlights = ["PAC-MAN","CAB","COMPANION","PAC-NAV"];
    const descs2 = ["THE WAY","ANYWHERE","ON THE GO","TODAY"];
    const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";

    useEffect(() => {
        const switchImage = () => {
            setCurrentImageIndex(prevIndex =>
                (prevIndex + 1) % images.length
            );
            sethackerval("OOOOOOO");
        };
        const intervalId = setInterval(switchImage, 10000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const animationTimeout = setTimeout(()=> {
            let iterations = 0;
            const interval=setInterval(()=> {
                sethackerval(highlights[currentImageIndex].split("").map((letter,index)=>{
                    if(index<iterations) return highlights[currentImageIndex][index];
                    return letters[Math.floor(Math.random()*26)];
                }).join(""));
                if(iterations>=highlights[currentImageIndex].length) clearInterval(interval);
                iterations+=1/3;
            },50);
        },2500);
        return ()=> clearTimeout(animationTimeout);
    }, [currentImageIndex]);

    return(
        <div className="info">
            <div className="infopics">
                <img className='infopic' src={images[currentImageIndex]}/>
                <div className="infocontent">
                    <span>{descs[currentImageIndex]}</span><h3>{hackerval}</h3><span>{descs2[currentImageIndex]}</span>
                </div>
                <img className='infodesc' src={infodescs[currentImageIndex]}/>
                <button className='getstarted'>GET STARTED</button>
                <img className='infopac' src={infopac}/>
            </div>
            <Pachomp/>
            <img className='apple' src={apple}/>
            <img src={orange} className='orange'/>
            <img src={straw} className='straw'/>
            <img src={cherry} className='cherry'/>
            <div className="infoghosts">
                <div className="inky"><div className="top"></div><div className="bot"><img src={vangogh} alt="" /><span>SATELLITE NAVIGATION</span></div></div>
                <div className="blinky"><div className="top"></div><div className="bot"><img src={vangogh} alt="" /><span>CAB BOOKING SERVICE</span></div></div>
                <div className="pinky"><div className="top"></div><div className="bot"><img src={vangogh} alt="" /><span>BUILT-IN GAMES</span></div></div>
                <div className="clyde"><div className="top"></div><div className="bot"><img src={vangogh} alt="" /><span>PAC-MAN THEMES</span></div></div>
            </div>
        </div>
    )
}

export default Info;