import React from "react";
import './Contact.css'
export default function Contact() {
  return (
    <>
      <div>
        <div className="text-center pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            conatct section
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-black" />
            <i className="fa-solid fa-star" />
            <div className="line ms-3 bg-black" />
          </div>
        </div>
        <form
          noValidate
          action
          className="w-50 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid"
        >
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
          />

          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
          />

          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
          />
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
          />
          <button className="btn mt-4 text-white">
            send Message
          </button>
        </form>
      </div>
    </>
  );
}
