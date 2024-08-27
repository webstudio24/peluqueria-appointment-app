
import Home from '../pages/Home'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Peluqueros from '../pages/Peluqueros/Peluqueros'
import PeluqueroDetails from '../pages/Peluqueros/PeluqueroDetails'
import {Routes, Route } from 'react-router-dom'
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/peluqueros' element={<Peluqueros/>}/>
      <Route path='/peluqueros/:id' element={<PeluqueroDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
  )
}

export default Routers