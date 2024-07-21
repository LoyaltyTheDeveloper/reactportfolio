import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home/Homescreen";
import Navbar from "./Home/Navbar";
import React from "react";
import HeroSection from './Home/HeroSection';
import MySkills from './Home/MySkills';
import AboutMe from './Home/AboutMe';
import MyPortfolio from './Home/MyPortfolio';
import Testimonial from './Home/Testimonials';
import ContactMe from './Home/ContactMe';
import Footer from './Home/Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home/>
        <div>
          <Switch>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
