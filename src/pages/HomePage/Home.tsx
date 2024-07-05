import "./Home.css"
import { BoxContainer } from "../../components/box-container/BoxContainer"
import { FlexBoxContainer } from "../../components/grid-container/FlexBoxContainer"
import { GrGraphQl } from "react-icons/gr";
import { AiOutlineDotNet } from "react-icons/ai";
import { FcMultipleDevices } from "react-icons/fc";
import { FaDiscord, FaFilePdf, FaGithub, FaJava, FaLinkedin, FaReact } from "react-icons/fa";
import { SiSqlite, SiTypescript } from "react-icons/si";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import { ProgressBar } from "../../components/motion-progress-bar/Progress-bar";
import LayoutComponent from "../../components/motion-layout/LayoutComponentTec";
import { motion } from "framer-motion"







export const HomePage = () => {
    return (
        <main >
            <ProgressBar />
            <div className="container-home">
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
                        
                        >Prazer em conhecê-lo! Sou estudante de Análise e Desenvolvimento de Sistemas, com especialização em tecnologias back-end, incluindo ASP.NET, Node.js, C#, MySQL e SQL Server. Além disso, atuo no desenvolvimento de projetos nativos utilizando Flutter. Abaixo, você poderá conhecer melhor alguns dos meus projetos.</motion.h3>
                        <motion.div 
                        
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{delay:5}}
                        className="layout" >
                            <LayoutComponent />
                        </motion.div>
                    </motion.div>

                </motion.div>

            </div>


            <div className="apresentacao">
                <div className="container-apresentaçao">
                    <div className="icon-git">
                        <FaGithub size={40} color="000" />

                    </div>
                    <motion.div
                        initial={{ scale: 0.8, rotateX: 70, opacity: 1 }}
                        whileInView={{ scale: 1, rotateX: 0 }}
                        transition={{ type: "spring" }}
                        className="box-img">
                        <img src="images\profile-git.png" alt="" />
                    </motion.div>
                </div>
            </div>



            <FlexBoxContainer>
                <div>
                    <BoxContainer
                        text="Desenvolvi uma API utilizando GraphQL com ASP.NET, implementando autenticação de usuário por meio de tokens JWT."
                        icon={[
                            <GrGraphQl size={50} color="#8338ec" />
                            , <AiOutlineDotNet size={50} />]}
                        button={<ButtonComponent text="redirecionar" onclick={() => console.log()} />}
                    />
                </div>
                <div>
                    <BoxContainer text="Desenvolvimento de websites responsivos com foco na experiência do usuário, utilizando React e TypeScript."
                        icon={
                            [<FcMultipleDevices size={50} />,
                            <FaReact size={50} color="#00b4d8" />
                                , <SiTypescript size={50} color="#0d47a1" />
                            ]}
                        button={<ButtonComponent text="redirecionar" onclick={() => console.log()} />}

                    />
                </div>
                <div>
                    <BoxContainer text="Desenvolvimento de bots simples para Discord utilizando Java e SQLite."

                        icon={[
                            <FaJava size={50} color="red" />,
                            <FaDiscord size={50} color="" />,
                            <SiSqlite size={50} color="00a8e8" />
                        ]}
                        button={<ButtonComponent text="redirecionar" onclick={() => console.log()} />}
                    />
                </div>
                <div>
                    <BoxContainer
                        link="https://www.linkedin.com/in/jau%C3%A3-felipe-bb2b322ab/"
                        text="meu linkedin"
                        icon={[
                            <FaLinkedin size={40} color="00b4d8" />
                        ]}
                        button={<ButtonComponent text="redirecionar" onclick={() => console.log()} />}



                    />
                </div>
                <div>
                    <BoxContainer
                        link="https://github.com/jauafelipe"
                        text="meu repositorio"
                        icon={[
                            <FaGithub size={40} color="000" />
                        ]}
                        button={<ButtonComponent text="redirecionar" onclick={() => console.log()} />}
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
                        button={<ButtonComponent text="download" onclick={() => console.log()} />}

                    />
                </div>
            </FlexBoxContainer>
        </main>
    )
}