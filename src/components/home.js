import React from "react";
import "../components/home.css";
import BResume from "./Asset/Bharath_CV.pdf";
import joseph from "../images/clglogo.png";

function Home() {
  return (
    <div>
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
                <a className="nav-link me-5 text-light" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="firs">
          <div className="container-lg bg-dark-subtle p-5 my-5 rounded phill border border-2">
            <h1 className="text-center text-muted  fw-bolder">
              I'M BHARATHWAJ
            </h1>
            <div className="inner-div text-center text-light bg-dark rounded border border-3 p-3 my-5 col-4">
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

      {/* The card is start and about section also start */}
      <section id="about">
        <div className="container-lg bg-dark-subtle rounded border border-2">
          <h1 className="card-title text-center py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              height="50px"
              width="50px"
              fill="#000000"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>{" "}
            ABOUT US
          </h1>
          <div className="row my-5 align-items-center justify-content-center">
            <div className="col-12 md-8">
              <div className="card pb-3">
                <div className="card-body text-center border-0">
                  <div className="d-flex flex-wrap justify-content-center">
                    <div style={{ textAlign: "justify" }}>
                      <p className="lead text-muted">
                        <span className="text-dark fw-bold">
                          Hi I'm Bharathwaj
                        </span>{" "}
                        a passionate Full-Stack Developer with expertise in
                        building dynamic, user-centric web applications. My
                        skill set spans both front-end and back-end
                        technologies, allowing me to create seamless and
                        responsive user experiences. On the front end, I have
                        strong in HTML, CSS, and JavaScript frameworks like
                        React Js.
                      </p>
                    </div>

                    <h4 className="mt-5 me-5">MY SKILLS</h4>
                    <div className="skills d-flex flex-wrap flex-row align-items-center gap-5 mt-5">
                      {/* HTML */}
                      <div className="p-5 bg-light custom">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          height="40px"
                          width="40px"
                          fill="#000000"
                        >
                          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                        </svg>
                      </div>

                      {/* CSS */}
                      <div className="p-5 bg-light custom ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="40px"
                          width="40px"
                          fill="#000000"
                        >
                          <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" />
                        </svg>
                      </div>

                      {/* Js */}
                      <div className="p-5 bg-light custom">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          height="40px"
                          width="40px"
                          fill="#000000"
                        >
                          <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                        </svg>
                      </div>

                      {/* Python */}
                      <div className="p-5 bg-light custom">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          height="40px"
                          width="40px"
                          fill="#000000"
                        >
                          <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                        </svg>
                      </div>

                      {/* SQL */}
                      <div className="p-5 bg-light  custom">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 -960 960 960"
                          width="40px"
                          fill="#000000"
                        >
                          <path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z" />
                        </svg>
                      </div>

                      {/* Git */}
                      <div className="p-5 bg-light custom">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          height="40px"
                          width="40px"
                          fill="#000000"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Acoordion Start */}
        <div>
          <h4 className="mt-5 ms-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              height="50px"
              width="50px"
              fill="#000000"
            >
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>{" "}
            Education
          </h4>
        </div>
        <div className="education d-flex">
          <div className="clglogo col-lg-4 text-center mt-4 mt-lg-0">
            <img className="clglogo" src={joseph} alt="collegelogo"></img>
          </div>
          <div className="box0">
            <div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      BACHELOR DEGREE OF COMPUTER APPLICATION
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="d-flex flex-column ">
                        <p>
                          <strong>Institution:</strong> St. Joseph's
                          College(Autonomous)
                        </p>
                        <p>
                          <strong>Degree:</strong> Bachelor of Computer
                          Applications
                        </p>
                        <p>
                          <strong>Years:</strong> 2021 - 2024
                        </p>
                        <p>
                          <strong>City:</strong> Tiruchirappalli
                        </p>
                        <p>
                          <strong>Percentage:</strong> 69.8%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Higher Secondary Education
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="d-flex flex-column">
                        <p>
                          <strong>Institution:</strong> Amalraj Matric Higher
                          Secondary School.
                        </p>
                        <p>
                          <strong>Degree:</strong> Higher Secondary Certificate
                        </p>
                        <p>
                          <strong>Years:</strong> 2020 - 2021
                        </p>
                        <p>
                          <strong>City:</strong> Thiruvaiyaru
                        </p>
                        <p>
                          <strong>Percentage:</strong> 80%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      class="accordion-button collapsed bg-dark-subtle"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Secondary School Education
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="d-flex flex-column">
                        <p>
                          <strong>Institution:</strong> Amalraj Matric Higher
                          Secondary School
                        </p>
                        <p>
                          <strong>Degree:</strong> Secondary School Leaving
                          Certificate
                        </p>
                        <p>
                          <strong>Years:</strong> 2018 - 2019
                        </p>
                        <p>
                          <strong>City:</strong> Thiruvaiyaru
                        </p>
                        <p>
                          <strong>Percentage:</strong> 72.8%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Accordion End */}

        {/* Work experiences is start */}
        <div>
          <div>
            <h4 className="mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="50px"
                width="50px"
                fill="#000000"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>{" "}
              Work Experience
            </h4>
          </div>
          <div className="box bg-dark-subtle border rounded pill">
            <h4 className="h5">Junior Web Developer - Intern</h4>
            <h5 className="h6 fst-italic">
              Aerial Root Infotech, Tiruchirappalli | May 2023 - June 2023
            </h5>
            <p className="ms-5" style={{ textAlign: "justify" }}>
              During my internship at Aerial Root Infotech, I contributed to
              website development projects by applying HTML, CSS, and JavaScript
              to create responsive and user-friendly designs. I was responsible
              for redesigning the user interface of an existing web application,
              enhancing its usability and visual appeal. This role allowed me to
              develop practical skills in web design and client-focused
              development.
            </p>
          </div>
        </div>
        {/* About section over */}
      </section>

      <section id="project">
        {/* Project section start */}
        <div>
            <h4 className="box2 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                height="50px"
                width="50px"
                fill="#000000"
              >
                <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>{" "}
              Projects
            </h4>
          </div>
        
          <div className="box1 bg-dark-subtle border rounded pill">
            <div>
              <h5>Food Restaurant - Python</h5>
            </div>
            <p className="ms-5">
              This Python project implements an interactive ordering system for
              a restaurant specializing in burgers and drinks. Users are
              welcomed with a friendly message and prompted to choose between
              vegetarian or non-vegetarian burger options. Based on their
              selection, they can specify their preferences from a predefined
              menu, facilitating a personalized ordering experience.
            </p>
            <button className="btn btn-outline-light btn-transparent ms-5">
              <a
                className="text-decoration-none text-success"
                href="https://github.com/bharath2904/Restaurant/blob/main/Restaurant.py"
              >
                Source Code
              </a>
            </button>
            <div>
              <h5 className="mt-5">Food Restaurant - SQL</h5>
            </div>
            <p className="ms-5">
              Developed a SQL-based database system to streamline restaurant
              operations, focusing on burger and drink menu management. The
              project involves creating and populating tables for burgers and
              drinks with predefined options using INSERT statements. This setup
              ensures a ready-to-use menu for customers and supports efficient
              order management. The database structure is designed to facilitate
              smooth operations by providing a well-organized menu and effective
              management of customer orders.
            </p>
            <button className="btn btn-outline-light btn-transparent ms-5">
              <a
                className="text-decoration-none text-success"
                href="https://github.com/bharath2904/Rest aurant/blob/main/Burger_drink.sql"
              >
                Source Code
              </a>
            </button>
            <div>
              <h5 className="mt-5">Portfolio</h5>
            </div>
            <p className="ms-5">
              The portfolio website is built using HTML, CSS, JavaScript, and
              React.js. It provides a comprehensive showcase of your work and
              skills. HTML forms the foundational structure, creating sections
              such as a home page, projects, an about me section, and a contact
              form. CSS styles the site to ensure it is visually appealing,
              incorporating custom design elements, responsive layouts, and
              animations for a modern look. JavaScript adds interactivity,
              enabling dynamic content updates, form validations, and various
              interactive features. The site includes a dynamic portfolio of
              projects, an informative about me section, and a functional
              contact form, all designed to be accessible and attractive on both
              desktop and mobile devices. The website is deployed on a web
              hosting service like GitHub Pages or Netlify for public access and
              easy updates.
            </p>
            <button className="btn btn-outline-light btn-transparent ms-5">
              <a
                className="text-decoration-none text-success"
                href="https://github.com/bharath2904/Portfolio.git"
              >
                Source Code
              </a>
            </button>
          </div>
       
        {/* Project section is end */}
      </section>

      <section id="contact" className="py-4">
        <div className="container-lg">
          <h4 className="text-start mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="50px"
              width="50px"
              fill="#000000"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144l256 0c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4 384 336c0 17.7-14.3 32-32 32L96 368c-17.7 0-32-14.3-32-32l0-125.6 136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z" />
            </svg>{" "}
            Contact
          </h4>
          <div className="box2 bg-dark-subtle p-3 border rounded pill ">
            <div className="text-center mb-4">
              <h5>Get In Touch</h5>
            </div>
            <div className="row d-flex justify-content-evenly">
              <div className="col-md-6 col-lg-4  mb-4 mb-md-0">
                <h4 className="mb-3">Let's Work Together</h4>
                <p className="mb-4" style={{ textAlign: "justify" }}>
                  "Let’s work together to bring your vision to life. With my
                  expertise and your goals, we can create innovative solutions
                  that drive success. I’m committed to delivering high-quality
                  results and exceeding expectations. By collaborating closely,
                  we’ll ensure that every aspect of your project is handled with
                  care and precision. Together, we can achieve remarkable
                  outcomes and elevate your business to new heights."
                </p>
              </div>

              <div className="col-md-6 col-lg-4  mt-5">
                <h4 className="h5 mb-2">E M A I L</h4>
                <a
                  href="mailto:bharathwaj2904@gmail.com"
                  className="contacts h6 mb-4"
                >
                  <svg
                    className="mail"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="25px"
                    width="25px"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>{" "}
                  bharathwaj2904@gmail.com
                </a>
                <h4 className="h5 mt-5">P H O N E</h4>
                <a href="tel:+919363113960" className="contacts h6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="25px"
                    width="25px"
                    fill="#000000"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>{" "}
                  +91 9363113960
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer bg-dark text-light" id="footer">
        <div className="container py-5 ">
          <div className="row">
            <div className="abt col-12 col-md-6 mb-4 mb-md-0">
              <h3>About Bharathwaj</h3>
              <p className="mt-3">
                Hello, I'm Bharathwaj from Thanjavur. I recently graduated with
                a BCA from St. Joseph's College, Trichy, and I'm currently
                training as a Full Stack Developer at Besant Technologies. I
                have a strong foundation in front-end development with HTML,
                CSS, and JavaScript, and I also possess basic proficiency in
                Python and Object-Oriented Programming concepts. During my
                internship at Trichy Aerial Root Infotech, I gained practical
                experience in junior web development with HTML, CSS, and
                JavaScript, as well as SQL database management. Additionally, I
                developed a Python project that simulates an interactive
                ordering system for a restaurant, which is available on my
                GitHub. My key skills include HTML, CSS, JavaScript, SQL,
                PostgreSQL, Python, and Git.
              </p>
            </div>
            <div className="site col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
              <h3>Site Links</h3>
              <a className="mt-2" href="#home">
                Home
              </a>
              <a className=" mt-2" href="#about">
                About
              </a>
              <a className=" mt-2" href="#project">
                Projects
              </a>
              <a className=" mt-2" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mt-5">
            <div className="d-flex mb-3">
              <a
                className="text-light mx-2"
                href="https://www.linkedin.com/in/bharathwaj08/"
              >
                <svg
                  className="linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height="40px"
                  width="40px"
                  fill="#ffffff"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a
                className="text-light mx-2"
                href="https://github.com/bharath2904/"
              >
                <svg
                  className="github"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  height="40px"
                  width="40px"
                  fill="#ffffff"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a
                className="text-light mx-2"
                href="https://x.com/bharath33155241"
              >
                <svg
                  className="twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="40px"
                  width="40px"
                  fill="#ffffff"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </a>
            </div>
            <div className="copy text-center mb-3">
              © Copyright Bharathwaj 2024
              <br />
              Design by Bharathwaj Distribution By Git-Hub
            </div>
            <div className="arrow mt-3">
              <a href="#home">
                <svg
                  className="scrollup"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="80px"
                  width="80px"
                  fill="#ffffff"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM151.2 217.4c-4.6 4.2-7.2 10.1-7.2 16.4c0 12.3 10 22.3 22.3 22.3l41.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 41.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.2-16.4l-91-84c-3.8-3.5-8.7-5.4-13.9-5.4s-10.1 1.9-13.9 5.4l-91 84z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
