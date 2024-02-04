import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import User from './User';
import NotFound1 from './NotFound1';

function Pages() {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user/:id' element={<User/>}/>
    <Route path='*' element={<NotFound1/>}/>
  </Routes>
}

export default Pages;