import "./StartPainel.css"
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import { Link } from "react-router-dom";






export const StartPainel = () => {
    const texts = ["Seja bem vindo!!", "Meu Nome é Jauã Felipe", "Resolvi Desenvolver Esse portifolio", "Para Afins de Estudos e projetos", "Aproveite"];
    const [index, setIndex] = React.useState(0);
    const [fadeIn, setFadeIn] = React.useState(false);

    const onButtonChange = (direction: string): void => {
        setFadeIn(false);
        setTimeout(() => {
            setIndex((prevIndex) => {
                if (direction === 'next' && prevIndex < texts.length - 1) {
                    return prevIndex + 1;
                } else if (direction === 'prev' && prevIndex > 0) {
                    return prevIndex - 1;
                } else {
                    return prevIndex;
                }
            });
            setFadeIn(true);
        }, 500);
    };
    return (
        <main className="main">

            <div className="container-about">
                <AiOutlineUser size={60} />
                <div className="box-1">
                    <div className="text-container">
                        {texts.length > 0 ?
                            <h1 className={fadeIn ? "fade-in" : "fade-out"}>{texts[index]}</h1>
                            : <h1>clique para ser direcionado</h1>
                        }
                    </div>

                    <div className="box-2">
                        {index < texts.length - 1 ?
                            (<div id="buttons-container">
                                <ButtonComponent text="Voltar" onclick={() => onButtonChange('prev')} />
                                <ButtonComponent text="Proximo" onclick={() => onButtonChange('next')} />
                                </div>)
                            : <Link to={"/home"}>
                                <ButtonComponent text="Home" onclick={() => console.log("direcionando")} />
                            </Link>}
                    </div>




                </div>
            </div>
        </main>

    )
}