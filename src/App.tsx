import React from 'react';
import './App.css'
import { BoxContainer } from './components/box-container/BoxContainer'
import { Header } from './components/header/Header'
import { RiScrollToBottomLine } from 'react-icons/ri';
import {GridContainer } from './components/grid-container/GridContainer';

function App() {

  const nextSectionRef = React.useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Header
        scrollInto={scrollToNextSection}
        icon={
          < RiScrollToBottomLine
            size={40}
          />}
      />
    <section className='about-me'>
    <GridContainer refProp={nextSectionRef}>
        <div>
          <BoxContainer
            alt="image"
            styleProps={{
              width:"100%",
              height:200
            }}
            imageURL='/images/api.png'
            text='Desenvolvimento de api´s' />
        </div>
        <div>
          <BoxContainer
            alt="image"
            imageURL='/images/soluçoes.jpg'
            text='layouts e responsivdade com experiencia de usuario'
            styleProps={{
              width:"100%",
              height:173.3
            }} />
        </div>
        <div>
          <BoxContainer
            alt="image"
            imageURL="/images/bug.jpg"
            text='---'
            styleProps={{
              width:"100%",
              height:200
            }} />
        </div>
        <div>
          <BoxContainer
            alt="image"
            imageURL="/images/bug.jpg"
            text='---'
            styleProps={{
              width:"100%",
              height:200
            }} />
        </div>
        <div>
          <BoxContainer
            alt="image"
            imageURL="/images/bug.jpg"
            text='---'
            styleProps={{
              width:"100%",
              height:200
            }} />
        </div>
        <div>
          <BoxContainer
            alt="image"
            imageURL="/images/bug.jpg"
            text='---'
            styleProps={{
              width:"100%",
              height:200
            }} />
        </div>
      </GridContainer>
    </section>





    </>
  )
}

export default App
