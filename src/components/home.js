import React from "react";
import "../components/home.css";
import BResume from "./Asset/Bharath_CV.pdf";

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
                <a href={BResume}>View CV</a>
              </button>
              <button class="button2 btn btn-outline-dark btn-transparent">
                <a href={BResume} download={BResume}>
                  Download CV
                </a>
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
        </div>
        {/* Project section is end */}
      </section>

      <section id="contact" class="py-4">
        <div class="container">
          <h4 class="text-start mb-4">Contact</h4>
          <div class="box2 bg-dark-subtle p-3">
            <div class="text-center mb-4">
              <h5>Get In Touch</h5>
            </div>
            <div class="row d-flex justify-content-evenly">
              <div class="col-md-6 col-lg-4  mb-4 mb-md-0">
                <h4 class="mb-3">Let's Work Together</h4>
                <p className="mb-4">
                  "Let’s work together to bring your vision to life. With my
                  expertise and your goals, we can create innovative solutions
                  that drive success. I’m committed to delivering high-quality
                  results and exceeding expectations. By collaborating closely,
                  we’ll ensure that every aspect of your project is handled with
                  care and precision. Together, we can achieve remarkable
                  outcomes and elevate your business to new heights."
                </p>
              </div>

              <div class="col-md-6 col-lg-4  mt-5">
                <h4 className="h5 mb-2">E M A I L</h4>
                <a
                  href="mailto:bharathwaj2904@gmail.com"
                  className="contacts h6 mb-4"
                >
                  bharathwaj2904@gmail.com
                </a>
                <h4 className="h5 mt-5">P H O N E</h4>
                <a href="tel:+919363113960" className="contacts h6">
                  +91 9363113960
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="footer bg-dark text-light" id="footer">
        <div class="container py-5 ">
          <div class="row">
            <div class="abt col-12 col-md-6 mb-4 mb-md-0">
              <h3>About Bharathwaj</h3>
              <p class="mt-3">
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
            <div class="site col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
              <h3>Site Links</h3>
              <a class="mt-2" href="#home">
                Home
              </a>
              <a class=" mt-2" href="#about">
                About
              </a>
              <a class=" mt-2" href="#project">
                Projects
              </a>
              <a class=" mt-2" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center mt-5">
            <div class="d-flex mb-3">
              <a
                class="text-light mx-2"
                href="https://www.linkedin.com/in/bharathwaj08/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#e8eaed"
                >
                  <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                </svg>
              </a>
              <a
                class="text-light mx-2"
                href="https://bharath2904.github.io/Portfolio/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#e8eaed"
                >
                  <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                </svg>
              </a>
            </div>
            <div class="copy text-center mb-3">
              © Copyright Bharathwaj 2024
              <br />
              Design by Bharathwaj Distribution By Git-Hub
            </div>
            <div className="arrow mt-3">
              <a href="#home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80px"
                  viewBox="0 -960 960 960"
                  width="80px"
                  fill="#e8eaed"
                >
                  <path d="M440-320h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
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
