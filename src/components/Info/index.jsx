import Pachomp from '../Pachomp'
import info1 from '../../assets/images/info1.png'
import info2 from '../../assets/images/info2.png'
import info3 from '../../assets/images/info3.png'
import info4 from '../../assets/images/info4.png'
import './index.scss'
import { useState,useEffect } from 'react'

const Info = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [info1, info2, info3, info4];

    useEffect(() => {
        const switchImage = () => {
            setCurrentImageIndex(prevIndex =>
                (prevIndex + 1) % images.length
            );
        };
        const intervalId = setInterval(switchImage, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="info">
            <img src={images[currentImageIndex]}/>
            <Pachomp/>
        </div>
    )
}

export default Info;