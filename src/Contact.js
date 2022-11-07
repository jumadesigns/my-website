import "./contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";

function Contact() {
  return (
    <div className="contact-div">
      <h2 className="contact-title">Victor Nite</h2>
      <p className="email">clefnite@hotmail.com</p>
      <p className="contact-title">
        Software engineer with a heavy focus on <br></br>
        Front-end engineering and UI/UX design.
      </p>

      <p className="links">Other Links</p>
      <div className="logo-div-contact">
        <div className="logo-div">
          <a href="https://github.com/jumadesigns">
            <BsGithub
              className="home-icons"
              href="https://github.com/jumadesigns"
            />
          </a>
          <a href="https://shorturl.at/impu5">
            <FiFigma className="home-icons" />
          </a>
          <a href="https://www.linkedin.com/in/vnite/">
            <BsLinkedin className="home-icons" />
          </a>
        </div>
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

export default Contact;
