import "./index.css";
import "./AboutMe.css";
import React from "react";

function AboutMe() {
  return (
    <div className="main-div">
      <div className="about-me-div2">
        <p className="card-title">
          <span>#</span>about-me
        </p>
        <p
          style={{
            margin: "10px",
            color: "azure",
            width: "45rem",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          Hello, i’m Victor! I’m a front-end developer based in Boston, MA. I
          can create designs from scratch to protoype and develop that into
          useable code. <br></br>
          <p>
            The ability to create an idea as design and develop that into code
            is what makes me differnt from a traditional front-end developer who
            only develops or implement code.
          </p>
          I have helped various clients to establish their presence online. I am
          highly proficient in developing ideas and turning them into logic. I
          always strive to learn about the newest technologies and frameworks.
        </p>
      </div>

      <div className="exp-sec">
        <p className="section-1-div">
          <span>#</span>my-experiences
        </p>

        <div className="div-2">
          <div>
            <p style={{ marginBottom: "35px" }}>
              <b style={{ color: "#C778DD" }}>Owl Labs</b>
              <br></br>
              <span id="subtitle">
                Front-end Enginner + UI/UX Designer<br></br>
              </span>
            </p>

            <p style={{ marginBottom: "35px" }}>
              <b>ShopFabulus</b>
              <br></br>
              <span id="subtitle">
                Front-end Enginner + Product Designer<br></br>
              </span>
            </p>

            <p style={{ marginBottom: "35px" }}>
              <b>Staples Connect</b>
              <br></br>
              <span id="subtitle">
                Front-end Enginner + Development Specialist<br></br>
              </span>
            </p>

            <p style={{ marginBottom: "35px" }}>
              <b>Accountivity Outsourcing</b>
              <br></br>
              <span id="subtitle">
                Fullstack Enginner + UI/UX Designer<br></br>
              </span>
            </p>

            <p style={{ marginBottom: "35px" }}>
              <b>CCP Shipping</b>
              <br></br>
              <span id="subtitle">
                Front-end Enginner + Product Designer<br></br>
              </span>
            </p>
          </div>

          <div>
            <p style={{ marginBottom: "35px" }}>
              <b style={{ color: "#C778DD" }}>June 2021 - Present</b>
              <br></br>
              <span id="subtitle">
                Full time<br></br>
              </span>
            </p>

            <p style={{ marginBottom: "35px" }}>
              <b>October 2017 - June 2021</b>
              <br></br>
              <span id="subtitle">
                Full time<br></br>
              </span>
            </p>

            <p style={{ marginBottom: "35px" }}>
              <b>Feburary 2019 - July 2021</b>
              <br></br>
              <span id="subtitle">
                Short term contract<br></br>
              </span>
            </p>

            <p style={{ marginBottom: "35px" }}>
              <b>June 2020 - December 2020</b>
              <br></br>
              <span id="subtitle">
                Short term contractr<br></br>
              </span>
            </p>

            <p style={{ marginBottom: "35px" }}>
              <b>March 2016 - March 2017</b>
              <br></br>
              <span id="subtitle">
                Contract<br></br>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="div-3">
        <p className="section-1-div">
          <span>#</span>my-fun-facts
        </p>

        <p>
          I am an <b>Audio engineer</b>, <b>classical guitarist</b>,{" "}
          <b>music producer</b> & a <b>performer</b>
        </p>

        <p>
          I am a <b>Graphic artist</b> and can draw still images ubder 10 mins
        </p>

        <p>
          I love to take <b>Road trips</b>
        </p>
      </div>

      <div className="footer-div">
        <p>© Copyright 2022. Made with love by Victor Nite</p>
        <p>
          Download code for this website{" "}
          <b style={{ color: "#C778DD" }} href="">
            here
          </b>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
