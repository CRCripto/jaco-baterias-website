import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
