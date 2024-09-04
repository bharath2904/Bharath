import React from "react";
import "../css/home.css";
import BResume from "../Asset/Bharath_CV.pdf";


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

        <div className="first">
          <div className="container-lg bg-dark-subtle p-5 my-5 rounded phill border border-2">
            <h1 className="text-center text-muted  fw-bolder">
              I'M BHARATHWAJ
            </h1>
            <div className="topic inner-div text-center text-light bg-dark rounded border border-3 p-3 my-5 col-4">
              Full Stack Python Developer
            </div>
            <div className="d-flex justify-content-center gap-3">
              <button className="button1 btn btn-outline-dark btn-transparent">
                <a href={BResume}>My Resume</a>
              </button>

              <button className="button2 btn btn-outline-dark btn-transparent">
                <a href={BResume} download={BResume}>
                  Download CV
                  <svg
                    className="cvdownload"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="20px"
                    width="20px"
                    fill="#000000"
                  >
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default Home
