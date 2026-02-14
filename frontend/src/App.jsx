import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Services } from './pages/Services'
import Service from './pages/Service'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:serviceId' element={<Service />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
