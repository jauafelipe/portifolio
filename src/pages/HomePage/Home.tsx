import { ButtonComponent } from "../../components/button/ButtonComponent"
import "./Home.css"



export const HomePage = () => {


  return (
   <main className="main-box">
      <div className="container">
        <img src="images\profile.jpg" alt=""/>
        <div className="about">


          <h3>Desenvolvedor BackEnd</h3>
          <p>Bem Vindo ao Meu Portifolio</p>
          <div className="tecs">
          </div>

          <a href="/about-me">
          <ButtonComponent text="Entrar" onclick={() => console.log("Ola mundo")} />
          </a>

        </div>
      </div>
   </main>
  )
}