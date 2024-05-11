import './index.scss'

const Coin = ({backimg,name,desc,clr}) => {
    return (
        <div className="card">

        <div className="coin">
            <div className="front">

            </div>
            <div className="back">
                <img src={backimg} alt="" />
                <div className="coindesc" style={{border:'1px solid wheat',borderColor:clr}}>
                    <div className='extrabox'>
                    <span style={{color:clr, marginRight:'4px',fontWeight:'600'}}>{name}</span><span>{desc}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Coin;