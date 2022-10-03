import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

import Signin from './Component/Signin'
import Error from './Component/Error'
import Home from './Component/Home'
import Landing from './Component/Landing';
import Faq from './Component/faq'
import Todo from './Component/todo';

function app() {
  return (
    
      

      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />}/> 
          <Route path="Home" element={<Home />} ></Route>
          <Route path="/Signin" element={<Signin />}/>
          <Route path="Faq" element={<Faq />}/>
          <Route path="todo/:mode" element={<Todo />}/>
          <Route path="*" element={<Error/>} />

          
      </Routes>
      
      </BrowserRouter>

     
  )
}

export default app;