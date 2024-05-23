import './App.scss'
import Header from './components/Header'
import Info from './components/Info'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Awards from './components/Awards'
import Loader from 'react-loaders'
import Pacmap from './components/Map'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show?
      <div className="container">
        <Pacmap setShow={setShow}/>
      </div>
      :
      <div className='container'>
      <div className="progress"><div className="travel"></div></div>
      <Header/>
      <Info/>
      <Demo/>
      <Awards/>
      <Footer setShow={setShow}/>
      </div>}
      <Loader type="pacman"/>
    </>
  )
}

export default App
