import React from "react";
import "./Start.css";
export default function Start() {
  return (
    <>
      <div className="start start-bg">
        <div className="text-white text-center">
          <img
            src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
            alt=""
          />
          <h2 className="start-heading mt-5">start framework</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white" />
            <i className="fa-solid fa-star" />
            <div className="line ms-3 bg-white" />
          </div>
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
