import React from 'react';
import Header from './components/Header';
import About from './components/About';
import RoleInterests from './components/RoleInterests';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Project';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <RoleInterests />
            <Resume />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
