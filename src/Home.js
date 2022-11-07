import "./index.css"
import { Button } from "reactstrap";
import { ImArrowRight2 } from "react-icons/im";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiFigma } from "react-icons/fi";
import React from 'react';

import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-div">

      <div className="heading-div">
        <p>
          I love to <span>create designs</span> and <br></br>
          <span>solve logic so you don't</span>
        </p>
      </div>
      <div className="header-subtitle">
        <p>
          Hi! My name is Victor Nite. I am <b>Software Engineer</b> with a heavy
          focus <br></br>on <b>Front-end engineering</b> and a strong background
          in <b>Ui/UX design</b>.
        </p>
      </div>
      <div className="btn">
        
        <Link to='/contact'>
          <Button>Contact me!!</Button>
        </Link>
       
        
      </div>
      
      <div className="logo-div">
        <a href="https://github.com/jumadesigns">
        <BsGithub className="home-icons" href="https://github.com/jumadesigns"/>
        </a>
        <a href="https://shorturl.at/impu5">
        <FiFigma className="home-icons"/>
        </a>
        <a href="https://www.linkedin.com/in/vnite/">
        <BsLinkedin className="home-icons"/>
        </a>                                                        
      </div>

      <div className="hero-section-div">
        <div className="about-me-div">
          <div className="card-1">
          
            <p className="card-title">
              <span>#</span>about-me
              <img src="images/line 7.png" alt="line" />
            </p>
            <p
              style={{
                margin: "10px",
                color: "azure",
                width: "32rem",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Hello, i’m Victor! I’m a front-end developer based in Boston, MA.
              I can create designs from scratch to protoype and develop that
              into useable code.
              <p>
                The ability to create an idea as design and develop that into
                code is what makes me differnt from a traditional who only
                develops or implement code...
              </p>
            </p>
            <div className="btn-2">
              <Link to="./about-me">
              <Button>
                Read More <ImArrowRight2 />
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="img-div">
          <img
            src="images/vector.png"
            alt="vector"
            style={{ height: "320px", width: "320px" }}
          />
        </div>
      </div>




      <div className="hero-section2-div">
        <div className="about-me-div">
          <div className="card-1">
            {" "}
            <p className="card-title">
              <span>#</span>skills
              <img src="images/line 7.png" alt="line" />
            </p>
          </div>
        </div>

        <div className="skills-div">
            <table>
                <tr>
                  <th>Languages</th>
                  <th>Scripts</th>
                  <th>Databases</th>
                  <th>Frameworks</th>
                </tr>
                <tr>
                  <td>Typescript</td>
                  <td>HTML5</td>
                  <td>MongoDB</td>
                  <td>React</td>
                </tr>
                <tr>
                  <td>Javascript</td>
                  <td>CSS</td>
                  <td></td>
                  <td>NodeJS</td>
                  
                </tr>
                <tr>
                  <td>NodeJS</td>
                  <td>SCSS</td>
                  <td></td>
                  <td></td>
                  
                </tr>
                <tr>
                  <td>Java</td>
                  <td>TailWind CSS</td>
                  <td></td>
                  <td></td>
                </tr>      
              </table>
        </div>
      </div>


      <div className="footer-div">
        <p>© Copyright 2022. Made with love by Victor Nite</p>
        <p>Download code for this website <b style={{color: "#C778DD"}} href="" >here</b></p>
      </div>


    </div>
  );
}

export default Home;
