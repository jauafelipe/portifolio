import "./AboutMeStart.css"
import { AiOutlineDotNet } from "react-icons/ai";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { SiMicrosoftsqlserver, SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcDocument } from "react-icons/fc";


export const AboutMeStart = () => {


  return (
    <>
    <div className="header">

      <div className="container">
        <div className="box" >

          <img className="image" src="images/profile.jpg" alt="image" />
          <div className="about-me">
            <h2>
              Sou estudante de Análise e Desenvolvimento de Sistemas, Com experiencia em:
            </h2>
            <div className="stack">
              <AiOutlineDotNet
                color="#000"
                size={50}
              />
              <FaReact
                color="#00B2FF"
                size={45}
              />
              <SiMicrosoftsqlserver
                color="#FF0000"
                size={50}
              />
              <SiMysql
                color="#000"
                size={55} />
            </div>
          </div>

        </div>

      </div>
      

      
      <div className="social-midia">
            <h2>redes sociais para contatos ou para projetos</h2>
            <div className="icons">
              <a href="https://github.com/jauafelipe" target="_blank" rel="github">
              <FaGithub size={50} color="#000" />
              </a>
              <a href="https://www.linkedin.com/in/jau%C3%A3-felipe-bb2b322ab/" target="_blank" rel="">
                <FaLinkedin color="0077b6" size={50} />
              </a>
            </div>
            <div className="box-mail">
              <MdEmail size={40} color="red" />
            <h2>
              email: 
             </h2>
             <a href="mailto:jauafelipe345@gmail.com">
                jauafelipe345@gmail.com
                </a>
            </div>
      </div>





      <div className="grade-download">
        <FcDocument size={50} />

        <h2>Click para fazer o download do meu CV</h2>
        <a href="downloads\my_cv.pdf" download>download</a>

      </div>
   
    </div>
  </>
  )
}