import React from "react";
import "./Portfolio.css";
export default function () {
  return (
    <>
      <div className="text-center pt-4">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
          portfolio section
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 bg-black" />
          <i className="fa-solid fa-star" />
          <div className="line ms-3 bg-black" />
        </div>
      </div>

      <div className="container mb-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                alt
                className="w-100 rounded-3"
                src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
              />
              <div className="layer h-100">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                alt
                className="w-100 rounded-3"
                src="https://routeegy.github.io/startFramework/assets/images/port2.png"
              />
              <div className="layer h-100">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                alt
                className="w-100 rounded-3"
                src="https://routeegy.github.io/startFramework/assets/images/port3.png"
              />
              <div className="layer h-100">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                alt
                className="w-100 rounded-3"
                src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
              />
              <div className="layer  h-100 ">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                alt
                className="w-100 rounded-3"
                src="https://routeegy.github.io/startFramework/assets/images/port2.png"
              />
              <div className="layer  h-100 ">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                alt
                className="w-100 rounded-3"
                src="https://routeegy.github.io/startFramework/assets/images/port3.png"
              />
              <div className="layer  h-100 ">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
