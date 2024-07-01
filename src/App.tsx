import React from 'react';
import './App.css'
import { AboutMeStart } from './components/AboutMeStart/AboutMeStart'
import { GridContainer } from './components/grid-container/GridContainer';
import { BoxContainer } from './components/box-container/BoxContainer';
import { FaGithub,FaJava } from "react-icons/fa";
import { SiSpringboot } from 'react-icons/si';

function App() {



  return (
    <>
      <AboutMeStart

      />
    <section className='projetos'>
          <h2 style={{color:"#fff"}}>Area De Projetos</h2>
        <GridContainer>
          <div>
            <BoxContainer
            icon={
              <FaGithub size={50} color='black' />
            }
            text='Atuei no desenvolvimento de uma api para um projeto de cafeteria'  link='https://github.com/dopeeycode/desafio_coffeeDelivery' />
          </div>
          <div>
            <BoxContainer
            icon={
             [<FaJava size={50} color='red' />
              ,<SiSpringboot size={50} color='green'/>]
            }
            text='para afins de estudo desenvolvi uma api simples usando java+springboot' 
            link='https://github.com/jauafelipe/api-java-spring-postgreesql' />
          </div>
          <div>
            <BoxContainer text='ola mundo'  link=''/>
          </div>
        
        </GridContainer> 
    </section>





    </>
  )
}

export default App
