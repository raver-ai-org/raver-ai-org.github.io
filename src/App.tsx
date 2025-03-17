import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

import Terms from './pages/Terms'
function App() {
  return (
    <Router>
      <div className='min-h-screen bg-[#E3D3CF]'>
        <Navbar />
        <main className='max-w-screen-3xl mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
