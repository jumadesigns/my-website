import './contact.css';

function Contact() {
    return (  
        <div className='contact-div'>
            <h2 className='contact-title'>Victor Nite</h2>
            <p className='email'>clefnite@hotmail.com</p>
            <p className='contact-title'>Software engineer with a heavy focus on <br></br>
            Front-end engineering and UI/UX design.</p>

            <p className='links'>Other Links</p>
      <div className="logo-div-contact">
        <img src="images/github.png" alt="github" />
        <img src="images/figma.png" alt="figma" />
        <img src="images/linkedin.png" alt="linkedin" />
      </div>

      <div className="footer-div">
        <p>© Copyright 2022. Made with love by Victor Nite</p>
        <p>Download code for this website <b style={{color: "#C778DD"}} href="">here</b></p>
      </div>

        </div>
    );
}

export default Contact;