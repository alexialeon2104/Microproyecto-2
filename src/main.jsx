import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import App from './App.jsx'

import { Register } from "./pages/Register/Register";

import { Login } from "./pages/Login/Login";



import {
  MOVIE_DETAIL_URL,
  HOME_URL,
  LOGIN_URL,
  PROFILE_URL,
  REGISTER_URL,
} from "./urls/urls";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   
    <Route path={REGISTER_URL} element= {<Register/>} />
    <Route path={LOGIN_URL} element ={<Login/>}/>
   


    



   </Routes>
   </BrowserRouter>
  </React.StrictMode>
)
