import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { StartPainel } from './pages/StartPainel/StartPainel.tsx'
import { HomePage } from './pages/HomePage/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/'  element={<App />} loader />
      <Route path='/about-me' element={<StartPainel />}/>
      <Route path='home' element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
 </React.StrictMode>
)
