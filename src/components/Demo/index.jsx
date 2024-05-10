import './index.scss'
import drip from '../../assets/images/drip.png'

const Demo = () => {
    return(
        <>
        <div className="demo">
            <h1>demo</h1>
            <h1>coming soon</h1>
        </div>
        <div className="dripcont">
            <img src={drip} alt="" />
        </div>
        </>
    )
}

export default Demo;