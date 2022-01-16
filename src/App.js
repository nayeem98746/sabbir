import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Information from './Component/Information/Information';
import Footer from './Component/Footer/Footer';
import Blog from './Component/Blog/Blog';
import Projects from './Component/Projects/Projects';


function App() {
  return (
    <div className="App">
        <Router>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main></Main>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/information/:project" element={<Information></Information>} />

        <Route path="/about" element={<About></About>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/footer" element={<Footer></Footer>} />
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
