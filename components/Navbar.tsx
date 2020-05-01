import React, { useState } from "react";
import Link from "next/link";

export const Navbar: React.SFC = () => {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => setActive(!isActive);
  const makeInactive = () => setActive(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item" onClick={makeInactive}>
              <img src="https://i.imgur.com/aXdnZnn.png" alt="Convoke" />
            </a>
          </Link>
          <a
            role="button"
            className={"navbar-burger" + (isActive ? " is-active" : "")}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarId"
          className={"navbar-menu" + (isActive ? " is-active" : "")}
        >
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item" onClick={makeInactive}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="navbar-item" onClick={makeInactive}>
                About
              </a>
            </Link>
            {/* <Link href="/work">
              <a className="navbar-item" href="/work">
                Work
              </a>
            </Link> */}
            <Link href="/content">
              <a className="navbar-item" onClick={makeInactive}>
                Content
              </a>
            </Link>
            <a
              className="navbar-item"
              onClick={() => {
                makeInactive();
                scrollToFooter();
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const scrollToFooter = () =>
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
