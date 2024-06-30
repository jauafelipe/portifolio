import React from "react";
import "./Header.css"
import { AiOutlineDotNet } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiMicrosoftsqlserver, SiMysql } from "react-icons/si";

interface HeaderProps {
  scrollInto: () => void;
  icon?:JSX.Element
  textButton?: string
}
export const Header:React.FC<HeaderProps> = ({scrollInto, icon, textButton}) => {

  return (
    <div className="header">

      <header className="container">
        <div className="box">
          <img className="image" src="images/profile.jpg" alt="image" />
          <div className="about-me">
            <h2>
              Sou estudante de Análise e Desenvolvimento de Sistemas, Com experiencia em:
            </h2>
            <div className="stack">
              <AiOutlineDotNet
                color="#fff"
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
                color="#EFF1F3"
                size={55} />
            </div>
          </div>
        </div>
      </header>

      <button className="scroll-button" onClick={scrollInto}>{textButton}{icon}
      </button>
    </div>

  )
}