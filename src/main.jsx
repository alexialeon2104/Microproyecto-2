import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import App from './App.jsx'

import { Register } from "./pages/Register/Register";
import {
  CHARACTER_DETAIL_URL,
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  PROFILE_URL,
  REGISTER_URL,
} from "./urls/urls";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path={HOME_URL} element= {<h1>HOME PAGE</h1>} />
    <Route path={"/prueba"} element={<h1>Prueba</h1>}></Route>
    <Route path={REGISTER_URL} element= {<Register/>} />
    



   </Routes>
   </BrowserRouter>
  </React.StrictMode>
)
