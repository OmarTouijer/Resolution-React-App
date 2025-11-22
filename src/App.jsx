import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Vault from './pages/Vault'
import MyBox from './pages/MyBox'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/MyBox" element={<MyBox />} />
      </Routes>
    </div>
  )
}

export default App
