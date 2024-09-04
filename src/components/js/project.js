import React from 'react';
import '../css/project.css'

function Project() {
  return (
    <div>
      
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
            This Python project implements an interactive ordering system for a
            restaurant specializing in burgers and drinks. Users are welcomed
            with a friendly message and prompted to choose between vegetarian or
            non-vegetarian burger options. Based on their selection, they can
            specify their preferences from a predefined menu, facilitating a
            personalized ordering experience.
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
            projects, an informative about me section, and a functional contact
            form, all designed to be accessible and attractive on both desktop
            and mobile devices. The website is deployed on a web hosting service
            like GitHub Pages or Netlify for public access and easy updates.
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
    </div>
  )
}

export default Project
