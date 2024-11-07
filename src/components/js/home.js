import React from "react";
import "../css/home.css";
import BResume from "../Asset/Bharath_CV.pdf";
import profile1 from "../images/profile_phot0.jpg";

function Home() {
  return (
    <div>
      <div></div>
      <section id="home">
        <nav className="navbar navbar-expand-md bg-dark">
          <div>
            <a href="#home" className="navbar-brand">
              <span className="fw-bold text-light mx-5 h2">Portfolio.</span>
            </a>
          </div>
          <button
            className="navbar-toggler mx-3 bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto p-3 my-2">
              <li className="nav-item">
                <a className="nav-link me-5 text-light" href="#home">
                  Home
                </a>
              </li>
              <li className="line"></li>
              <li className="nav-item">
                <a className="nav-link me-5 text-light" href="#about">
                  About
                </a>
              </li>
              <li className="line"></li>
              <li className="nav-item">
                <a className="nav-link me-5 text-light" href="#project">
                  Projects
                </a>
              </li>
              <li className="line"></li>
              <li className="nav-item">
                <a className="nav-link me-5 text-light" href="#certificate">
                  Certifications
                </a>
              </li>
              <li className="line"></li>
              <li className="nav-item">
                <a className="nav-link me-5 text-light" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="first my-5  ">
          <div className="container-lg bg-dark-subtle p-5 my-5 rounded phill border border-2">
            <div className="text-center mb-4">
              <img
                className="profile rounded-circle"
                src={profile1}
                alt="profile"
                width={200}
              />
              <h1 className="text-muted fw-bolder mt-3">I'M BHARATHWAJ</h1>
            </div>

            <div className="topic inner-div text-center text-dark p-3 mb-4">
              <h2>Full Stack Python Developer</h2>
              <h3 className="field text-muted">Fresher</h3>
            </div>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button className="button1 btn btn-outline-dark btn-transparent">
                <a href={BResume} className="text-decoration-none text-light">
                  My Resume
                </a>
              </button>

          
              <button className="button2 btn btn-outline-dark btn-transparent">
                <a
                  href={BResume}
                  download={BResume}
                  className="text-decoration-none text-light"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
