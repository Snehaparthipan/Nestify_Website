import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Routes,Route,BrowserRouter} from 'react-router-dom'
import About from './Components/About'
import Categories from './Components/Categories'
import Contact from './Components/Contact'


function App() {
  return (
    <>
    <div className='body'>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    <Home/>
    </div>
    
      
    </>
  )
}

export default App
