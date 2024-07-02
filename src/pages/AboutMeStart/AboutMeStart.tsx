import "./AboutMeStart.css"


interface AboutMeProps {
  onClick?:() => void
}

export const HomePage:React.FC<AboutMeProps> = ({onClick}) => {


  return (
   <main className="main-box">
      <div className="container">
        <img src="images\profile.jpg" alt=""/>
        <div className="about">
          <h3>Desenvolvedor BackEnd</h3>
          <p>Bem Vindo ao Meu Portifolio</p>
          <div className="tecs">
          </div>
          <button onClick={onClick}>Entrar</button>
        </div>
      </div>
   </main>
  )
}