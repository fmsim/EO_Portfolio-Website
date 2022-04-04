import React from "react"
import Typical from "react-typical"

export default function Profile() {
  return (
    <div className="pofile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest-square"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ehiedu</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical loop={Infinity} steps={["Ethusiastic Dev 🔴", 1000, "Full Stack Developer 💻", 1000, "MERN Stack Dev 😎", 1000, "Cross Plattform Dev 🌏", 1000, "React/React Nativ Dev 📱", 1000]} />
              </h1>
              <span className="profile-role-tagline">Knack of building applications with front and back end operations.</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="/ehizcv.pdf" download="Ehiedu ehizcv.pdf">
              <button className="btn highlithed-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
