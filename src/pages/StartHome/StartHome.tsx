import "./StartHome.css"
import { ButtonComponent } from "../../components/button/ButtonComponent"
import { Link } from "react-router-dom"



export const StartHome = () => {


  return (
   <main className="main-box">
      <div className="container">
        <img src="images\profile.jpg" alt=""/>
        <div className="about">


          <h3>Desenvolvedor BackEnd</h3>
          <p>Bem Vindo ao Meu Portifolio</p>
          <div className="tecs">
          </div>
          <Link to={"/start"}>
          <ButtonComponent text="Entrar"   />
          </Link>
        </div>
      </div>
   </main>
  )
}