import './App.scss'
import Header from './components/Header'
import Info from './components/Info'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Awards from './components/Awards'
import Loader from 'react-loaders'

// import Pacmap from './components/Map'

function App() {

  return (
    <>
      <div className='container'>
      <div className="progress"><div className="travel"></div></div>
      <Header/>
      {/* <Pacmap/> */}
      <Info/>
      <Demo/>
      <Awards/>
      <Footer/>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default App
