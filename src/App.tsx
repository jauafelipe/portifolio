import './App.css'
import { HomePage } from './pages/HomePage/Home'

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
