import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import http from './axios'
import { authenticate } from './redux/slice/userSlice'

import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Cart';
import Data from './data.json';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function RoutesPage(){
    const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
      http.get('/auth')
        .then(res => {
          if(res.data.success){
            console.log('success', res.data)
            dispatch(authenticate(res.data.usuario))
            if (window.location.pathname === "/login") {
                navigate("/")
            } 
          }else{
            if(window.location.pathname === '/cart'){
                navigate('/login')
            }
            
          }
        })
  },[window.location.pathname])
    return(
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<DetailProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    )
}