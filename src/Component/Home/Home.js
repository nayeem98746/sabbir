import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Main></Main>
            <Projects></Projects>
            <About></About>
            {/* <Contact></Contact> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;