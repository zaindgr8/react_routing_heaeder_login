import React from 'react'
import { AccordionButton } from 'react-bootstrap'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from "./components/About"
import Header from './components/Header'
import Contact from './components/Contact'
import Login from './components/login'
import Layout from './components/layout/layout'

export const Main = () => {
  return (
    <>
    
    <Routes>
    <Route path='Header' element={<Header/>} />
      <Route path='Home' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="/" element={<Login/>} />
    </Routes>
   
    </>

  )
}

export default Main