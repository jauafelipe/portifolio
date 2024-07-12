import './App.css'
import {BrowserRouter, Route,  Routes, useLocation} from "react-router-dom"
import { HomePage } from './pages/HomePage/Home.tsx'
import React, { useEffect } from 'react'
import { StartHome } from './pages/StartHome/StartHome.tsx'
import { StartPainel } from './pages/StartPainel/StartPainel.tsx'

const AppContent: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if(window.gtag) {
      window.gtag("config", "G-3QRTX38JHQ",{
        page_path: location.pathname + location.search,
      })
    }
  }, [location])


  return (
       <Routes>
        <Route path='/' element={<StartHome />} />
        <Route  path='/start'  element={<StartPainel />}/>
        <Route path='/home' element={<HomePage />} />
     </Routes>
  )
}


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};


export default App;
