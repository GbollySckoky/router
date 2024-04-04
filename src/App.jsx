import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Home/NavBar'
import About from './components/About/About'
import Home from './components/Homes/Home'
import Contact from './components/Contact/Contact'
import Support from './components/Support/Support'
const App = () => {
  return (
    <div>
      <BrowserRouter >
      <NavBar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route path='/support' element={<Support />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App