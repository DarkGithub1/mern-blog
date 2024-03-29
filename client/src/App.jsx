import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// Importing all the page here
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Header from './Components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  )
}
