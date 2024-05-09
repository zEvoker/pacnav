import Pachomp from '../Pachomp'
import info1 from '../../assets/images/info1.png'
import './index.scss'

const Info = () => {
    return(
        <div className="info">
            <img src={info1}/>
            <Pachomp/>
        </div>
    )
}

export default Info;