import './App.css'
import About from './componentes/About'
import Footer from './componentes/Footer'
import Hero from './componentes/Hero'
import Carrers from './componentes/OurCarrers'
import Bosses from './componentes/Bosses'
import NavBar from './componentes/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Carrers></Carrers>
      <Bosses></Bosses>
      <Footer></Footer>
    </>
  )
}

export default App
