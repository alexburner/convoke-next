import React, { useState } from "react";
import Link from "next/link";

export const Navbar: React.SFC = () => {
  const [isActive, setActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">CONVOKE</a>
        </Link>
        <a
          role="button"
          className={"navbar-burger" + (isActive ? " is-active" : "")}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setActive(!isActive)}
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
            <a className="navbar-item" href="/">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar-item" href="/about">
              About
            </a>
          </Link>
          <Link href="/work">
            <a className="navbar-item" href="/work">
              Work
            </a>
          </Link>
          <Link href="/content">
            <a className="navbar-item" href="/content">
              Content
            </a>
          </Link>
          <a className="navbar-item" onClick={scrollToFooter}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const scrollToFooter = () => {
  document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" });
};
