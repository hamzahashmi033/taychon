"use client";
import React, { useEffect } from "react";
import Link from "next/link";
function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }
  function handleToggleNav() {
    if (
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.remove("show");
    } else if (
      !document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document.querySelector(".navbar .navbar-collapse").classList.add("show");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <Link className="logo icon-img-100" href="/">
          <img
            src="/assets/imgs/logo/logo2.png"
            alt="logo"
            style={{ scale: 1.71 }}
            className="p-2"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              // onMouseLeave={handleDropdownMouseLeave}
              // onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <Link
                className="nav-link "
                // data-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li
              // onMouseLeave={handleDropdownMouseLeave}
              // onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <Link
                className="nav-link "
                // data-toggle="dropdown"
                href="/page-about"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">About Us</span>
              </Link>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/page-services"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Our Services</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    App Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Marketing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    DevOps Enginnering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web Design
                  </a>
                </li>
              </ul>
            </li>
            <li
              // onMouseLeave={handleDropdownMouseLeave}
              // onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link "
                // data-toggle="dropdown"
                href="/portfolio-grid"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            <li
              // onMouseLeave={handleDropdownMouseLeave}
              // onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <Link
                className="nav-link "
                // data-toggle="dropdown"
                href="/blog-grid-sidebar"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Blogs</span>
              </Link>
            </li>
            <li
              // onMouseLeave={handleDropdownMouseLeave}
              // onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <Link
                className="nav-link "
                // data-toggle="dropdown"
                href="/page-contact"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
