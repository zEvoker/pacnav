import './index.scss'
import drip from '../../assets/images/drip.png'
import demoscreen from '../../assets/images/demoscreen.png'
const Demo = () => {
    return(
        <>
        <div className="demo">
            <h1>demo</h1>
            <h1>coming soon</h1>
            <img src={demoscreen} alt="" />
        </div>
        <div className="dripcont">
            <img src={drip} alt="" />
        </div>
        </>
    )
}

export default Demo;