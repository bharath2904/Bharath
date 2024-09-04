import React from "react";
import '../css/contact.css'

function Contact() {
  return (
    <div>
      {/* contact section is start */}
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
    </div>
  );
}

export default Contact
