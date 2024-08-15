import React from "react";
import "../components/home.css";

function Home() {
  return (
    <div>
      <section id="home">
        <nav class="navbar navbar-expand-md bg-dark">
          <div>
            <a href="#home" class="navbar-brand">
              <span class="fw-bold text-light mx-5 h2">Portfolio.</span>
            </a>
          </div>
          <button
            class="navbar-toggler mx-3 bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto p-3 my-2">
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="#home">
                  Home
                </a>
              </li>
              <li class="line"></li>
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="#about">
                  About
                </a>
              </li>
              <li class="line"></li>
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="#project">
                  Projects
                </a>
              </li>
              <li class="line"></li>
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="first">
          <div class="container-lg bg-dark-subtle p-5 my-5 rounded phill border border-2">
            <h1 class="text-center text-muted  fw-bolder">I'M BHARATHWAJ</h1>
            <div class="inner-div text-center text-light bg-dark rounded border border-3 p-3 my-5 col-4">
              Full Stack Python Developer
            </div>
            <div className="d-flex justify-content-center gap-3">
              <button class="button1 btn btn-outline-dark btn-transparent">
                View Portfolio
              </button>
              <button class="button2 btn btn-outline-dark btn-transparent">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The card is start and about section also start */}
      <section id="about">
        <div className="container-lg bg-dark-subtle rounded border border-2">
          <h1 className="card-title text-center py-2">ABOUT US</h1>
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
                    <div className="d-flex flex-wrap flex-row align-items-center gap-5 mt-5">
                      <div className="p-5 bg-light custom">HTML</div>
                      <div className="p-5 bg-light shadow custom">CSS</div>
                      <div className="p-5 bg-light shadow-lg custom">
                        JavaScript
                      </div>
                      <div className="p-5 bg-light shadow-lg custom">
                        Python
                      </div>
                      <div className="p-5 bg-light shadow custom">SQL</div>
                      <div className="p-5 bg-light custom">GIT</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Acoordion Start */}
        <div>
          <div className="box0">
            <div>
              <h4 className="mt-5 ms-5">EDUCATION</h4>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button bg-dark-subtle"
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
                  <div class="accordion-body">
                    <div className="d-flex flex-column align-items-start">
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
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-dark-subtle"
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
                  <div class="accordion-body">
                    <div className="d-flex flex-column align-items-start">
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
              <div class="accordion-item">
                <h2 class="accordion-header">
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
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="d-flex flex-column align-items-start">
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
        {/* Accordion End */}

        {/* Work experiences is start */}
        <div>
          <div>
            <h4 className="mt-5 ms-5">Work Experience</h4>
          </div>
          <div className="box bg-dark-subtle">
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
        <div className="box3">
          <div>
            <h4 className="ms-5 mt-5">Projects</h4>
          </div>
          <div className="box1 bg-dark-subtle">
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
          </div>
        </div>
        {/* Project section is end */}
      </section>

      <section id="contact" class="py-5">
        <div class="container">
          <h4 class="mt-5">Contact</h4>
          <div class="box2 bg-dark-subtle p-4">
            <div class="text-center mb-4">
              <h5>Get In Touch</h5>
            </div>

            <div class="col-md-6">
              <div class="form d-flex flex-column gap-4">
                <input
                  placeholder="Name"
                  type="text"
                  class="form-control bg-light border-0 p-2"
                />
                <input
                  placeholder="Email"
                  type="email"
                  class="form-control bg-light border-0 p-2"
                />
                <input
                  placeholder="Subject"
                  type="text"
                  class="form-control bg-light border-0 p-2"
                />
                <textarea
                  placeholder="Message"
                  class="form-control bg-light border-0 p-2"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  class="button4 btn-dark btn-transparent border-0 p-2"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
