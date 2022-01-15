import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Main></Main>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;