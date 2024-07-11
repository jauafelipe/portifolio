import "./Home.css"
import { BoxContainer } from "../../components/box-container/BoxContainer"
import { FlexBoxContainer } from "../../components/grid-container/FlexBoxContainer"
import { GrGraphQl } from "react-icons/gr";
import { AiOutlineDotNet } from "react-icons/ai";
import { FcMultipleDevices } from "react-icons/fc";
import { FaDiscord, FaFilePdf, FaGithub, FaInstagram, FaJava, FaLinkedin, FaReact } from "react-icons/fa";
import { SiSqlite, SiTypescript } from "react-icons/si";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import LayoutComponent from "../../components/motion-layout/LayoutComponentTec";
import { motion } from "framer-motion"
import Navbar from "../../components/nav-bar/NavBar";



import {initiGa, logEvent, logPageView} from "../../Helper/Analytics/Google-analytic"
import React from "react";






export const HomePage = () => {

    const handleClick = () => {
        logEvent("user", "click Button", "clicado no botao")
    }

    React.useEffect(() => {
        initiGa()
        logPageView()
        window.addEventListener("popstate", logPageView)
    },[])
    return (
        <main>
            <div className="container-home">
                <Navbar />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="box-sobre-mim">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }} className="imagem">
                        <motion.img
                            src="images\profile.jpg" alt="..." />
                    </motion.div>
                    <motion.div className="text-sobre-mim">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                            >Sobre</motion.h1>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4 }}
                            
                            >Prazer em conhecê-lo! Sou estudante de Análise e Desenvolvimento de Sistemas, com especialização em tecnologias back-end, incluindo ASP.NET, Node.js, C#, MySQL e SQL Server. Além disso, atuo no desenvolvimento de projetos nativos utilizando Flutter. Abaixo, você poderá conhecer melhor alguns dos meus projetos. CLICK NA ESFERA </motion.h3>
                        <motion.div

initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 5 }}
className="layout" >
                            <LayoutComponent />
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>


            <div className="apresentacao" id="apresentacao">
                <div className="container-github">
                    <div className="icon-github" >
                        <a href="https://github.com/jauafelipe" target="_blank">
                            <FaGithub size={100} className="fa-icon-git" />
                        </a>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="box-img">
                        <img src="images\git-hub.png" alt="" />
                    </motion.div>
                </div>


                <div className="container-linkedin">
                    <div className="icon-linkedin" >
                        <a href="https://www.linkedin.com/in/jau%C3%A3-felipe-bb2b322ab/e" target="_blank">
                            <FaLinkedin size={100} className="fa-icon-linkedin" />
                        </a>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="box-img">
                        <img src="images\linkedin.png" alt="" />
                    </motion.div>
                </div>
            </div>



            <FlexBoxContainer style={{
            }}>
                <div>
                    <BoxContainer
                        text="Desenvolvi uma API utilizando GraphQL com ASP.NET, implementando autenticação de usuário por meio de tokens JWT."
                        icon={[
                            <GrGraphQl size={50} color="#8338ec" />
                            , <AiOutlineDotNet size={50} />]}
                        button={<ButtonComponent text="redirecionar" onclick={handleClick} />}
                    />
                </div>
                <div>
                    <BoxContainer text="Desenvolvimento de websites responsivos com foco na experiência do usuário, utilizando React e TypeScript."
                        icon={
                            [<FcMultipleDevices size={50} />,
                            <FaReact size={50} color="#00b4d8" />
                                , <SiTypescript size={50} color="#0d47a1" />
                            ]}
                        button={<ButtonComponent text="redirecionar" onclick={handleClick} />}

                    />
                </div>
                <div>
                    <BoxContainer text="Desenvolvimento de bots simples para Discord utilizando Java e SQLite."

                        icon={[
                            <FaJava size={50} color="red" />,
                            <FaDiscord size={50} color="" />,
                            <SiSqlite size={50} color="00a8e8" />
                        ]}
                        button={<ButtonComponent text="redirecionar" onclick={handleClick} />}
                    />
                </div>
                <div>
                    <BoxContainer
                        text={`clique para fazer download do meu CV`}
                        icon={
                            <FaFilePdf size={40} color="red" />
                        }
                        link="downloads\my_cv.pdf"
                        isDownload={true}
                        button={<ButtonComponent text="download" onclick={handleClick} />}

                    />
                </div>
            </FlexBoxContainer>

            <footer className="footer-container">
                <div className="container-empresa">
                    <video src="logo\T.mp4" autoPlay muted loop></video>
                    <a href="https://www.instagram.com/interdevservices/?theme=dark" target="_blank">
                     <FaInstagram size={50} color="#fff" />interdevservices
                    </a>
                    <h2>Em busca de serviços? clique acima e chama dm</h2>
                </div>
                <div className="container-ig-pessoal">
                    <img src="images\instagramimg.jpg" alt=""/>
                    <a href="https://www.instagram.com/jauafelipe/" target="_blank">
                     <FaInstagram size={50} color="#fff" />jauafelipe
                    </a>
                    <h2>meu instagram para uso pessoal como tambem para contato</h2>
                </div>

                <div className="discord">
                <img src="images\discord.jpg" alt=""/>
                    <a href="https://discord.gg/g3GV48qJNp" target="_blank">
                     <FaDiscord size={50} color="#fff" />meu Discord
                    </a>
                    <h2>meu discord para contatos tambem</h2>
                </div>
            </footer>



        </main>
    )
}