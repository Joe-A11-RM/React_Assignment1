import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer  position-relative py-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>Around The Web</h3>
              <div className="icons">
                <i className="fa-brands fa-facebook mx-1 icon" />
                <i className="fa-brands fa-twitter mx-1 icon" />
                <i className="fa-brands fa-linkedin-in mx-1 icon" />
                <i className="fa-solid fa-globe mx-1 icon" />
              </div>
            </div>
            <div className="col-md-4">
              <h3>About Freelancer</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="copyright ">
            <p>Copyright © Your Website 2021</p>
          </div>
      </div>

    </>
  );
}
