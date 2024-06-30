import React from 'react';
import './App.css'
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
      </GridContainer>
    </section>





    </>
  )
}

export default App
