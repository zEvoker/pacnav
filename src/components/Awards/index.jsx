import './index.scss'
import prizes from '../../assets/images/prizes.png'
import slide1 from '../../assets/images/slide1.png'
import slide2 from '../../assets/images/slide2.png'
import slide3 from '../../assets/images/slide3.png'
import slide4 from '../../assets/images/slide4.png'

const Awards = () => {
    return (
        <div className="awards">
            <div className="title">
                <div className="what">
                <h3>WHAT</h3><h3>OUR</h3><h3 style={{color:"#F7DE36"}}>USERS</h3><h3>SAY</h3>
                </div>
                <span>Your feedback is very valuable for us. Join in and share those wonderful memories that you had with us.</span>
            </div>
            <div className="slider">
                <div className="slidetrack">
                    <div className="slide">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide4} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={slide4} alt="" />
                    </div>
                </div>
            </div>
            <div className="prizes">
                <img src={prizes} alt="" />
            </div>
        </div>
    )
}

export default Awards;