import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './Components/Contact'
import Signin from './Component/Signin'
import Error from './Component/Error'
import Home from './Component/Home'
import Landing from './Component/Landing';
import Faq from './Component/faq'
import Todo from './Component/todo';
import View from './Component/View';
import Edit from './Component/Edit';
import LocalStorage from './Component/localstorage'
function app() {
  return (
    
      

      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />}/> 
          {/* <Route path="/" element={<LocalStorage />}/>  */}
          <Route path="Home" element={<Home />} ></Route>
          <Route path="Signin" element={<Signin />}/>
          <Route path="Faq" element={<Faq />}/>
          <Route path="todo" element={<Todo />}/>
          <Route path="view" element={<View />}/>
          <Route path="edit" element={<Edit />}/>
          <Route path="*" element={<Error/>} />

          
      </Routes>
      
      </BrowserRouter>

     
  )
}

export default app;