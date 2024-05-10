import './App.css'
import Header from './components/Header'
import Info from './components/Info'
import Demo from './components/Demo'
import Footer from './components/Footer'
// import Pacmap from './components/Map'

function App() {

  return (
    <div className='container'>
    <Header/>
    {/* <Pacmap/> */}
    <Info/>
    <Demo/>
    <Footer/>
    </div>
  )
}

export default App
