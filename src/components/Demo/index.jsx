import './index.scss'
import drip from '../../assets/images/drip.png'
import demoscreen from '../../assets/images/demoscreen.png'
import mappac from '../../assets/images/mappac.png'
import gold from '../../assets/images/gold.png'

const Demo = () => {
    return(
        <>
        <div id='demo' className="demo">
            <div className="screen">
                <img className='mappac' src={mappac} />
                <h3>READY!</h3>
                <span>hover to start demo</span>
                <div className="fuzzcont">
                    <div className="fuzz"></div>
                </div>
                <div className="insertcoin">
                    <img src={gold} alt="coin" />
                </div>
            </div>
            <img src={demoscreen} alt="" />
        </div>
        <div className="dripcont">
            <img className='dripimg' src={drip} alt="" />
        </div>
        </>
    )
}

export default Demo;