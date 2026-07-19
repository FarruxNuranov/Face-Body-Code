import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Specialists from './components/Specialists'
import Certificates from './components/Certificates'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Specialists />
        <Certificates />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
