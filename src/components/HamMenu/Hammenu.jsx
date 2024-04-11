import { Link } from "react-router-dom";
import "./HamMenu.scss";
import { useEffect } from "react";

export default function HamMenu() {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const hamMenu = document.querySelector(".ham-menu");
      const offScreenMenu = document.querySelector(".off-screen-menu");
      const logo = document.querySelector("#name-logo");

      if (!event.target.closest(".ham-menu") && !event.target.closest(".ham-button")) {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
        logo.classList.remove("active");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function clickHandle() {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const logo = document.querySelector("#name-logo");

    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    logo.classList.toggle("active");
  }
  return (
    <>
      <nav>
        <button className="ham-button" onClick={clickHandle}></button>
        <div className="ham-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="off-screen-menu">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
            <li className="resume">
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
