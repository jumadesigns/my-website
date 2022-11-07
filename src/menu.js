import "./index.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <Router>
      <div className="menu-div">
        <ul>
          <li>
            <Link to="/">
              <span>#</span>home
            </Link>
          </li>
          <li>
            <Link to="/about-me">
              <span>#</span>about-me
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span>#</span>projects
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>#</span>contact
            </Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/about-me" element={<AboutMe />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Menu;
