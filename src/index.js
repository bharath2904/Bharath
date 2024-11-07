import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/js/home.js';
import Footer from './components/js/footer.js';
import Contact from './components/js/contact.js';
import Certificate from './components/js/certificate.js';
import Project from './components/js/project.js';
import About from './components/js/about.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <About/>
    <Project/>
    <Certificate/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);


