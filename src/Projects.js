import "./Projects.css";
import { Button } from "reactstrap";

function Projects() {
  return (
    <div className="projct-div">
      <div className="projct-title">
        <p className="section-1-div">
          <span>#</span>my-projects
        </p>
        <p>This page features a list of all my personal projects</p>
      </div>

      <div className="list-div">
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/temp.png" />
          <h2 className="frame-text">Tempereature Control</h2>
          <p className="frame-text2">
          Tech Stack:
            <h4>REACT, CSS, NETLIFY</h4>
          </p>

          <div className="crd-btn">
            <Button
              id="btn22"
              href="https://temperature-controller-app.netlify.app"
              style={{
                margin: "0rem",
              }}
            >
              View Live
            </Button>
            <Button
              id="btn22"
              href="https://github.com/jumadesigns/temp-controller"
              style={{
                marginTop: "0rem",
                marginLeft: "1.7rem",
                backgroundColor: "#301438",
              }}
            >
              View Code
            </Button>
          </div>
        </div>

        {/* MBTA LIST */}
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/mbta.png" />
          <h2 className="frame-text">MBTA Train Finder</h2>
          <p className="frame-text2">
          Tech Stack:
            <h4>REACT, CSS, NETLIFY</h4>
          </p>

          <div className="crd-btn">
            <Button
              id="btn22"
              href="https://github.com/jumadesigns/mbta-train-finder"
              style={{
                margin: "0rem",
                backgroundColor: "#301438",
              }}
            >
              View Code
            </Button>
            {/* <Button
                id="btn22"
                href=""
                style={{ marginTop: "0rem", marginLeft: "1.7rem" }}
                >
                View Code
                </Button> */}
          </div>
        </div>

        {/* CIRCLE MENU  */}
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/cirmenu.png" />
          <h2 className="frame-text">Circle Menu</h2>
          <p className="frame-text2">
          Tech Stack:
            <h4>REACT, CSS, NETLIFY</h4>
          </p>

          <div className="crd-btn">
            <Button
              id="btn22"
              href="https://5csn1w.csb.app/"
              style={{
                margin: "0rem",
              }}
            >
              View Live
            </Button>
            <Button
              id="btn22"
              href="https://github.com/jumadesigns/circular-menu"
              style={{
                marginTop: "0rem",
                marginLeft: "1.7rem",
                backgroundColor: "#301438",
              }}
            >
              View Code
            </Button>
          </div>
        </div>

        {/* MARS */}
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/mars.png" />
          <h2 className="frame-text">Photos from Mars</h2>
          <p className="frame-text2">
          Tech Stack:
            <h4>JAVASCRIPT, CSS, NETLIFY</h4>
          </p>

          <div className="crd-btn">
            <Button
              id="btn22"
              href="https://mars-p-rover-pictures.netlify.app"
              style={{
                margin: "0rem",
              }}
            >
              View Live
            </Button>
            <Button
              id="btn22"
              href="https://github.com/jumadesigns/nasa-reseverance-api-project"
              style={{
                marginTop: "0rem",
                marginLeft: "1.7rem",
                backgroundColor: "#301438",
              }}
            >
              View Code
            </Button>
          </div>
        </div>

        {/*SEARCHBAR */}
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/search.png" />
          <h2 className="frame-text">Search Bar</h2>
          <p className="frame-text2">
          Tech Stack:
            <h4>REACT, CSS, NETLIFY</h4>
          </p>

          <div className="crd-btn">
            <Button
              id="btn22"
              href=""
              style={{
                margin: "0rem",
              }}
            >
              View Live
            </Button>
            <Button
              id="btn22"
              href="https://github.com/jumadesigns/searchbar"
              style={{
                marginTop: "0rem",
                marginLeft: "1.7rem",
                backgroundColor: "#301438",
              }}
            >
              View Code
            </Button>
          </div>
        </div>

        {/* CALCULATOR */}
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/calc.png" />
          <h2 className="frame-text">Tips Calculator</h2>
          <p className="frame-text2">
          Tech Stack:
            <h4>JAVASCRIPT, CSS, NETLIFY</h4>
          </p>

          <div className="crd-btn">
            <Button
              id="btn22"
              href="https://food-tip-calculator.netlify.app"
              style={{
                margin: "0rem",
              }}
            >
              View Live
            </Button>
            {/*  <Button
                id="btn22"
                href=""
                style={{ marginTop: "0rem", marginLeft: "1.7rem" }}
                >
                View Code
                </Button> */}
          </div>
        </div>

       

        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/website.png" style={{border: "2px  solid azure"}} />
          <h2 className="frame-text">This Website</h2>
          <p className="frame-text2">
            Tech Stack:
            <h4>REACT CSS NETLIFY</h4>
          </p>

          <div className="crd-btn">
            <Button
              id="btn22"
              href=""
              style={{
                margin: "0rem",
              }}
            >
              View Code
            </Button>
            {/*  <Button
                id="btn22"
                href=""
                style={{ marginTop: "0rem", marginLeft: "1.7rem" }}
                >
                View Code
                </Button> */}
          </div>
        </div>

    

         {/* UI DESIGNS */}
        <div>
        <div className="ux-div">
        <p className="section-1-div">
          <span>#</span>my-ui-designs
        </p>
        <p style={{ color: "azure" }}>
          This page features a list of some of my personal UI designs
        </p>
      </div>
        </div>
        
        {/* BJ UI */}
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/bj.png" />
          <h2 className="frame-text">Food ordering App</h2>
          <p className="frame-text2">
            Designed with
            <h4>FIGMA</h4>
          </p>
          <div className="crd-btn">
            <Button
              id="btn22"
              href="https://www.figma.com/proto/k7y1ySEf3mK1bTX5uCYxPN/%2FBJ-Web-App?page-id=0%3A1&node-id=71%3A86&viewport=448%2C134%2C0.16&scaling=min-zoom"
              style={{
                margin: "0rem",
              }}
            >
              View Design
            </Button>
            {/*  <Button
                id="btn22"
                href=""
                style={{ marginTop: "0rem", marginLeft: "1.7rem" }}
                >
                View Code
                </Button> */}
          </div>
        </div>
        {/* LANDING PAGE */}
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/landing.png" />
          <h2 className="frame-text">Landing Page Desp</h2>
          <p className="frame-text2">
            Designed with
            <h4>FIGMA</h4>
          </p>

          <div className="crd-btn">
            <Button
              id="btn22"
              href="https://www.figma.com/proto/NzrK0JiknxOfzUw5oLmjHe/BJ--Landing-Page?page-id=303%3A7379&node-id=764%3A45&viewport=-193%2C352%2C0.27&scaling=scale-down"
              style={{
                margin: "0rem",
              }}
            >
              View Design
            </Button>
            {/*  <Button
                id="btn22"
                href=""
                style={{ marginTop: "0rem", marginLeft: "1.7rem" }}
                >
                View Code
                </Button> */}
          </div>
        </div>

        {/* LANDING PAGE */}
        <div className="frame-1">
          <img className="frame-pic" alt="Sample" src="images/merch.png" />
          <h2 className="frame-text">Merchant Website</h2>
          <p className="frame-text2">
            Designed with
            <h4>FIGMA</h4>
          </p>
          <div className="crd-btn">
            <Button
              id="btn22"
              href="https://www.figma.com/proto/ezc3zjETfJjlMttLLksS9h/BJ-Partners-Website?page-id=289%3A348&node-id=979%3A4383&viewport=-2910%2C-1026%2C0.11&scaling=scale-down-width"
              style={{
                margin: "0rem",
              }}
            >
              View Design
            </Button>
            {/*  <Button
                id="btn22"
                href=""
                style={{ marginTop: "0rem", marginLeft: "1.7rem" }}
                >
                View Code
                </Button> */}
          </div>
        </div>


      </div>


     <div className="footer-div">
        <p>© Copyright 2022. Made with love by Victor Nite</p>
        <p>Download code for this website <b style={{color: "#C778DD"}} href="">here</b></p>
      </div>
      
    </div>
  );
}

export default Projects;
