import './App.css'
import { HomePage } from './pages/AboutMeStart/AboutMeStart'

function App() {

  return (
    <>
      <HomePage onClick={() => {
        alert("em Desenvolvimento")
      }}/>
    </>
  )
}

export default App
