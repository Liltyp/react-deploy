import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Nav from './components/nav/nav';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Services from './components/services/services';
import './index.css';


const App = () => {
  return (
    <>

       <Header />  
       <Nav />
       <About />
       <Experience />
       <Services />
       <Contact />
       <Footer />
    
    </>
  )
}

export default App