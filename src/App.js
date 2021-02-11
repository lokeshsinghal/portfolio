import React from 'react';
import './App.css';
import Nav from './Components/Navbar.js';
import About from './Components/About.js';
import Project from './Components/Project.js';
import HeaderComponent from './Components/Header';
import EducationComponent from './Components/Education';
import SkillsComponent from './Components/Skills';
import WorkExpComponent from './Components/WorkExp';
import ContactComponent from './Components/Contact';
import FooterComponent from './Components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <HeaderComponent/>
      <About />
      <WorkExpComponent />
      <EducationComponent />
      <SkillsComponent />
      <Project />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
