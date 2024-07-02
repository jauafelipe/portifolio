import "./AboutMeStart.css"
import { AiOutlineDotNet } from "react-icons/ai";
import { FaFileDownload, FaLinkedin, FaReact, FaRegFilePdf } from "react-icons/fa";
import { SiMicrosoftsqlserver, SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const AboutMeStart = () => {


  return (
    <>
    <header className="cabeçalho">
      <nav>
        <h3>nav bar aqui</h3>
      </nav>
    </header>



    <div className="main">

      
      <div className="container">
      <img src="images/profile.jpg" alt="image" />
          
            <div className="stack">
            <h2>
              BackEnd <br />
              Developer.
            </h2>
            <p>
              Desenvolvendo Soluções e <br />Adquirindo Conhecimento!!
            </p>
             <div className="tecs">
             <AiOutlineDotNet
             className="tec-icon"
                color="#fff"
                size={100}
              />
              <FaReact
             className="tec-icon"

                color="#00B2FF"
                size={90}
              />
              <SiMicrosoftsqlserver
             className="tec-icon"

                color="#FF0000"
                size={90}
              />
              <SiMysql
             className="tec-icon"

                color="#fff"
                size={100} />
             </div>
            </div>
      </div>
      

      
      <div className="social-midia">
            <h2>redes sociais para contatos ou para projetos</h2>
            <div className="icons">

              <a href="https://github.com/jauafelipe" target="_blank" >
              <FaGithub className="icon-social" size={100} color="#fff" />
              </a>

              <a href="https://www.linkedin.com/in/jau%C3%A3-felipe-bb2b322ab/" target="_blank">
                <FaLinkedin className="icon-social"  color="0077b6" size={100} />
              </a>

              <a href="mailto:jauafelipe345@gmail.com">
              <MdEmail className="icon-social"  size={104} color="red" />
              </a>
            </div>
            
            
      </div>

      <div className="grade-download">
        <h2>Click ao Lado Para Fazer o Download do Meu CV ou se Deseja visualiza-lo</h2>
        <div className="grade-icons">

        <a href="downloads\my_cv.pdf" download>
        <FaFileDownload className="icon-grade"  size={100} color="#70e000"/>
        </a>

        <a href="downloads\my_cv.pdf">
        <FaRegFilePdf className="icon-grade"   size={100} color="red" />
        </a>
        </div>
      </div>
   







    </div>
  </>
  )
}