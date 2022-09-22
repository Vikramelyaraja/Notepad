import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Header from './Header'
import Showcase from './Showcase'
import Destinations from './Destination'
import Footer from './Footer'


function landing() {
  return (
<div>
    <Header/>
    <Showcase/>
    <Destinations/>
    <Footer/>
</div>

     
  )
}

export default landing;